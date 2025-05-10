# Contributing to Public Serve

Thank you for considering contributing to Public Serve! This document outlines the process for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:
- Check the issue tracker to see if the bug has already been reported
- Collect information about your environment (Node.js version, OS, etc.)

When submitting a bug report, please include:
- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Screenshots if applicable
- Your environment details

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When suggesting an enhancement:
- Use a clear and descriptive title
- Describe the current behavior and why it's limiting
- Explain the desired behavior
- Describe alternatives you've considered
- Include any screenshots or mockups

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run the tests (when available)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

#### Style Guide

- Use 2 spaces for indentation
- Use semicolons
- Follow the existing code style
- Comment your code where necessary
- Use meaningful variable and function names

## Development Setup

To set up the project locally:

```bash
# Clone your fork
git clone https://github.com/santiadjmc/public_serve.git

# Navigate to the project directory
cd public_serve

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
public_serve/
├── data/               # Files to be served
│   ├── index.html      # Homepage
│   ├── 404.html        # Custom error page
│   └── other files...
├── server.js           # Main server file
├── package.json        # Project configuration
└── .env                # Environment variables (create from .env.example)
```

## Testing

Before submitting a PR, please test your changes manually by:
1. Starting the server
2. Accessing various file types
3. Testing video playback
4. Testing directory browsing

## License

By contributing to Public Serve, you agree that your contributions will be licensed under the project's [AGPL-3.0 License](LICENSE).