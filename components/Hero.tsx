'use client';

import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          SELEK TURIZM ile Hayallerinizdeki Tatili Keşfedin
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl">
          Profesyonel hizmet anlayışımızla dünyanın en güzel yerlerini keşfetmek için doğru yerdesiniz
        </p>

        {/* Arama Bölümü */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nereye?
              </label>
              <input
                type="text"
                placeholder="Destinasyon seçin"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tarih
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kişi Sayısı
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900">
                <option>1 Kişi</option>
                <option>2 Kişi</option>
                <option>3-5 Kişi</option>
                <option>5+ Kişi</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Ara</span>
          </button>
        </div>
      </div>
    </div>
  );
}

