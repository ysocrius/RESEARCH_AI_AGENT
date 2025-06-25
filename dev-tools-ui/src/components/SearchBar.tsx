import { useState, FormEvent, useEffect } from 'react';
import { MagnifyingGlassIcon, ClockIcon, FireIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export default function SearchBar({ onSearch, isLoading = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  // Popular search suggestions
  const popularSearches = ['database', 'mobile', 'AI tools', 'code editor', 'cloud'];

  // Load search history from localStorage on component mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      try {
        setSearchHistory(JSON.parse(storedHistory));
      } catch (error) {
        console.error('Error parsing search history:', error);
        // Reset search history if invalid JSON
        localStorage.setItem('searchHistory', JSON.stringify([]));
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      saveSearchToHistory(query.trim());
      onSearch(query.trim());
      setShowSuggestions(false);
    }
  };

  const handleSearchClick = (searchTerm: string) => {
    if (!isLoading) {
      setQuery(searchTerm);
      saveSearchToHistory(searchTerm);
      onSearch(searchTerm);
      setShowSuggestions(false);
    }
  };

  const saveSearchToHistory = (searchTerm: string) => {
    // Add to beginning of array, remove duplicates, limit to 5 items
    const updatedHistory = [
      searchTerm, 
      ...searchHistory.filter(item => item.toLowerCase() !== searchTerm.toLowerCase())
    ].slice(0, 5);
    
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white transition duration-150 ease-in-out"
            placeholder="Search for developer tools, libraries, platforms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            onFocus={() => setShowSuggestions(true)}
          />
          <MagnifyingGlassIcon 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 rounded-md text-white ${
            isLoading || !query.trim()
              ? 'bg-blue-300 dark:bg-blue-700 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400'
          } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
          {isLoading ? (
            <div className="h-5 w-5 border-t-2 border-white rounded-full animate-spin"></div>
          ) : (
            'Search'
          )}
        </button>
      </form>

      {/* Search suggestions panel */}
      {showSuggestions && !isLoading && (
        <div 
          className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 py-3 px-4"
          onMouseLeave={() => setShowSuggestions(false)}
        >
          {/* Recent searches */}
          {searchHistory.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Searches</h3>
                </div>
                <button 
                  onClick={clearSearchHistory}
                  className="text-xs text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Clear
                </button>
              </div>
              <ul className="space-y-1">
                {searchHistory.map((term, index) => (
                  <li key={`history-${index}`}>
                    <button
                      onClick={() => handleSearchClick(term)}
                      className="w-full text-left px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-150 flex items-center"
                    >
                      <ClockIcon className="h-3.5 w-3.5 text-gray-400 mr-2" />
                      {term}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Popular searches */}
          <div>
            <div className="flex items-center mb-2">
              <FireIcon className="h-4 w-4 text-orange-500 mr-1" />
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Popular Searches</h3>
            </div>
            <ul className="space-y-1">
              {popularSearches.map((term, index) => (
                <li key={`popular-${index}`}>
                  <button
                    onClick={() => handleSearchClick(term)}
                    className="w-full text-left px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-150 flex items-center"
                  >
                    <FireIcon className="h-3.5 w-3.5 text-orange-400 mr-2" />
                    {term}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 