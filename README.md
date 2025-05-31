# MFT Test: React + TypeScript + Vite Timer App

This project is a minimal React application built with TypeScript and Vite. It features a simple timer with play, pause, and reset functionality, designed as part of the MFT Hiring Test.

## Features

- **Timer**: Start, pause, and reset a timer that counts seconds.
- **Accessible UI**: Buttons are accessible with ARIA labels.
- **Modern Tooling**: Built with Vite for fast development and TypeScript for type safety.
- **Linting**: ESLint is configured for code quality.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repo
$ git clone https://github.com/a-nowruzi/mft-test
$ cd mft-test

# Install dependencies
$ yarn install
# or
$ npm install
```

### Running the App in Development

```bash
$ yarn dev
# or
$ npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```bash
$ yarn build
# or
$ npm run build
```

### Previewing the Production Build

```bash
$ yarn preview
# or
$ npm run preview
```

### Linting

```bash
$ yarn lint
# or
$ npm run lint
```

## Project Structure

```
├── public/              # Static assets (e.g., vite.svg)
├── src/
│   ├── App.tsx         # Main React component (timer logic)
│   ├── App.css         # Component-specific styles
│   ├── index.css       # Global styles
│   ├── main.tsx        # App entry point
│   └── assets/         # Image assets (e.g., react.svg)
├── index.html          # HTML template
├── package.json        # Project metadata and scripts
├── tsconfig*.json      # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Timer Functionality

The timer is implemented in `src/App.tsx` using React hooks:
- **Play**: Starts the timer (increments every second)
- **Pause**: Pauses the timer
- **Reset**: Stops and resets the timer to zero
- Uses `setInterval` and `useRef` for interval management
- Cleans up intervals on component unmount

## Technologies Used
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
