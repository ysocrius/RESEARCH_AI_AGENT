# Developer Tools Research Agent

An intelligent research agent that helps developers discover and compare the best tools, libraries, and platforms for their projects.

## Features

- 🔍 **Smart Search**: Find developer tools based on your needs and requirements
- 🏷️ **Category-Based Results**: View tools organized by categories (databases, mobile development, AI/ML, etc.)
- 📊 **Detailed Analysis**: Get market trends and personalized recommendations
- 💾 **Search History**: Access your recent searches for quick reference
- 🔥 **Popular Suggestions**: Quickly explore trending tool categories

## Project Structure

The project consists of two main components:

1. **Next.js Frontend (dev-tools-ui)**: User interface for searching and displaying results
2. **Python Backend (web-agent)**: Processing and analysis engine (not yet implemented)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PowerShell (for Windows users)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/developer-tools-research-agent.git
   cd developer-tools-research-agent
   ```

2. Install frontend dependencies:
   ```
   cd dev-tools-ui
   npm install
   cd ..
   ```

### Running the Application

#### Windows (PowerShell)

Simply run the PowerShell script from the root directory:

```
.\start-dev-tools.ps1
```

This will start the Next.js development server. Navigate to http://localhost:3000 in your browser.

#### Manual Start

If you prefer to start the application manually:

1. Navigate to the dev-tools-ui directory:
   ```
   cd dev-tools-ui
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Using the Application

1. **Search for Tools**: Enter keywords like "database", "mobile", "AI tools", etc. in the search bar
2. **View Results**: Explore the returned tools with detailed information about each one
3. **Access Recent Searches**: Click on items in your search history to quickly repeat searches
4. **Try Popular Suggestions**: Click on suggested searches to explore common categories

## UI Features

- **Category Badges**: Each result displays a colored badge indicating its category
- **Expandable Details**: Click "Show more" to see additional information about each tool
- **Search Suggestions**: See your recent searches and popular suggestions when you focus on the search bar
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatically adapts to your system preferences

## Development

### Project Structure

```
WEB_AGENT/
├── dev-tools-ui/         # Next.js frontend
│   ├── public/           # Static assets
│   │   ├── src/          # Source code
│   │   │   ├── app/      # Next.js app router
│   │   │   │   ├── api/  # API routes
│   │   │   │   └── ...   # Page components
│   │   │   ├── components/ # React components
│   │   │   └── types/    # TypeScript type definitions
│   │   └── ...
│   └── web-agent/        # Python backend (future implementation)
└── ...
```

### API Routes

- `/api/search`: POST endpoint for searching developer tools
  - Request: `{ "query": "your search query" }`
  - Response: `{ "companies": [...], "analysis": {...}, "category": "..." }`

## Roadmap

- [ ] Add filters for refining search results
- [ ] Implement Python backend for more advanced analysis
- [ ] Add user accounts for saving favorite tools
- [ ] Integrate with real-world data sources
- [ ] Add comparison feature for side-by-side tool evaluation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the styling utilities
- All contributors to this project
