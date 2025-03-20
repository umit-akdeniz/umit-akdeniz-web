export default function Links() {
    return (
      <div className="p-2 sm:p-4 md:p-6 max-w-full sm:max-w-5xl mx-auto">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Links</h1>
        <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm md:text-base">
          <li>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Example Link
            </a>
          </li>
        </ul>
      </div>
    );
  }