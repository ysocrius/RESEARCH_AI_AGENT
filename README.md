# Developer Tools Research Agent

This project is an intelligent research agent for developer tools, leveraging web scraping, LLM analysis, and external APIs to provide actionable insights and recommendations.

## Features
- **Web Search & Scraping:** Uses Firecrawl to search and scrape company and tool websites for up-to-date information.
- **LLM Analysis:** Utilizes OpenAI models to extract, analyze, and summarize developer tool data.
- **GitHub Integration:** Fetches repository details and contributor information using the GitHub API for deeper open-source insights.

## Integrations
### Firecrawl
- Used for web search and scraping.
- Requires `FIRECRAWL_API_KEY` in your environment variables.

### GitHub API
- Used to fetch repository metadata (stars, forks, contributors, etc.).
- Requires `GITHUB_TOKEN` in your environment variables for authenticated requests (recommended to avoid rate limits).

## Setup
1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
2. **Set environment variables:**
   - `FIRECRAWL_API_KEY` (required)
   - `GITHUB_TOKEN` (recommended for GitHub API access)
   - Any OpenAI API keys as required by your LLM integration
3. **Run the agent:**
   ```bash
   python web-agent/main.py
   ```

## Usage
- Enter a developer tools query at the prompt.
- The agent will search, scrape, analyze, and present results, including GitHub repository data when available.

## Extending
- You can add more agents/services (e.g., Clearbit, BuiltWith, Stack Exchange) by following the pattern used for Firecrawl and GitHubService.

## License
MIT
