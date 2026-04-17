<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# OzgunsProject - Web Sitesi Geliştirme Rehberi

## Proje Hakkında
Bu proje modern, responsive bir web sitesidir. Mobil cihazlarla uyumlu, güzel görseller ve videolar içerir.

## Teknolojiler
- **HTML5**: Yapılandırma
- **CSS3**: Styling, Flexbox, Grid, Responsive Design
- **JavaScript**: Interaktif özellikler, smooth scrolling, form işleme

## Proje Yapısı
```
OzgunsProject/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript kodları
└── .github/
    └── copilot-instructions.md
```

## Önemli Özellikler
1. **Responsive Design**: Mobile, tablet ve desktop uyumlu
2. **Sticky Navigation**: Sabit üst navbar
3. **Hero Section**: Gradient arka plan ile etkileyici banner
4. **Galeri**: Responsive grid ile görseller
5. **Video Bölümü**: HTML5 video oynatıcı
6. **İletişim Formu**: Basit form işleme
7. **Animasyonlar**: Fade-in efektleri ve scroll animasyonları

## Renk Şeması
- Primary Color: #6366f1 (İndigo)
- Secondary Color: #ec4899 (Pembe)
- Text Color: #1f2937 (Koyu Gri)
- Light Background: #f9fafb (Açık Gri)

## Responsive Breakpoints
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## İçerik Ekleme
1. **Görseller**: `styles.css` veya `index.html` dosyalarında placeholder görseller yerine kendi resimlerinizi ekleyin
2. **Videolar**: `index.html` dosyasında video bölümündeki `your-video.mp4` ve `your-video2.mp4` yerine kendi video dosyalarınızı referans gösterin
3. **Metin**: Tüm bölümlerin metin içeriğini kendi özel içeriğiniz ile değiştirin

## Mobil Menü
Hamburger menüsü 768px altında otomatik olarak görünür. JavaScript dosyasında toggle işlemi yapılmaktadır.

## Form İşleme
Contact formu şu an sadece basit validasyon yapmaktadır. Backend entegrasyonu için `script.js` dosyasını güncellemeniz gerekir.

## Performans İpuçları
1. Görselleri optimize edin (PNG/JPEG compression)
2. Videoları responsive biçimlerde saklayın
3. CSS ve JavaScript dosyalarını minify edin (production için)
4. Web font kullanımını minimalize edin

## Geliştirme Tavsiyeleri
- Tüm değişiklikleri test edin (responsive tasarım kontrol için tarayıcı DevTools kullanın)
- Semantic HTML kullanın
- CSS custom properties (variables) ile tema renkleri yönetin
- JavaScript kodunda comments ekleyin
- SEO için meta tags ekleyin

## İletişim Formu Backend Entegrasyonu
Şu an sadece frontend validasyonu vardır. Backend eklemek için:
1. API endpoint oluşturun
2. `script.js` dosyasında fetch veya XMLHttpRequest kullanın
3. Proper error handling ekleyin