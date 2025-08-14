# An Invitation to the Hidden - A Speakeasy Bar Website

A modern, responsive website for a speakeasy bar built with HTML, TailwindCSS, and vanilla JavaScript.

## Project Overview

This project is a single-page website for a fictional speakeasy bar called "An Invitation to the Hidden". The website features a clean, elegant design with responsive layouts and interactive elements.

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Sticky header navigation on scroll
- Image gallery with modal popup functionality
- Built with TailwindCSS for modern, utility-first styling
- Simple build process for production deployment

## Project Structure

```
├── src/                  # Source files
│   ├── assets/           # Assets directory
│   │   ├── css/          # CSS files
│   │   │   ├── input.css # TailwindCSS input file
│   │   │   └── output.css # Compiled CSS (generated)
│   │   ├── images/       # Image files
│   │   └── js/           # JavaScript files
│   │       └── main.js   # Main JavaScript file
│   └── index.html        # Main HTML file
├── dist/                 # Distribution files (generated)
├── build.js              # Build script
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Technologies Used

- HTML5
- CSS3 with TailwindCSS v4.1.11
- Vanilla JavaScript
- Node.js for build process

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/artechspirit/landing.git
   cd landing
   ```

2. Install dependencies
   ```
   npm install
   ```

### Development

Run the development server with:

```
npm run dev
```

This will start TailwindCSS in watch mode, compiling your CSS as you make changes.

### Building for Production

To build the project for production:

```
npm run build
```

This will:
1. Compile and minify the TailwindCSS
2. Copy all necessary files from `src` to `dist` (excluding `input.css`)

The production-ready files will be in the `dist` directory.

## Customization

- Modify `src/index.html` to change the content
- Update styles in `src/assets/css/input.css`
- Edit JavaScript functionality in `src/assets/js/main.js`
- Replace images in `src/assets/images/` with your own

## Author

Beta Priyoko <artechspirit@gmail.com>

## License

This project is licensed under the ISC License.