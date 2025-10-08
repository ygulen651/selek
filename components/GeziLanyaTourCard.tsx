import { Star } from 'lucide-react';

interface GeziLanyaTourCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function GeziLanyaTourCard({
  title,
  category,
  image,
  description,
}: GeziLanyaTourCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
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
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors">
            tıkla rezervasyon yap
          </button>
        </div>
        
        {/* Logo */}
        <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-semibold text-gray-800">
          SELEK TURIZM
        </div>
      </div>
      
      {/* Category Label */}
      <div className="p-4">
        <span className="text-gray-600 text-sm">{category}</span>
      </div>
    </div>
  );
}
