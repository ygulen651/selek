import { Globe, Shield, Star, Heart } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Dünya Çapında Destinasyonlar',
    description: '50+ ülkede 200+ destinasyon ile dünyanın her köşesini keşfedin.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Güvenli Seyahat Garantisi',
    description: 'Tüm turlarımızda sigorta ve güvenlik önlemleri ile huzurlu seyahat.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Star,
    title: '5 Yıldız Hizmet Kalitesi',
    description: 'Uzman rehberler ve kaliteli konaklama ile premium deneyim.',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Heart,
    title: 'Müşteri Memnuniyeti Odaklı',
    description: '%98 müşteri memnuniyeti oranı ile hizmet kalitemizi kanıtlıyoruz.',
    color: 'from-red-500 to-red-600',
  },
];

export default function ModernFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modern Seyahat Deneyimi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknoloji ve deneyimi birleştirerek size en iyi seyahat deneyimini sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

