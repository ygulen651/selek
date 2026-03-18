import { Clock, Star, Calendar } from 'lucide-react';

interface ModernTourCardProps {
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

export default function ModernTourCard({
  title,
  duration,
  groupSize,
  price,
  image,
  description,
  category,
}: ModernTourCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-2xl font-bold mb-2 font-serif drop-shadow-md">{title}</h3>
          <div className="flex items-center mb-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current drop-shadow-sm" />
              ))}
            </div>
            <span className="text-white/90 text-sm ml-2 font-light">{description}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-md">
            Rezervasyon
          </button>
        </div>
        
        {/* Logo */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary-700 shadow-sm tracking-wide">
          SELEK TURIZM
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
        {/* Category */}
        <div className="text-center mb-4">
          <span className="text-primary-600 text-xs font-bold tracking-wider uppercase bg-primary-50 px-3 py-1 rounded-full">{category}</span>
        </div>
        
        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
          <div className="flex flex-col items-center justify-center text-gray-700">
            <Calendar className="h-5 w-5 mb-1.5 text-primary-500" />
            <span className="text-xs font-medium text-center">{duration}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-700 border-l border-gray-200">
            <Clock className="h-5 w-5 mb-1.5 text-primary-500" />
            <span className="text-xs font-medium text-center">{groupSize}</span>
          </div>
        </div>
        
        {/* Price & Action */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="text-center mb-5">
            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-1">Başlayan Fiyatlarla</span>
            <span className="text-3xl font-bold text-gray-900">{price}</span>
          </div>

          {/* Button */}
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Daha Fazla Bilgi Al
          </button>
        </div>
      </div>
    </div>
  );
}
