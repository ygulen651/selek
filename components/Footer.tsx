import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="SELEK TURIZM" 
                width={80} 
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Hayallerinizdeki tatili gerçeğe dönüştürüyoruz. Güvenli ve konforlu seyahatler için yanınızdayız.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/turlar" className="text-gray-400 hover:text-white transition-colors">
                  Turlar
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Popüler Destinasyonlar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popüler Destinasyonlar</h3>
            <ul className="space-y-2 text-gray-400">
              <li>İstanbul</li>
              <li>Kapadokya</li>
              <li>Antalya</li>
              <li>Ege Kıyıları</li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+90 555 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@turuzim.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SELEK TURIZM. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

