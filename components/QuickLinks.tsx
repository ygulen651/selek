import { Calendar, Bed, Camera, Home, Globe } from 'lucide-react';

const quickLinks = [
  {
    icon: Calendar,
    title: 'Tur Takvimi',
    color: 'text-purple-600'
  },
  {
    icon: Bed,
    title: 'Konaklamalı Turlar',
    color: 'text-orange-600'
  },
  {
    icon: Camera,
    title: 'Günübirlik Turlar',
    color: 'text-red-600'
  },
  {
    icon: Home,
    title: 'Tatil Turları',
    color: 'text-pink-600'
  },
  {
    icon: Globe,
    title: 'Yurtdışı Turları',
    color: 'text-blue-600'
  }
];

export default function QuickLinks() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors mb-3`}>
                  <Icon className={`h-6 w-6 ${link.color}`} />
                </div>
                <p className="text-sm font-medium text-gray-700">{link.title}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
