export interface Company {
  name: string;
  website: string;
  description: string;
  pricing_model?: string;
  is_open_source?: boolean;
  tech_stack?: string[];
  language_support?: string[];
  api_available?: boolean;
  integration_capabilities?: string[];
  category?: string;
}

export interface Analysis {
  market_trends: string;
  user_recommendation: string;
}

export interface SearchResult {
  category: string;
  companies: Company[];
  analysis: Analysis;
}

export interface SearchRequest {
  query: string;
} 