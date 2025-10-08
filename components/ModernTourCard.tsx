import { MapPin, Clock, Users, Star, Calendar } from 'lucide-react';

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
  location,
  duration,
  groupSize,
  price,
  image,
  description,
  category,
}: ModernTourCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-white text-sm ml-2">{description}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors">
            Rezervasyon
          </button>
        </div>
        
        {/* Logo */}
        <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-semibold text-gray-800">
          SELEK TURIZM
        </div>
      </div>
      
      <div className="p-6">
        {/* Category */}
        <div className="text-center mb-3">
          <span className="text-pink-600 text-sm font-semibold">{category}</span>
        </div>
        
        {/* Tour Name */}
        <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
          {title}
        </h4>
        
        {/* Details */}
        <div className="text-center space-y-2 mb-4">
          <div className="flex items-center justify-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center justify-center text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{groupSize}</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-red-600">{price}</span>
        </div>
        
        {/* Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors font-medium">
          Daha Fazla Bilgi Al
        </button>
      </div>
    </div>
  );
}
