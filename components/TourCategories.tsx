import { List, MapPin } from 'lucide-react';

const categories = [
  'Günübirlik Turlar',
  'Konaklamalı Turlar',
  'Doğu Karadeniz Turları',
  'Kayak Turları',
  'Tatil Turları',
  'Yurtdışı Turlar',
  'Balkan Turları',
  'İtalya Turları',
  'Avrupa Turları',
  'Uzakdoğu Turları',
  'Mısır Turları',
  'Dubai Turları'
];

export default function TourCategories() {
  return (
    <div className="w-full md:w-80 bg-white rounded-lg shadow-md p-6">
      {/* Categories Title */}
      <div className="flex items-center mb-6">
        <List className="h-5 w-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Kategoriler</h3>
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Category Card */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg overflow-hidden">
        <div className="relative h-48">
          <div 
            className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-white text-lg font-bold mb-1">Kültür Turları</h4>
            <p className="text-white text-sm opacity-90">Türkiye'nin Her Bölgesine</p>
          </div>
        </div>
      </div>
    </div>
  );
}
