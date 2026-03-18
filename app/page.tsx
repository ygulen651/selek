import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import SearchBar from '@/components/SearchBar';
import QuickLinks from '@/components/QuickLinks';
import ModernTourCard from '@/components/ModernTourCard';
import Services from '@/components/Services';
import ModernFeatures from '@/components/ModernFeatures';

const featuredTours = [
  {
    id: 1,
    title: 'GAP (GÜNEYDOĞU) TURU',
    location: 'KONYA ÇIKIŞLI',
    duration: '9-12 EKİM 2025 (PERŞEMBE-PAZAR)',
    groupSize: '2 Gece 3 Gün',
    price: '9500 TL',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
    category: 'GÜNEYDOĞU TURLARI',
  },
  {
    id: 2,
    title: 'İSTANBUL ADALAR TURU',
    location: 'İSTANBUL ÇIKIŞLI',
    duration: '10-12 EKİM 2025 (CUMA-PAZAR)',
    groupSize: '1 Gece 2 Gün',
    price: '5750 TL',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
    category: 'İSTANBUL TURLARI',
  },
  {
    id: 3,
    title: 'BUTİK EGE TURU (Ara Tatil)',
    location: 'İZMİR ÇIKIŞLI',
    duration: '8-11 KASIM 2025 (ARA TATİL)',
    groupSize: '2 Gece 3 Gün',
    price: '8000 TL',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
    category: 'BUTİK EGE TURLARI',
  },
  {
    id: 4,
    title: 'KARADENİZ & BATUM TURU',
    location: 'TRABZON ÇIKIŞLI',
    duration: '15-18 EKİM 2025 (ÇARŞAMBA-CUMARTESİ)',
    groupSize: '2 Gece 3 Gün',
    price: '7500 TL',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    description: 'Sezon Boyu En Uygun Fiyatlarla',
    category: 'KARADENİZ TURLARI',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSlider />
        <SearchBar />
        <QuickLinks />

        {/* Öne Çıkan Turlar */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
                  Güncel Konaklamalı Turlar
                </h2>
                <p className="text-gray-600 text-lg font-light">
                  Size özel hazırladığımız en seçkin tur paketlerini keşfedin ve hayalinizdeki tatile ilk adımı atın.
                </p>
              </div>
              <a 
                href="/turlar" 
                className="mt-6 md:mt-0 text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center group"
              >
                Tümünü Gör
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredTours.map((tour) => (
                <div key={tour.id} className="h-full">
                  <ModernTourCard {...tour} />
                </div>
              ))}
            </div>

          </div>
        </section>

        <Services />

        <ModernFeatures />

        {/* İstatistikler */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-900"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 opacity-90"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-primary-400/30">
              <div className="px-4">
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white font-serif drop-shadow-md">2500+</div>
                <div className="text-primary-100 font-medium tracking-wide uppercase text-sm">Mutlu Müşteri</div>
              </div>
              <div className="px-4">
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white font-serif drop-shadow-md">50+</div>
                <div className="text-primary-100 font-medium tracking-wide uppercase text-sm">Ülke</div>
              </div>
              <div className="px-4">
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white font-serif drop-shadow-md">300+</div>
                <div className="text-primary-100 font-medium tracking-wide uppercase text-sm">Tur Paketi</div>
              </div>
              <div className="px-4">
                <div className="text-5xl lg:text-6xl font-bold mb-3 text-white font-serif drop-shadow-md">15+</div>
                <div className="text-primary-100 font-medium tracking-wide uppercase text-sm">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
