import { Plane, Shield, Headphones, Award } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Geniş Tur Seçenekleri',
    description: 'Yurt içi ve yurt dışı binlerce destinasyon arasından seçim yapın.',
  },
  {
    icon: Shield,
    title: 'Güvenli Seyahat',
    description: 'Tüm turlarımızda güvenliğiniz bizim önceliğimizdir.',
  },
  {
    icon: Headphones,
    title: '7/24 Destek',
    description: 'Her an yanınızdayız. Sorularınız için bize ulaşın.',
  },
  {
    icon: Award,
    title: 'En İyi Fiyat Garantisi',
    description: 'Kaliteli hizmeti en uygun fiyatlarla sunuyoruz.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden SELEK TURIZM?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesyonel ekibimizle müşterilerimize en iyi hizmeti sunmak için çalışıyoruz
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

