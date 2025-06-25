'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CompanyCard from '@/components/CompanyCard';
import AnalysisSection from '@/components/AnalysisSection';
import { SearchResult } from '@/types';

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fadeIn, setFadeIn] = useState(false);

  // Add fade-in effect on initial load
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    
    console.log('Search initiated with query:', query);
    
    try {
      console.log('Sending fetch request with query:', query);
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      console.log('Fetch response received:', response.status, response.statusText);
      
      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }
      
      const data = await response.json();
      console.log('Parsed response data:', data);
      
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('An error occurred while searching. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <main className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 transition-all duration-500 transform hover:scale-[1.01]">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Developer Tools <span className="text-gray-900 dark:text-white">Research Agent</span>
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500 dark:text-gray-400">
            Find and compare the best developer tools, libraries, and platforms for your next project.
          </p>
        </div>
        
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
        
        {error && (
          <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4 mb-8 animate-fadeIn border-l-4 border-red-500 relative">
            <button 
              onClick={clearError}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              title="Clear error message"
              aria-label="Clear error message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-300">Error</h3>
                <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {isLoading && (
          <div className="flex flex-col justify-center items-center py-20 animate-fadeIn">
            <div className="relative">
              <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
              <div className="h-16 w-16 rounded-full border-l-4 border-r-4 border-indigo-500 animate-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Searching for the best developer tools...</p>
          </div>
        )}
        
        {searchResults && !isLoading && (
          <div className="animate-fadeIn transition-all duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Search Results {searchResults.category && <span className="text-blue-600 dark:text-blue-400">• {searchResults.category}</span>}
              </h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Found {searchResults.companies.length} tools
              </span>
            </div>
            
            <div className="space-y-6">
              {searchResults.companies.map((company, i) => (
                <CompanyCard key={company.name} company={company} index={i + 1} />
              ))}
            </div>
            
            <AnalysisSection analysis={searchResults.analysis} />
          </div>
        )}
        
        {!searchResults && !isLoading && (
          <div className="text-center py-20 animate-fadeIn">
            <div className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-600 mb-4">
              <svg
                className="mx-auto h-full w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="mt-2 text-xl font-medium text-gray-900 dark:text-white">No results yet</h3>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Start by searching for developer tools above. Try searching for "database", "mobile", or "AI tools" to get started.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
