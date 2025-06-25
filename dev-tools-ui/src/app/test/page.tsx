'use client';

import { useState } from 'react';

export default function TestPage() {
  const [getResult, setGetResult] = useState<any>(null);
  const [postResult, setPostResult] = useState<any>(null);
  const [query, setQuery] = useState('database');
  const [isLoading, setIsLoading] = useState(false);

  const handleTestGet = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      console.log('GET response:', data);
      setGetResult(data);
    } catch (error) {
      console.error('Error testing GET:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestPost = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      console.log('POST response:', data);
      setPostResult(data);
    } catch (error) {
      console.error('Error testing POST:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestSearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      console.log('Search response:', data);
      setPostResult(data);
    } catch (error) {
      console.error('Error testing search:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">API Test Page</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Test Query Input</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border rounded"
            placeholder="Enter query"
          />
          <button
            onClick={handleTestSearch}
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={isLoading}
          >
            Test Search API
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Test GET API</h2>
          <button
            onClick={handleTestGet}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            disabled={isLoading}
          >
            Test GET
          </button>
          {getResult && (
            <div className="mt-4">
              <h3 className="font-medium">Response:</h3>
              <pre className="bg-gray-100 p-4 rounded mt-2 overflow-auto max-h-64">
                {JSON.stringify(getResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Test POST API</h2>
          <button
            onClick={handleTestPost}
            className="bg-purple-500 text-white px-4 py-2 rounded mb-4"
            disabled={isLoading}
          >
            Test POST
          </button>
          {postResult && (
            <div className="mt-4">
              <h3 className="font-medium">Response:</h3>
              <pre className="bg-gray-100 p-4 rounded mt-2 overflow-auto max-h-64">
                {JSON.stringify(postResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 