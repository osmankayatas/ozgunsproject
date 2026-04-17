# OzgunsProject - Modern Web Sitesi

Yaratıcı ve modern tasarıma sahip, tamamen responsive bir web sitesi projesi.

## 🎨 Özellikler

- ✅ **Mobil Uyumlu Tasarım** - Tüm cihazlarda mükemmel görünüm
- ✅ **Modern UI/UX** - Gradient efektleri ve smooth animasyonlar
- ✅ **Sticky Navigation** - Sabit üst menü
- ✅ **Hero Section** - Etkileyici açılış bölümü
- ✅ **Responsive Gallery** - Görseller için grid layout
- ✅ **Video Desteği** - HTML5 video oynatıcı
- ✅ **İletişim Formu** - Basit form validasyonu
- ✅ **Smooth Scrolling** - Pürüzsüz sayfa kaydırma
- ✅ **Scroll Animasyonları** - Elemanlar kayıyor

## 📁 Proje Yapısı

```
OzgunsProject/
├── index.html              # Ana HTML dosyası
├── styles.css              # CSS stilleri (responsive)
├── script.js               # JavaScript kodları
├── README.md               # Bu dosya
└── .github/
    └── copilot-instructions.md  # Copilot talimatları
```

## 🚀 Hızlı Başlangıç

1. **Projeyi Açın**
   - VS Code'de OzgunsProject klasörünü açın
   - Veya command line'dan: `code OzgunsProject`

2. **Sityi Tarayıcıda Görüntüleyin**
   - `index.html` dosyasına sağ tıklayın
   - "Open with Live Server" seçeneğini seçin (Live Server extension gerekli)
   - Veya doğrudan tarayıcıda dosyayı açın

3. **Geliştirme Başlayın**
   - Kendi içeriğinizi ekleyin
   - CSS dosyasında renkleri özelleştirin
   - JavaScript dosyasında yeni özellikler ekleyin

## 🎯 Bölümler

### 1. Navigation (Navigasyon)
- Sticky header menüsü
- Mobil cihazlarda hamburger menüsü
- Smooth scroll bağlantıları

### 2. Hero Section
- Gradient arka plan
- Büyük başlık ve slogan
- CTA (Call-to-Action) düğmesi

### 3. About (Hakkında)
- Bilgilendirici metin bölümü
- Açık arka plan

### 4. Gallery (Galeri)
- Responsive grid layout
- 4 görsel placeholder
- Hover efekti ile ölçeklenme

### 5. Videos (Videolar)
- HTML5 video oynatıcı
- 2 video slotu
- Responsive tasarım

### 6. Contact (İletişim)
- İletişim formu
- İsim, email ve mesaj alanları
- Form validasyonu

### 7. Footer
- Copyright bilgisi
- Sosyal medya bağlantıları

## 🎨 Renk Şeması

```css
Primary Color: #6366f1 (İndigo)
Secondary Color: #ec4899 (Pembe)
Text Color: #1f2937 (Koyu Gri)
Light Background: #f9fafb (Açık Gri)
White: #ffffff
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Tam menü görünür
- **Tablet**: 481px - 768px - Hamburger menüsü
- **Mobile**: < 480px - Mobil optimizasyonu

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Media Queries
- **JavaScript (Vanilla)** - Interaktif özellikler

## 💡 Kullanım İpuçları

### Görselleri Değiştirmek
`index.html` dosyasında galeri bölümünde placeholder görselleri kendi resimleriniz ile değiştirin:
```html
<img src="your-image.jpg" alt="Açıklama">
```

### Videoları Eklemek
Video bölümünde video dosya yollarını güncelleyin:
```html
<source src="your-video.mp4" type="video/mp4">
```

### Renkleri Özelleştirmek
`styles.css` dosyasında `:root` CSS değişkenlerini düzenleyin:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
}
```

### Mobil Menüyü Test Etmek
Tarayıcı DevTools (F12) açın, mobile view'a geçin ve hamburger menüsünü test edin.

## 📝 İçerik Güncelleme

1. **Metin İçeriği**: Tüm bölümlerdeki sabit metinleri güncelleyin
2. **Görseller**: Placeholder görselleri kendi resimleriniz ile değiştirin
3. **Videolar**: Video dosya referanslarını güncelleyin
4. **İletişim Formu**: Backend entegrasyonu ekleyin

## 🔧 Geliştirme

### Form Backend Entegrasyonu
İletişim formu şu an sadece frontend validasyonu yapıyor. Gerçek gönderim için:
1. Backend API oluşturun
2. `script.js` dosyasında fetch veya AJAX kodu ekleyin
3. Email gönderimi yapılandırın

### SEO Optimizasyonu
`index.html` dosyasında meta tags ekleyin:
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:title" content="...">
```

## 📊 Browser Uyumluluğu

- ✅ Chrome (en son)
- ✅ Firefox (en son)
- ✅ Safari (en son)
- ✅ Edge (en son)
- ✅ Mobile browsers

## 📄 Lisans

Bu proje açık kaynaklıdır. Özgürce kullanabilirsiniz.

## 👤 Yazar

Özgün's Project

## 📞 Destek

Sorularınız veya önerileriniz için iletişim formunu kullanın.

---

**Başarılı geliştirmeler! 🎉**