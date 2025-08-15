require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

// PostgreSQL bağlantısı
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'kgm_asistan',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

// API anahtarını sadece .env dosyasından oku
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
console.log('API KEY:', GEMINI_API_KEY ? 'Mevcut' : 'Bulunamadı');

app.use(cors());
app.use(bodyParser.json());

// Veritabanı tablosunu oluştur
const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Users tablosu hazır');
  } catch (err) {
    console.error('Tablo oluşturma hatası:', err);
  }
};

createTable();

// Kayıt endpointi
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, error: 'Tüm alanlar zorunlu.' });
  }
  
  try {
    // E-posta kontrolü
    const emailCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (emailCheck.rows.length > 0) {
      return res.json({ success: false, error: 'Bu e-posta ile kayıtlı kullanıcı var.' });
    }
    
    // Yeni kullanıcı ekle
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, password]
    );
    
    res.json({ success: true, user: result.rows[0] });
  } catch (err) {
    console.error('Kayıt hatası:', err);
    res.json({ success: false, error: 'Kayıt işlemi başarısız.' });
  }
});

// Giriş endpointi
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    
    if (result.rows.length === 0) {
      return res.json({ success: false, error: 'E-posta veya şifre hatalı.' });
    }
    
    const user = result.rows[0];
    res.json({ success: true, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error('Giriş hatası:', err);
    res.json({ success: false, error: 'Giriş işlemi başarısız.' });
  }
});

// Gemini API ile çalışan /ask endpointi
app.post('/ask', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.json({ answer: 'Lütfen bir soru girin.' });
  }
  if (!GEMINI_API_KEY) {
    return res.json({ answer: 'Gemini API anahtarı yapılandırılmamış. Lütfen .env dosyasını kontrol edin.' });
  }
  try {
    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: question }] }]
      }
    );
    const answer = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Yanıt alınamadı.';
    res.json({ answer });
  } catch (err) {
    console.error('Gemini API Hatası:', err.response?.data || err.message || err);
    res.json({ answer: 'Gemini API ile bağlantı kurulamadı. Lütfen API anahtarınızı kontrol edin.' });
  }
});

// Sağlık kontrolü için basit bir endpoint
app.get('/', (req, res) => {
  res.send('KGM BT Asistan Backend çalışıyor!');
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});

