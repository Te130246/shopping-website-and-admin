const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// ตรวจสอบและสร้างโฟลเดอร์ 'uploads' หากไม่มี
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// ใช้ CORS และ Body Parser
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // เส้นทางสำหรับไฟล์อัปโหลด

// ตั้งค่าการเชื่อมต่อฐานข้อมูล MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // เปลี่ยนเป็นรหัสผ่านของคุณ
  database: 'prductdb',
});

// เชื่อมต่อฐานข้อมูล
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// ตั้งค่า Multer สำหรับจัดการไฟล์อัปโหลด
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // เก็บไฟล์ในโฟลเดอร์ uploads
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // ตั้งชื่อไฟล์ให้ไม่ซ้ำ
  },
});

const upload = multer({ storage });

// API: ดึงข้อมูลสินค้า
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM tblproduct'; // เปลี่ยนชื่อตาราง
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Error fetching products');
      return;
    }

    // เพิ่ม URL เซิร์ฟเวอร์ในเส้นทางรูปภาพ
    const products = result.map((product) => ({
      ...product,
      image: product.image ? `http://localhost:${PORT}${product.image}` : null,
    }));

    res.json(products);
  });
});

// API: ดึงข้อมูลสินค้าตาม ID
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM tblproduct WHERE id = ?'; // เปลี่ยนชื่อตาราง

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error fetching product:', err);
      res.status(500).send('Error fetching product');
      return;
    }

    if (result.length === 0) {
      res.status(404).send('Product not found');
      return;
    }

    // เพิ่ม URL เซิร์ฟเวอร์ในเส้นทางรูปภาพ
    const product = {
      ...result[0],
      image: result[0].image ? `http://localhost:${PORT}${result[0].image}` : null,
    };

    res.json(product);
  });
});

// API: เพิ่มข้อมูลสินค้า
app.post('/api/products', upload.single('image'), (req, res) => {
  const { product_code, title, rating, original_price, discounted_price, discount, description, category, quantity } = req.body;

  // ตรวจสอบว่ามีรูปภาพหรือไม่
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  // ตรวจสอบว่า product_code ซ้ำหรือไม่
  const checkCodeSql = 'SELECT * FROM tblproduct WHERE product_code = ?'; // เปลี่ยนชื่อตาราง
  db.query(checkCodeSql, [product_code], (err, result) => {
    if (err) {
      console.error('Error checking product_code:', err);
      res.status(500).send('Server error');
      return;
    }

    if (result.length > 0) {
      res.status(400).send({ message: 'Product code already exists!' });
      return;
    }

    // หากไม่ซ้ำ ให้เพิ่มสินค้า
    const sql = `
      INSERT INTO tblproduct (product_code, title, image, rating, original_price, discounted_price, discount, description, category, quantity)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [product_code, title, image, rating, original_price, discounted_price, discount, description, category, quantity], (err, result) => {
      if (err) {
        console.error('Error inserting product:', err);
        res.status(500).send('Server error');
        return;
      }
      res.status(201).send({ message: 'Product added successfully', productId: result.insertId });
    });
  });
});

// API: แก้ไขข้อมูลสินค้า
app.put('/api/products/:id', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { product_code, title, rating, original_price, discounted_price, discount, description, category, quantity } = req.body;

  const image = req.file ? `/uploads/${req.file.filename}` : null;

  // ตรวจสอบว่ารหัสสินค้าซ้ำหรือไม่
  const checkCodeSql = 'SELECT * FROM tblproduct WHERE product_code = ? AND id != ?'; // เปลี่ยนชื่อตาราง
  db.query(checkCodeSql, [product_code, id], (err, result) => {
    if (err) {
      console.error('Error checking product_code:', err);
      res.status(500).send('Server error');
      return;
    }

    if (result.length > 0) {
      res.status(400).send({ message: 'Product code already exists!' });
      return;
    }

    // หากไม่ซ้ำ ให้ดำเนินการอัปเดต
    let sql = `
      UPDATE tblproduct
      SET product_code = ?, title = ?, rating = ?, original_price = ?, discounted_price = ?, discount = ?, description = ?, category = ?, quantity = ?
    `;
    const params = [product_code, title, rating, original_price, discounted_price, discount, description, category, quantity];

    if (image) {
      sql += `, image = ?`;
      params.push(image);
    }

    sql += ` WHERE id = ?`;
    params.push(id);

    db.query(sql, params, (err, result) => {
      if (err) {
        console.error('Error updating product:', err);
        res.status(500).send('Server error');
        return;
      }
      res.send({ message: 'Product updated successfully' });
    });
  });
});

// API: ลบข้อมูลสินค้า
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM tblproduct WHERE id = ?'; // เปลี่ยนชื่อตาราง
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting product:', err);
      res.status(500).send('Error deleting product');
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send('Product not found');
      return;
    }

    res.send({ message: 'Product deleted successfully' });
  });
});

// API: นับจำนวนสินค้า
app.get('/api/products/count', (req, res) => {
  const sql = 'SELECT COUNT(*) AS count FROM tblproduct'; // เปลี่ยนชื่อตาราง
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching product count:', err);
      res.status(500).send('Error fetching product count');
      return;
    }

    if (result.length > 0) {
      res.send({ count: result[0].count });
    } else {
      res.status(404).send('Product not found');
    }
  });
});

// API: ลงทะเบียนผู้ใช้
app.post('/api/register', upload.single('image'), (req, res) => {
  const { adminName, phone, email, password } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  const sql = 'INSERT INTO tbladmin (admin_name, phone, email, password, image) VALUES (?, ?, ?, ?, ?)'; // เปลี่ยนชื่อตาราง
  db.query(sql, [adminName, phone, email, password, image], (err, result) => {
    if (err) {
      console.error('Error inserting admin:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(201).send({ message: 'Admin registered successfully', adminId: result.insertId });
  });
});

// API: เข้าสู่ระบบ
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // ตรวจสอบข้อมูลในฐานข้อมูล
  const sql = 'SELECT * FROM tbladmin WHERE email = ? AND password = ?'; // ใช้ตาราง tbladmin
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error logging in:', err);
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length > 0) {
      // หากพบผู้ใช้ที่ตรงกับข้อมูล
      const user = results[0];
      res.json({ message: 'เข้าสู่ระบบสำเร็จ', user });
    } else {
      // หากไม่พบผู้ใช้
      res.status(401).json({ message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }
  });
});

// API: ดึงข้อมูลผู้ใช้ล่าสุด
app.get('/api/users/latest', (req, res) => {
  const sql = 'SELECT admin_name, image FROM tbladmin ORDER BY id DESC LIMIT 1'; // ดึงข้อมูลผู้ใช้ล่าสุด
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching latest user:', err);
      res.status(500).send('Error fetching latest user');
      return;
    }

    if (result.length > 0) {
      const user = {
        admin_name: result[0].admin_name,
        image: result[0].image
          ? `http://localhost:${PORT}${result[0].image}` // เพิ่ม URL เซิร์ฟเวอร์
          : null,
      };
      res.json(user);
    } else {
      res.status(404).send('No users found');
    }
  });
});


// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
