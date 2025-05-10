# Public Serve

A sleek, modern Express server for hosting and sharing files instantly from a data directory.

![License](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v16%2B-green)
![Express](https://img.shields.io/badge/Express-v5.1.0-lightgrey)

## 🌟 Features

- **Instant File Sharing**: Add files to the data directory and they're immediately accessible
- **Directory Browsing**: Built-in file browser at `/browse` endpoint
- **Smart File Handling**: Different cache behavior for different file types
- **Media Player**: Built-in player for video files with custom UI and controls
- **Clean URLs**: Intuitive URLs that match your file structure
- **Custom Error Pages**: Sleek 404 page when files aren't found

## 📥 Installation

```bash
# Clone the repository
git clone https://github.com/santiadjmc/public_serve.git

# Navigate to the project directory
cd public_serve

# Install dependencies
npm install
```

## ⚙️ Configuration

Create a `.env` file in the root directory:

```
# Server configuration
PORT=3000

# Optional - set to "true" to display detailed logs
VERBOSE_LOGGING=false
```

## 🚀 Usage

```bash
# Start the server
npm start

# For development with auto-reload
npm run dev
```

Once the server is running:
- Access the homepage at `http://localhost:3000`
- Browse all files at `http://localhost:3000/browse`
- Files in your data directory are accessible at their corresponding paths

### File Structure

Any file placed in the `data/` directory becomes accessible via HTTP:

```
data/
  ├── images/photo.jpg  ->  http://localhost:3000/images/photo.jpg
  ├── docs/report.pdf   ->  http://localhost:3000/docs/report.pdf
  └── video.mp4         ->  http://localhost:3000/video.mp4 (opens in player)
```

### Video Files

When accessing video files (mp4, webm, ogg, mov), the server will:

- Redirect to the player interface by default
- Download directly if `?download=true` is appended to the URL

## 💻 API

| Endpoint           | Description                                           |
|--------------------|-------------------------------------------------------|
| `/`                | Redirects to `index.html`                             |
| `/browse`          | Directory listing of all files                        |
| `/*.mp4`           | Serves video files in the built-in player             |
| `/*.mp4?download=true` | Forces download of the video file                 |
| `/[filepath]`      | Serves any static file from the data directory        |

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

## 📜 License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE) - see the LICENSE file for details.
---

<div align="center">
Made with ❤️ by <a href="https://github.com/santiadjmc">Santiago Morales</a>
</div>