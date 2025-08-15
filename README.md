# KGM BT Asistan

Karayolları Genel Müdürlüğü Bilgi Teknolojileri çalışanları için ağ, siber güvenlik ve BT konularında hızlı destek ve bilgiye ulaşabileceğiniz akıllı asistan platformu.


![image alt](https://github.com/bernaagdeve34/kgm-bt-akilli-asistan/blob/00ae86b7c92abec0355722d27589b29eed17ac46/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20(1692).png)
Şekil 1: Uygulama Anasayfa Tasarımı



![image alt](https://github.com/bernaagdeve34/kgm-bt-akilli-asistan/blob/00ae86b7c92abec0355722d27589b29eed17ac46/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20(1696).png)
Şekil 2: Chatbot Ekranı

## 🚀 Özellikler

- **Kullanıcı Yönetimi**: Güvenli kayıt ve giriş sistemi
- **Akıllı Asistan**: Gemini AI entegrasyonu ile BT konularında uzman destek
- **Modern UI/UX**: Material-UI ile tasarlanmış responsive arayüz
- **Gerçek Zamanlı Chat**: Anlık soru-cevap sistemi
- **PostgreSQL Veritabanı**: Güvenilir veri saklama

## 🛠️ Teknolojiler

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Veritabanı
- **CORS** - Cross-origin resource sharing
- **Axios** - HTTP client
- **Dotenv** - Environment variables

### Frontend
- **React 19** - UI library
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling
- **React Helmet** - Document head management

## 📋 Gereksinimler

- Node.js (v16 veya üzeri)
- PostgreSQL veritabanı
- Gemini AI API anahtarı

## 🔧 Kurulum

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd egitim_asistanı
```

### 2. Backend Kurulumu
```bash
cd backend-node
npm install
```

### 3. Frontend Kurulumu
```bash
cd frontend
npm install
```

### 4. Environment Variables
Backend klasöründe `.env` dosyası oluşturun:
```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=kgm_asistan
DB_PASSWORD=your_password
DB_PORT=5432
GEMINI_API_KEY=your_gemini_api_key
```

### 5. Veritabanı Kurulumu
PostgreSQL'de `kgm_asistan` adında bir veritabanı oluşturun.

## 🚀 Çalıştırma

### Backend'i Başlatın
```bash
cd backend-node
node index.js
```
Backend http://localhost:5000 adresinde çalışacak.

### Frontend'i Başlatın
```bash
cd frontend
npm start
```
Frontend http://localhost:3000 adresinde çalışacak.

## 📱 Kullanım

1. **Ana Sayfa**: Platform hakkında bilgi ve giriş/kayıt seçenekleri
2. **Kayıt Ol**: Yeni kullanıcı hesabı oluşturma
3. **Giriş Yap**: Mevcut hesap ile giriş
4. **Chat Bot**: BT konularında soru sorma ve AI destekli yanıt alma

## 🔐 API Endpoints

- `POST /register` - Kullanıcı kaydı
- `POST /login` - Kullanıcı girişi
- `POST /ask` - AI asistan ile soru-cevap

## 📁 Proje Yapısı

```
egitim_asistanı/
├── backend-node/          # Backend API
│   ├── index.js          # Ana sunucu dosyası
│   └── package.json      # Backend bağımlılıkları
├── frontend/             # React uygulaması
│   ├── src/
│   │   ├── App.js        # Ana uygulama bileşeni
│   │   ├── Login.js      # Giriş sayfası
│   │   ├── Register.js   # Kayıt sayfası
│   │   └── index.js      # Giriş noktası
│   └── package.json      # Frontend bağımlılıkları
└── training_documents/   # Eğitim dokümanları
    ├── malware.txt
    ├── phishing.txt
    ├── siberguvenliginonemi.txt
    ├── siberguvenliknedir.txt
    └── TemelSiberGüvenlikTerminolojisi.txt
```

## 🌟 Özellik Detayları

### Kullanıcı Yönetimi
- Güvenli şifre saklama
- E-posta doğrulama
- Oturum yönetimi

### AI Asistan
- Gemini AI entegrasyonu
- BT konularında uzman bilgi
- Gerçek zamanlı yanıtlar

### Arayüz
- Modern ve responsive tasarım
- Koyu tema
- Material Design prensipleri

## 🔧 Geliştirme

### Backend Geliştirme
```bash
cd backend-node
npm install
node index.js
```

### Frontend Geliştirme
```bash
cd frontend
npm install
npm start
```

### Veritabanı Geliştirme
PostgreSQL bağlantı ayarlarını `.env` dosyasında güncelleyin.

## 🐛 Sorun Giderme

### Backend Bağlantı Hatası
- PostgreSQL servisinin çalıştığından emin olun
- `.env` dosyasındaki veritabanı bilgilerini kontrol edin
- Port 5000'in kullanılabilir olduğunu kontrol edin

### Frontend Hataları
- `npm install` komutunu çalıştırın
- Node.js sürümünü kontrol edin
- Port 3000'in kullanılabilir olduğunu kontrol edin

### AI API Hataları
- Gemini API anahtarının geçerli olduğunu kontrol edin
- API kullanım limitlerini kontrol edin

## 📚 Eğitim Dokümanları

Proje, siber güvenlik konularında eğitim materyalleri içerir:
- Malware türleri ve korunma yöntemleri
- Phishing saldırıları ve önleme
- Siber güvenliğin önemi
- Temel siber güvenlik terminolojisi

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje ISC lisansı altında lisanslanmıştır.

## 📞 İletişim

Proje hakkında sorularınız için:
- E-posta: [your-email@example.com]
- GitHub: [your-github-username]

## 🙏 Teşekkürler

- Karayolları Genel Müdürlüğü BT ekibi
- Material-UI geliştiricileri
- React ekibi
- Gemini AI ekibi

---

**Not**: Bu proje eğitim ve geliştirme amaçlıdır. Üretim ortamında kullanmadan önce güvenlik testlerinden geçirilmelidir.
