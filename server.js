require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const serveIndex = require('serve-index');

const app = express();

// Basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Path to the data directory
const dataDir = path.join(__dirname, 'data');

// Direct route for video files - Convert this to middleware
app.use((req, res, next) => {
  // Check if it's a video file request
  const videoRegex = /\.(mp4|webm|ogg|mov)$/i;
  if (videoRegex.test(req.path)) {
    console.log('Video request detected:', req.path);
    
    // Check if the file exists
    const filePath = path.join(dataDir, req.path.slice(1));
    if (!fs.existsSync(filePath)) {
      console.log('Video file not found:', filePath);
      return next();
    }
    
    // Check if it's a download request
    if (req.query.download === 'true') {
      console.log('Initiating direct download for:', req.path);
      res.setHeader('Content-Disposition', `attachment; filename="${path.basename(req.path)}"`);
      return res.sendFile(filePath);
    } 
    
    // Otherwise redirect to player
    console.log('Redirecting to video player');
    const videoPath = req.path.slice(1);
    return res.redirect(`/player.html?video=${encodeURIComponent(videoPath)}`);
  }
  
  // Not a video request, continue
  console.log('Not a video request, continuing...');
  return next();
});

// Redirect root to index.html
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

// Directory browsing at /browse
app.use('/browse', serveIndex(dataDir, {
  icons: true,
  view: 'details'
}));

// Static file serving
app.use(express.static(dataDir, {
  setHeaders: (res, filePath) => {
    // Set headers based on file type
    if (path.extname(filePath).match(/\.(mp4|webm|ogg|mov)$/i)) {
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));

// 404 handler
app.use((req, res) => {
  console.log(`404 Not Found: ${req.originalUrl}`);
  const notFoundPath = path.join(dataDir, '404.html');
  
  if (fs.existsSync(notFoundPath)) {
    res.status(404).sendFile(notFoundPath);
  } else {
    res.status(404).send('404 - File Not Found');
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Server error!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`📁 Browse files at: http://localhost:${PORT}/browse`);
  console.log(`🌐 Serving files from: ${dataDir}`);
});