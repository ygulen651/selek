'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'KONAKLAMALI TURLAR',
    subtitle: 'Güneydoğu, Karadeniz, İstanbul, Ege',
    description: 'Turları Rezervasyonları Başladı',
    mainImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop',
    leftImages: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=300&h=200&fit=crop'
    ],
    rightImages: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'GÜNÜBİRLİK TURLAR',
    subtitle: 'İstanbul Çevresi ve Marmara',
    description: 'Günlük Keşif Turları',
    mainImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    leftImages: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=300&h=200&fit=crop'
    ],
    rightImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=300&h=200&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'YURTDIŞI TURLAR',
    subtitle: 'Avrupa, Asya ve Afrika',
    description: 'Dünya Turuna Çıkın',
    mainImage: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop',
    leftImages: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=200&fit=crop'
    ],
    rightImages: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop'
    ]
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(true); // Görsel yok, direkt başlat
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Responsive Professional Collage Layout */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
              
              {/* Main Layout Container */}
              <div className="relative w-full h-full max-w-7xl mx-auto">
                
                {/* MOBILE ONLY LAYOUT */}
                <div className="md:hidden absolute inset-0 flex flex-col justify-center px-4 py-6">
                  {/* Main Image - Full Width on Mobile */}
                  <div 
                    className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl relative"
                    style={{
                      backgroundImage: `url(${slide.mainImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Strong Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Content - Well positioned */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h1 className="text-3xl font-bold mb-3 leading-tight drop-shadow-lg">{slide.title}</h1>
                      <p className="text-lg mb-2 font-semibold drop-shadow-md">{slide.subtitle}</p>
                      <p className="text-base opacity-95 leading-relaxed">{slide.description}</p>
                    </div>
                    
                    {/* Top Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-white text-sm font-bold">SELEK TURİZM</div>
                    </div>
                  </div>
                  
                  {/* Supporting Images Grid - Compact */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div 
                      className="h-24 rounded-xl overflow-hidden shadow-lg"
                      style={{
                        backgroundImage: `url(${slide.leftImages[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div 
                      className="h-24 rounded-xl overflow-hidden shadow-lg"
                      style={{
                        backgroundImage: `url(${slide.leftImages[1]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div 
                      className="h-24 rounded-xl overflow-hidden shadow-lg"
                      style={{
                        backgroundImage: `url(${slide.rightImages[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden md:flex absolute inset-0 items-center justify-between px-8">
                  
                  {/* Left Side - Supporting Images */}
                  <div className="flex flex-col space-y-4 lg:space-y-6 w-1/5 lg:w-1/4">
                    <div 
                      className="w-full h-24 lg:h-32 rounded-lg lg:rounded-xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${slide.leftImages[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div 
                      className="w-full h-20 lg:h-24 rounded-lg lg:rounded-xl overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${slide.leftImages[1]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>

                  {/* Center - Main Image with Content */}
                  <div className="flex-1 mx-4 lg:mx-8 relative">
                    <div 
                      className="w-full h-80 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl relative group"
                      style={{
                        backgroundImage: `url(${slide.mainImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">{slide.title}</h1>
                        <p className="text-lg md:text-xl mb-3 font-medium">{slide.subtitle}</p>
                        <p className="text-base md:text-lg opacity-90">{slide.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 w-16 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <div className="text-white text-xs font-bold">SELEK</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Supporting Images */}
                  <div className="flex flex-col space-y-4 lg:space-y-6 w-1/5 lg:w-1/4">
                    <div 
                      className="w-full h-20 lg:h-28 rounded-lg lg:rounded-xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${slide.rightImages[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div 
                      className="w-full h-24 lg:h-32 rounded-lg lg:rounded-xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${slide.rightImages[1]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                </div>

                {/* Floating Decorative Elements - Desktop Only */}
                <div className="hidden lg:flex absolute top-8 left-8 w-24 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg transform rotate-12 opacity-80">
                  <div className="flex items-center justify-center h-full text-white text-xs font-bold">
                    BOARDING
                  </div>
                </div>
                <div className="hidden lg:flex absolute top-16 right-16 w-20 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transform -rotate-6 opacity-75">
                  <div className="flex items-center justify-center h-full text-white text-xs font-bold">
                    8:30 AM
                  </div>
                </div>
                <div className="hidden lg:flex absolute bottom-16 left-16 w-18 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-lg transform rotate-6 opacity-70">
                  <div className="flex items-center justify-center h-full text-white text-xs font-bold">
                    20 SEP
                  </div>
                </div>
                <div className="hidden lg:flex absolute bottom-8 right-8 w-16 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg shadow-lg transform -rotate-12 opacity-65">
                  <div className="flex items-center justify-center h-full text-white text-xs font-bold">
                    2021
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
