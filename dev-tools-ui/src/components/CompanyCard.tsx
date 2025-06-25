import { Company } from '@/types';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface CompanyCardProps {
  company: Company;
  index: number;
}

export default function CompanyCard({ company, index }: CompanyCardProps) {
  const [showMore, setShowMore] = useState(false);

  // Handle tech stack display - if it's missing, don't try to map it
  const techStack = company.tech_stack || [];
  const hasMoreInfo = company.tech_stack || company.language_support || 
                     company.integration_capabilities || company.api_available !== undefined;

  // Get the appropriate color for category badge
  const getCategoryColor = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower === 'database') {
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300';
    } else if (categoryLower === 'mobile') {
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    } else if (categoryLower === 'ai' || categoryLower === 'ml') {
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    } else if (categoryLower === 'code' || categoryLower === 'editor') {
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
    } else {
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out mb-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-md">
              {index}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {company.name}
              </h3>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm transition-colors duration-200"
              >
                {company.website}
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-end">
            {company.category && (
              <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(company.category)}`}>
                {company.category}
              </span>
            )}
            <div className="flex space-x-2">
              {company.pricing_model && (
                <span className={`px-2 py-1 rounded-full text-xs ${
                  company.pricing_model === 'Free' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : company.pricing_model === 'Freemium'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>
                  {company.pricing_model}
                </span>
              )}
              {company.is_open_source !== undefined && (
                <span className={`px-2 py-1 rounded-full text-xs ${
                  company.is_open_source
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {company.is_open_source ? 'Open Source' : 'Proprietary'}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {company.description}
        </p>

        {techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {hasMoreInfo && (
          <button 
            className="mt-4 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-all duration-200 hover:translate-x-1"
            onClick={() => setShowMore(!showMore)}
          >
            <span>{showMore ? 'Show less' : 'Show more'}</span>
            <ChevronDownIcon
              className={`ml-1 h-4 w-4 transform transition-transform ${
                showMore ? 'rotate-180' : ''
              }`}
            />
          </button>
        )}

        {showMore && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
            {company.language_support && company.language_support.length > 0 && (
              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Language Support
                </h4>
                <div className="flex flex-wrap gap-2">
                  {company.language_support.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded transition-colors duration-200 hover:bg-indigo-100 dark:hover:bg-indigo-800/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {company.integration_capabilities && company.integration_capabilities.length > 0 && (
              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {company.integration_capabilities.map((integration) => (
                    <span
                      key={integration}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-800/30"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {company.api_available !== undefined && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  API Available
                </h4>
                <span className={`px-2 py-1 rounded text-xs ${
                  company.api_available
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {company.api_available ? 'Yes' : 'No'}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 