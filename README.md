## 📌 About This Project

This project is built mainly to **understand and practice real-world full-stack development**, including:
- how frontend and backend communicate using REST APIs  
- how authentication works using JWT tokens  
- how to connect and manage data using MySQL  
- how to build protected routes and secure CRUD operations  


# 🎓 Student API (Backend)

A secure **Node.js + Express + MySQL REST API** for managing student records with **JWT Authentication**.

This project is built mainly to **understand backend development concepts**, including:
- building REST APIs using Express
- connecting MySQL database
- implementing JWT authentication
- protecting routes using middleware
- performing CRUD operations securely

---

## 🚀 Features

### 🔐 Authentication
- User Register
- User Login
- Password hashing using bcrypt
- JWT token generation and verification

### 👨‍🎓 Student CRUD API
- Add student
- Get all students
- Update student
- Delete student

### 🛡️ Security
- Password hashing
- JWT protected routes
- Middleware-based authorization

---

## 🧑‍💻 Tech Stack
- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## 📂 Project Structure (Common)
```bash
Student-api/
│── config/
│── controllers/
│── middleware/
│── routes/
│── db/
│── server.js
│── .env
│── package.json
```
---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone Repo
```bash
git clone https://github.com/varundev10/Student-api
cd Student-api
npm install
CREATE DATABASE student_db;
```
🔑 Environment Variables (.env)
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_db
JWT_SECRET=your_secret_key


▶️ Start Backend Server
npm start
Backend will run on:http://localhost:5000

🔐 Authorization Header
Authorization: Bearer <token>

🌍 Deployment

You can deploy this backend using:
-Render
-Railway
-Cyclic

##📌 Frontend Repo

Frontend Repo:
https://github.com/varundev10/student-frontend

### Auth Routes

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login user          |

### Student Routes (Protected)

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/students`      | Get all students    |
| POST   | `/api/students`      | Add new student     |
| PUT    | `/api/students/:id`  | Update student      |
| DELETE | `/api/students/:id`  | Delete student      |


🌍 Deployment
You can deploy this backend using:

-Render
-Railway
-Cyclic


👤 Author

Varun Dev
GitHub: https://github.com/varundev10


---

If you want, I’ll also add **DB schema (tables)** + **Postman test examples** in backend README to make it *interview-proof*.


