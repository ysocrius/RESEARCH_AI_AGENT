import os
from firecrawl import FirecrawlApp, ScrapeOptions
from dotenv import load_dotenv
import requests

load_dotenv()


class FirecrawlService:
    def __init__(self):
        api_key = os.getenv("FIRECRAWL_API_KEY")
        if not api_key:
            raise ValueError("Missing FIRECRAWL_API_KEY environment variable")
        self.app = FirecrawlApp(api_key=api_key)

    def search_companies(self, query: str, num_results: int = 5):
        try:
            result = self.app.search(
                query=f"{query} company pricing",
                limit=num_results,
                scrape_options=ScrapeOptions(
                    formats=["markdown"]
                )
            )
            return result
        except Exception as e:
            print(e)
            return []

    def scrape_company_pages(self, url: str):
        try:
            result = self.app.scrape_url(
                url,
                formats=["markdown"]
            )
            return result
        except Exception as e:
            print(e)
            return None


class GitHubService:
    def __init__(self):
        self.base_url = "https://api.github.com"
        self.token = os.getenv("GITHUB_TOKEN")
        self.headers = {"Accept": "application/vnd.github.v3+json"}
        if self.token:
            self.headers["Authorization"] = f"token {self.token}"

    def get_repo_info(self, owner: str, repo: str):
        url = f"{self.base_url}/repos/{owner}/{repo}"
        response = requests.get(url, headers=self.headers)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"GitHub API error: {response.status_code} {response.text}")
            return None

    def get_contributors(self, owner: str, repo: str, top_n: int = 5):
        url = f"{self.base_url}/repos/{owner}/{repo}/contributors"
        response = requests.get(url, headers=self.headers)
        if response.status_code == 200:
            return response.json()[:top_n]
        else:
            print(f"GitHub API error: {response.status_code} {response.text}")
            return []

