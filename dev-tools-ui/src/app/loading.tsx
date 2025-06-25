export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/70 dark:bg-gray-900/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-200 dark:border-blue-900 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full border-t-8 border-blue-600 dark:border-blue-500 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Loading</h2>
        <p className="text-gray-500 dark:text-gray-400">Finding developer tools...</p>
      </div>
    </div>
  );
} 