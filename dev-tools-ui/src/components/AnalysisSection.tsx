import { LightBulbIcon, ChartBarIcon } from '@heroicons/react/24/outline';

import { Analysis } from '@/types';

interface AnalysisSectionProps {
  analysis: Analysis;
}

export default function AnalysisSection({ analysis }: AnalysisSectionProps) {
  if (!analysis) return null;
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mt-8 shadow-sm border border-blue-100 dark:border-blue-800">
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <ChartBarIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Market Trends
            </h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {analysis.market_trends}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <LightBulbIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Recommendations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {analysis.user_recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 