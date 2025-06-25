# Developer Tools Research Agent - Frontend

This is the Next.js frontend for the Developer Tools Research Agent, providing a modern UI/UX for searching and comparing developer tools.

## Features

- 🔍 Search for developer tools, libraries, and platforms
- 📊 View detailed information about each tool (pricing, tech stack, API availability, etc.)
- 💡 Get AI-powered recommendations and analysis
- 🌓 Dark/light mode support
- 📱 Fully responsive design
- ⚡ Fast and interactive UI with modern animations

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **UI Components:** Headless UI
- **API Integration:** Axios
- **Animation:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   cd dev-tools-ui
   npm install
   ```

### Environment Setup

Create a `.env.local` file in the root directory:

```
# For production, set this to your Python backend URL
# PYTHON_BACKEND_URL=https://your-python-api.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Connecting to the Python Backend

This frontend is designed to work with the Python backend located in the `web-agent` directory. By default, it expects the backend to be running at `http://localhost:5000`.

To run the full application:

1. Start the Python backend (from the project root):
   ```bash
   python web-agent/main.py
   ```
2. Start the Next.js frontend:
   ```bash
   cd dev-tools-ui
   npm run dev
   ```

## Folder Structure

- `src/app` - Next.js App Router pages and API routes
- `src/components` - React components
- `src/types` - TypeScript types and interfaces
- `public` - Static assets

## License

MIT
