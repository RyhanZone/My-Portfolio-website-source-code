# 💼 Personal Portfolio Website

A modern and fully responsive personal portfolio website built with **HTML**, **CSS**, **JavaScript**, **PHP**, and **MySQL**. This portfolio showcases personal information, skills, projects, resume, and includes a working contact form that stores messages in a MySQL database.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![PHP](https://img.shields.io/badge/PHP-8.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- Responsive Design
- Modern UI
- Resume Section
- Portfolio Projects Slider
- Skills Showcase
- Contact Form
- Store Contact Messages in MySQL Database
- Easy to Customize

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL
- Bootstrap Icons
- Font Awesome

---

# 📁 Project Structure

```
portfolio/
│
├── images/
├── js/
├── src/
│   ├── input.css
│   ├── MobileResponsive.css
│   ├── tableteResponsive.css
│   └── BtableteResponsive.css
│
├── index.php
├── confige.php
└── README.md
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/RyhanZone/My-Portfolio-website-source-cod
```

or download the ZIP file.

---

## 2. Move Project

Copy the project folder into your web server.

### XAMPP

```
htdocs/
```

### Laragon

```
www/
```

---

## 3. Create Database

Open **phpMyAdmin**

Create a database named

```
client-data
```

---

## 4. Create Table

Run the following SQL:

```sql
CREATE TABLE data(
    id INT AUTO_INCREMENT PRIMARY KEY,
    `full-name` VARCHAR(100),
    `email-address` VARCHAR(150),
    `phone-number` VARCHAR(30),
    `text` TEXT
);
```

---

## 5. Configure Database

Open

```
confige.php
```

Update your database credentials.

```php
<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "client-data"
);

if(!$conn){
    die("Database Connection Failed");
}

?>
```

---

## 6. Run the Project

Start

- Apache
- MySQL

Then open

```
http://localhost/portfolio/
```

---

# 📬 Contact Form

The contact form automatically stores:

- Full Name
- Email Address
- Phone Number
- Message

inside the MySQL database.

---

# 📸 Screenshots
# 📸 Screenshots

Resume page:

```
images/preview/resume.png
```

---

# ⚠ Requirements

- PHP 8+
- MySQL
- Apache (XAMPP/Laragon)
- Modern Web Browser

---

# 📌 Customization

You can easily customize

- Name
- Profile Image
- Skills
- Resume
- Social Links
- Projects
- Contact Information
- Theme Colors

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the project
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Ryhan Rafi**

WebDeveloper Developer

Portfolio:
https://rafirafi.com