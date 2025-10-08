import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TourCategories from '@/components/TourCategories';
import GeziLanyaTourCard from '@/components/GeziLanyaTourCard';

const allTours = [
  {
    id: 1,
    title: 'GÜNÜBİRLİK TURLAR',
    category: 'Günübirlik Turlar',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 2,
    title: 'KONAKLAMALI TURLAR',
    category: 'Konaklamalı Turlar',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 3,
    title: 'KARADENİZ & BATUM TURLARI',
    category: 'Doğu Karadeniz Turları',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 4,
    title: 'KAYAK TURLARI',
    category: 'Kayak Turları',
    image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 5,
    title: 'TATİL TURLARI',
    category: 'Tatil Turları',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 6,
    title: 'YURTDIŞI TURLARI',
    category: 'Yurtdışı Turlar',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 7,
    title: 'BALKAN TURLARI',
    category: 'Balkan Turları',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 8,
    title: 'İTALYA TURLARI',
    category: 'İtalya Turları',
    image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 9,
    title: 'AVRUPA TURLARI',
    category: 'Avrupa Turları',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 10,
    title: 'UZAKDOĞU TURLARI',
    category: 'Uzakdoğu Turları',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 11,
    title: 'MISIR TURLARI',
    category: 'Mısır Turları',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
  {
    id: 12,
    title: 'DUBAI TURLARI',
    category: 'Dubai Turları',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
  },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tüm Turlarımız
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Size en uygun turu bulun ve hayalinizdeki tatile başlayın
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-600">
              Ana Sayfa &gt; Turlar &gt; Tur Seçeneklerimiz
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Turlar</h1>
            
            {/* Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Categories */}
              <div className="lg:w-80 flex-shrink-0">
                <TourCategories />
              </div>
              
              {/* Right Content - Tours Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allTours.map((tour) => (
                    <GeziLanyaTourCard key={tour.id} {...tour} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}