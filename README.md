# SELEK TURIZM - Seyahat Acentası Web Sitesi

Modern ve sade tasarıma sahip, Next.js ile geliştirilmiş bir turizm/seyahat acentası web sitesi.

## Özellikler

- Modern ve responsive tasarım
- Next.js 15 App Router
- TypeScript desteği
- Tailwind CSS ile stil
- Lucide React ikonları
- Tam responsive (mobil, tablet, desktop)

## Sayfalar

- **Ana Sayfa**: Hero bölümü, öne çıkan turlar, hizmetler ve istatistikler
- **Turlar**: Tüm tur paketlerinin listelendiği sayfa
- **Hakkımızda**: Şirket hikayesi ve değerleri
- **İletişim**: İletişim formu ve bilgileri

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda açın:
```
http://localhost:3000
```

## Üretim

Üretim için build almak:
```bash
npm run build
npm start
```

## Teknolojiler

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Unsplash API (Örnek Resimler)

## Geliştirme

Proje klasör yapısı:
```
turuzim/
├── app/                 # Next.js sayfaları
│   ├── page.tsx        # Ana sayfa
│   ├── turlar/         # Turlar sayfası
│   ├── hakkimizda/     # Hakkımızda sayfası
│   └── iletisim/       # İletişim sayfası
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── TourCard.tsx
│   └── Services.tsx
└── public/             # Statik dosyalar
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
