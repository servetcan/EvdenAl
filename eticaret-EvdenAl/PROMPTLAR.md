# E-Ticaret Projesi - Profesyonel Promptlar

Bu dosya, "EvdenAl" e-ticaret projesini geliştirmek için kullanılan promptları içermektedir.

---

## 1. PROJE BAŞLANGICI - Ana Sayfa Tasarımı

**Prompt:**
```
Modern ve kullanıcı dostu bir e-ticaret ana sayfası oluştur. Sayfa şu özelliklere sahip olmalı:

- Bootstrap 5 framework kullanılarak responsive tasarım
- Gradient renklerle modern navbar (logo, menü, giriş/kayıt linkleri)
- Otomatik geçişli hero slider (carousel) - 3 slide, her 3 saniyede bir geçiş
- 8 kategori kartı (Bebek Mağazası, Mobilya, PC ve PlayStation Oyunları, Kozmetik, Petshop, Telefon, Bilgisayar, Ayakkabı)
- Font Awesome ikonları kullan
- Öne çıkan ürünler bölümü (4 ürün)
- AI önerileri bölümü (4 ürün)
- Footer: sosyal medya linkleri, hızlı linkler, kategoriler, iletişim bilgileri
- Tüm kartlarda hover efektleri (yukarı kalkma animasyonu, gölge artışı)
- Gradient arka plan ve modern renk paleti
- Türkçe dil desteği
```

---

## 2. ÜRÜN LİSTELEME VE FİLTRELEME SİSTEMİ

**Prompt:**
```
Ürün listeleme sayfası oluştur. Özellikler:

- Tüm ürünleri grid layout'ta göster (Bootstrap card yapısı)
- Kategoriye göre filtreleme dropdown'ı
- Her ürün kartında: görsel, isim, fiyat, indirimli fiyat (varsa), "Detay" ve "Sepete Ekle" butonları
- İndirimli ürünlerde eski fiyat üstü çizili, yeni fiyat kırmızı, indirim yüzdesi badge ile göster
- LocalStorage'dan ürün verilerini oku
- URL parametresinden kategori filtresi al (product-list.html?category=bebek)
- Responsive tasarım: mobilde 1 sütun, tablette 2, desktop'ta 4 sütun
- Sayfa yüklendiğinde otomatik filtreleme yap
```

---

## 3. SEPET YÖNETİMİ (SHOPPING CART)

**Prompt:**
```
Sepet yönetimi sayfası ve JavaScript fonksiyonları oluştur:

- LocalStorage kullanarak sepet verilerini sakla
- Sepet sayfasında: ürün görseli, isim, birim fiyat, miktar (+/- butonları), toplam fiyat, kaldır butonu
- Sepet boşsa "Sepetiniz boş" mesajı göster
- Miktar güncelleme fonksiyonu (artır/azalt)
- Ürün kaldırma fonksiyonu
- Toplam fiyat hesaplama ve güncelleme
- "Ödeme Yap" butonu ile checkout sayfasına yönlendirme
- Sepete ekleme fonksiyonu (ana sayfa ve ürün listesinden)
- Aynı ürün tekrar eklendiğinde miktarı artır, yeni kayıt oluşturma
```

---

## 4. KULLANICI KAYIT VE GİRİŞ SİSTEMİ

**Prompt:**
```
Kullanıcı kayıt ve giriş sistemi oluştur:

**Kayıt Sayfası:**
- Form alanları: Ad, Soyad, E-posta, Şifre, Şifre Tekrar, CAPTCHA
- Form validasyonu: boş alan kontrolü, e-posta format kontrolü, şifre minimum 6 karakter, şifre eşleşme kontrolü
- CAPTCHA doğrulama
- LocalStorage'da kullanıcı verilerini sakla
- Aynı e-posta ile kayıt engelleme
- Başarılı kayıt sonrası ana sayfaya yönlendirme

**Giriş Sayfası:**
- Form alanları: E-posta, Şifre, CAPTCHA
- Form validasyonu: boş alan, e-posta format, CAPTCHA kontrolü
- Kullanıcı doğrulama (LocalStorage'dan kontrol)
- Başarılı giriş sonrası müşteri paneline yönlendirme
- Oturum bilgisi LocalStorage'da sakla (currentUser)
- Hata mesajlarını kullanıcıya göster
```

---

## 5. CAPTCHA SİSTEMİ

**Prompt:**
```
Basit CAPTCHA sistemi oluştur:

- 4 haneli rastgele sayı üret (1000-9999 arası)
- CAPTCHA değerini LocalStorage'da sakla
- Sayfa yüklendiğinde CAPTCHA göster
- CAPTCHA yenileme butonu ekle
- Form gönderiminde CAPTCHA doğrulama yap
- Yanlış CAPTCHA durumunda hata mesajı göster
- CAPTCHA doğrulama fonksiyonu oluştur (verifyCaptcha)
- CAPTCHA görsel olarak belirgin göster (kalın font, renkli arka plan)
```

---

## 6. FORM VALİDASYON SİSTEMİ

**Prompt:**
```
Kapsamlı form validasyon sistemi oluştur:

**Validasyon Fonksiyonları:**
- validateRegisterForm(): Kayıt formu validasyonu
- validateLoginForm(): Giriş formu validasyonu
- validateCheckoutForm(): Ödeme formu validasyonu

**Validasyon Kuralları:**
- Tüm zorunlu alanların dolu olması kontrolü
- E-posta format kontrolü (regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
- Şifre minimum 6 karakter
- Şifre eşleşme kontrolü
- Kart numarası: 16 hane sayı kontrolü
- Son kullanma tarihi: MM/YY formatı kontrolü
- CVV: 3 hane sayı kontrolü
- CAPTCHA doğrulama
- Hata mesajlarını kırmızı renkte, liste halinde göster
- Başarılı validasyon sonrası işlem yap (kayıt/giriş/ödeme)
```

---

## 7. ÖDEME SAYFASI (CHECKOUT)

**Prompt:**
```
Ödeme sayfası oluştur:

- Form alanları: Ad, Soyad, Adres, Kart Numarası, Son Kullanma Tarihi (MM/YY), CVV, CAPTCHA
- Sepet özeti göster: ürün listesi, toplam fiyat
- Form validasyonu (validateCheckoutForm kullan)
- Kart numarası, tarih ve CVV format kontrolleri
- CAPTCHA doğrulama
- Başarılı ödeme sonrası sepeti temizle (LocalStorage'dan cart'ı sil)
- Başarılı ödeme mesajı ve ana sayfaya yönlendirme
- Responsive tasarım
- Güvenli görünümlü form tasarımı
```

---

## 8. ADMIN PANELİ - DASHBOARD

**Prompt:**
```
Admin paneli dashboard sayfası oluştur:

- Koyu tema navbar (Admin Paneli başlığı, menü linkleri)
- Dashboard istatistikleri: Toplam Ürün, Toplam Sipariş, Toplam Kullanıcı
- İstatistikler kart formatında, ortalanmış
- Menü linkleri: Dashboard, Ürünler, Ürün Ekle, Kategoriler, Siparişler, Kullanıcılar, Çıkış
- LocalStorage'dan veri okuyarak istatistikleri göster
- Responsive tasarım
- Admin.css dosyası ile özel stil
```

---

## 9. ADMIN PANELİ - ÜRÜN YÖNETİMİ

**Prompt:**
```
Admin ürün yönetimi sayfası oluştur:

- Tablo formatında ürün listesi: ID, Görsel, Ad, Fiyat, Kategori, İşlemler
- LocalStorage'dan ürünleri oku ve tabloda göster
- Her ürün için "Düzenle" ve "Sil" butonları
- Ürün silme fonksiyonu (onay mesajı ile)
- Ürün düzenleme fonksiyonu (modal veya ayrı sayfa)
- Responsive tablo tasarımı
- Bootstrap table-striped class kullan
- Ürün görselleri küçük thumbnail olarak göster
```

---

## 10. ADMIN PANELİ - ÜRÜN EKLEME

**Prompt:**
```
Admin ürün ekleme sayfası oluştur:

- Form alanları: Ürün Adı, Fiyat, Kategori (dropdown), Görsel URL, İndirim Oranı (opsiyonel)
- Form validasyonu: zorunlu alanlar, fiyat sayı kontrolü, indirim oranı 0-1 arası
- LocalStorage'a ürün ekleme
- Yeni ürün ID'si otomatik oluştur (mevcut ürünlerin max ID'si + 1)
- Başarılı ekleme sonrası ürünler sayfasına yönlendirme
- Form resetleme
- Kategori dropdown'ı: bebek, mobilya, oyun, kozmetik, petshop, telefon, bilgisayar, ayakkabi
```

---

## 11. MÜŞTERİ PANELİ - DASHBOARD

**Prompt:**
```
Müşteri paneli dashboard sayfası oluştur:

- Kullanıcı bilgilerini göster (LocalStorage'dan currentUser oku)
- Hoş geldin mesajı
- Son siparişler listesi
- Hızlı erişim linkleri: Profil, Siparişler, Adresler
- Çıkış yap butonu
- Responsive tasarım
- Müşteri paneline özel renk teması
```

---

## 12. CSS STİL DOSYASI - MODERN TASARIM

**Prompt:**
```
Modern ve profesyonel CSS stili oluştur:

- Gradient arka planlar (body, navbar, footer)
- Kart hover efektleri (transform: translateY, box-shadow artışı)
- Smooth transitions (0.3s ease)
- Modern renk paleti: mavi tonları, koyu gri footer
- Responsive breakpoint'ler (@media queries)
- Section title'lar için alt çizgi efekti (::after pseudo-element)
- Button hover efektleri (scale, shadow)
- Form input focus efektleri (border-color, box-shadow)
- Navbar gradient: #514845 to #504534
- Footer gradient: #2c3e50 to #34495e
- Product card hover: yukarı kalkma animasyonu
- Category card hover efektleri
- Social icons hover animasyonları
```

---

## 13. RESPONSIVE TASARIM İYİLEŞTİRMELERİ

**Prompt:**
```
Responsive tasarım iyileştirmeleri yap:

- Mobil cihazlar için hero slider yüksekliği azalt (500px -> 300px)
- Mobilde font boyutları küçült
- Navbar toggle butonu ekle (Bootstrap collapse)
- Grid sistem: mobil 1 sütun, tablet 2 sütun, desktop 4 sütun
- Footer mobilde ortalanmış, sütunlar alt alta
- Tablo mobilde scroll edilebilir veya kart formatına dönüştür
- Form alanları mobilde tam genişlik
- Butonlar mobilde tam genişlik (w-100)
- Media query breakpoint: 768px
```

---

## 14. JAVASCRIPT - ANA SAYFA FONKSİYONLARI

**Prompt:**
```
Ana sayfa JavaScript fonksiyonları oluştur:

- Ürün verilerini array olarak tanımla (id, name, price, category, image, discount)
- createProductCard(product): Ürün kartı HTML'i oluştur
- loadFeaturedProducts(): Öne çıkan 4 ürünü yükle
- loadAIRecommendations(): AI önerileri 4 ürünü yükle
- addToCart(productId): Sepete ürün ekle (LocalStorage)
- Aynı ürün tekrar eklendiğinde miktarı artır
- Sepete ekleme sonrası alert mesajı
- DOMContentLoaded event listener ile sayfa yüklendiğinde çalıştır
```

---

## 15. JAVASCRIPT - ÜRÜN LİSTELEME FONKSİYONLARI

**Prompt:**
```
Ürün listeleme JavaScript fonksiyonları oluştur:

- loadAllProducts(): Tüm ürünleri yükle ve göster
- filterProducts(): Kategori filtresine göre ürünleri filtrele
- URL parametresinden kategori oku (?category=bebek)
- Sayfa yüklendiğinde kategori filtresini uygula
- Dropdown değiştiğinde filtrelemeyi güncelle
- Filtrelenmiş ürünleri createProductCard ile göster
- Boş sonuç durumunda "Ürün bulunamadı" mesajı göster
```

---

## 16. JAVASCRIPT - SEPET FONKSİYONLARI

**Prompt:**
```
Sepet yönetimi JavaScript fonksiyonları oluştur:

- loadCart(): LocalStorage'dan sepeti oku ve göster
- updateQuantity(productId, newQuantity): Ürün miktarını güncelle
- removeFromCart(productId): Ürünü sepetten kaldır
- Toplam fiyat hesaplama: her ürün için (price * quantity) topla
- Sepet boş kontrolü
- Miktar 0 veya altına düştüğünde ürünü kaldır
- Sepet güncellemelerini LocalStorage'a kaydet
- Sepet görselleştirmesi: kart formatında, görsel, isim, fiyat, miktar kontrolleri
```

---

## 17. ÜRÜN DETAY SAYFASI

**Prompt:**
```
Ürün detay sayfası oluştur:

- URL parametresinden ürün ID'si al (?id=1)
- Ürün bilgilerini göster: büyük görsel, isim, fiyat, indirimli fiyat, kategori, açıklama
- "Sepete Ekle" butonu
- Ürün bulunamadı durumunda hata mesajı
- LocalStorage'dan ürün verilerini oku
- Responsive görsel gösterimi
- Geri dön butonu
- Ürün özellikleri listesi (opsiyonel)
```

---

## 18. ADMIN PANELİ - SİPARİŞ YÖNETİMİ

**Prompt:**
```
Admin sipariş yönetimi sayfası oluştur:

- Tablo formatında sipariş listesi: Sipariş No, Müşteri, Ürünler, Toplam, Tarih, Durum
- LocalStorage'dan siparişleri oku (orders array)
- Sipariş durumu güncelleme (Beklemede, Hazırlanıyor, Kargoda, Teslim Edildi)
- Sipariş detay görüntüleme (modal)
- Sipariş silme fonksiyonu
- Sipariş arama/filtreleme (opsiyonel)
- Responsive tablo tasarımı
```

---

## 19. ADMIN PANELİ - KULLANICI YÖNETİMİ

**Prompt:**
```
Admin kullanıcı yönetimi sayfası oluştur:

- Tablo formatında kullanıcı listesi: ID, Ad Soyad, E-posta, Kayıt Tarihi, İşlemler
- LocalStorage'dan kullanıcıları oku (users array)
- Kullanıcı silme fonksiyonu (onay ile)
- Kullanıcı düzenleme fonksiyonu (opsiyonel)
- Kullanıcı arama fonksiyonu (opsiyonel)
- Responsive tablo tasarımı
- Kullanıcı sayısı istatistiği
```

---

## 20. MÜŞTERİ PANELİ - SİPARİŞ GEÇMİŞİ

**Prompt:**
```
Müşteri sipariş geçmişi sayfası oluştur:

- Kullanıcının siparişlerini listele (LocalStorage'dan currentUser ile filtrele)
- Her sipariş için: Sipariş No, Tarih, Ürünler, Toplam, Durum
- Sipariş detay görüntüleme
- Sipariş durumu renkli badge ile göster
- Boş sipariş durumunda "Henüz siparişiniz yok" mesajı
- Responsive kart tasarımı
```

---

## 21. MÜŞTERİ PANELİ - PROFİL YÖNETİMİ

**Prompt:**
```
Müşteri profil yönetimi sayfası oluştur:

- Kullanıcı bilgilerini göster ve düzenlenebilir form
- Form alanları: Ad, Soyad, E-posta, Telefon (opsiyonel)
- Profil güncelleme fonksiyonu
- LocalStorage'da currentUser'ı güncelle
- Şifre değiştirme bölümü (opsiyonel)
- Başarılı güncelleme mesajı
- Form validasyonu
```

---

## 22. MÜŞTERİ PANELİ - ADRES YÖNETİMİ

**Prompt:**
```
Müşteri adres yönetimi sayfası oluştur:

- Kayıtlı adresleri listele
- Yeni adres ekleme formu: Başlık, Adres, Şehir, Posta Kodu, Telefon
- Adres düzenleme fonksiyonu
- Adres silme fonksiyonu
- Varsayılan adres seçme
- LocalStorage'da adresleri sakla (currentUser içinde addresses array)
- Responsive kart tasarımı
```

---

## 23. NAVBAR KULLANICI DURUMU YÖNETİMİ

**Prompt:**
```
Navbar'da kullanıcı durumuna göre menü göster:

- Giriş yapmamış kullanıcı: "Giriş Yap" ve "Kayıt Ol" linkleri
- Giriş yapmış kullanıcı: Kullanıcı adı dropdown, "Müşteri Paneli", "Çıkış Yap" linkleri
- LocalStorage'dan currentUser kontrolü yap
- Tüm sayfalarda navbar'ı güncelle
- JavaScript ile dinamik navbar oluştur
- Çıkış yap butonu: currentUser'ı LocalStorage'dan sil, ana sayfaya yönlendir
```

---

## 24. ADMIN GİRİŞ SİSTEMİ

**Prompt:**
```
Admin giriş sayfası oluştur:

- Admin kullanıcı adı ve şifre ile giriş
- Varsayılan admin: admin@admin.com / admin123
- CAPTCHA doğrulama
- Form validasyonu
- Başarılı giriş sonrası admin dashboard'a yönlendirme
- Admin oturum bilgisini LocalStorage'da sakla (isAdmin: true)
- Admin paneline erişim kontrolü (isAdmin kontrolü)
```

---

## 25. GENEL PROJE YAPISI VE ORGANİZASYON

**Prompt:**
```
E-ticaret projesi için klasör yapısı oluştur:

**Klasör Yapısı:**
- /admin (admin paneli HTML dosyaları)
- /customer (müşteri paneli HTML dosyaları)
- /css (style.css, admin.css, responsive.css)
- /js (main.js, cart.js, validation.js, captcha.js, admin.js)
- /assets/images (logo, ürün görselleri)
- Root: index.html, product-list.html, cart.html, checkout.html, login.html, register.html

**Dosya Organizasyonu:**
- Her sayfa için ayrı HTML dosyası
- JavaScript fonksiyonları modüler olarak ayrı dosyalarda
- CSS dosyaları işlevlerine göre ayrı
- LocalStorage key'leri: 'cart', 'users', 'currentUser', 'products', 'orders'
- Bootstrap 5 CDN kullan
- Font Awesome 6.0.0 CDN kullan
- Tüm sayfalarda tutarlı navbar ve footer
```

---

## KULLANIM NOTLARI

1. **Prompt Sırası**: Promptları sırayla kullanarak projeyi adım adım oluşturabilirsiniz.
2. **Özelleştirme**: Her prompt'u projenizin ihtiyaçlarına göre özelleştirebilirsiniz.
3. **Teknoloji Stack**: 
   - HTML5
   - CSS3 (Custom + Bootstrap 5)
   - JavaScript (Vanilla JS, LocalStorage)
   - Bootstrap 5.3.0
   - Font Awesome 6.0.0
4. **Veri Depolama**: Tüm veriler LocalStorage'da saklanmaktadır (backend yok).
5. **Responsive**: Tüm sayfalar mobil uyumludur.

---

## EK ÖZELLİKLER İÇİN PROMPTLAR

### Arama Fonksiyonu
```
Ürün arama özelliği ekle:
- Navbar'a arama kutusu ekle
- Arama sonuçlarını product-list.html'de göster
- Ürün adına göre filtreleme
- Arama terimi URL parametresi olarak geçir (?search=bebek)
- Enter tuşu ile arama yap
- Arama sonuç sayısı göster
```

### Favoriler Sistemi
```
Favoriler sistemi ekle:
- Her ürün kartına "Favorilere Ekle" butonu
- LocalStorage'da favorites array'i sakla
- Favoriler sayfası oluştur
- Favorilerden kaldırma fonksiyonu
- Navbar'da favori sayısı badge göster
```

### Sıralama Özelliği
```
Ürün sıralama özelliği ekle:
- Fiyata göre artan/azalan
- İsme göre A-Z / Z-A
- En yeni / En eski
- Dropdown ile sıralama seçeneği
- Sıralama sonuçlarını güncelle
