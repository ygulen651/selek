import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hakkımızda
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Seyahat tutkunuzu gerçeğe dönüştürmek için buradayız
            </p>
          </div>
        </div>

        {/* Hikayemiz */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Hikayemiz
                </h2>
                <p className="text-gray-600 mb-4">
                  2015 yılında küçük bir ekiple başlayan yolculuğumuz, bugün binlerce mutlu müşteriyle devam ediyor. 
                  Seyahat tutkumuz ve müşteri memnuniyeti odaklı yaklaşımımızla, Türkiye\'nin önde gelen seyahat 
                  acentalarından biri haline geldik.
                </p>
                <p className="text-gray-600 mb-4">
                  Her bir müşterimize özel, unutulmaz deneyimler yaratmak için çalışıyoruz. Deneyimli ekibimiz 
                  ve geniş destinasyon ağımızla, hayalinizdeki tatili gerçeğe dönüştürmeye hazırız.
                </p>
                <p className="text-gray-600">
                  Yurt içi ve yurt dışı turlarımız, özel gezilerimiz ve kurumsal hizmetlerimizle her türlü 
                  seyahat ihtiyacınıza çözüm sunuyoruz.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-96 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Değerlerimiz */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Değerlerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Başarımızın arkasındaki ilkeler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Müşteri Odaklı
                </h3>
                <p className="text-gray-600">
                  Müşterilerimizin memnuniyeti her şeyin önünde gelir
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Profesyonellik
                </h3>
                <p className="text-gray-600">
                  Deneyimli ekibimizle kaliteli hizmet sunuyoruz
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kalite
                </h3>
                <p className="text-gray-600">
                  En yüksek standartlarda hizmet kalitesi
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tutku
                </h3>
                <p className="text-gray-600">
                  Seyahat tutkumuzla hareket ediyoruz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Neden Biz */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Neden Turuzim?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600 text-lg">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-600 text-lg">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 text-lg">Destinasyon</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

