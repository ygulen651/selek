'use client';

import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm">
          <Search className="h-6 w-6 text-gray-500 mx-3" />
          <input
            type="text"
            placeholder="Bir ya da daha fazla kelime ile arama yapabilirsiniz"
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors font-medium">
            Ara
          </button>
        </div>
      </div>
    </div>
  );
}
