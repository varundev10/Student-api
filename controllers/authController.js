const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

exports.register = async (req, res) => {
  try {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  if (existing.length > 0) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const [result] = await db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, "user"]
  );

   return res.status(201).json({
    message: "User registered successfully ✅",
    userId: result.insertId,
  });
} catch (error) {
  console.error("Register Error:", error);
  return res.status(500).json({ message: "Internal server error" });}
};

exports.login = async (req, res) => {
  try {
  const { email, password } = req.body;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!email || !password) {
    return res.status(400).json({ message: "email and password required" });
  }

  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  if (rows.length === 0) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const user = rows[0];

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "10m" }
  );

   return res.json({
    message: "Login successful ✅",
    token,
  });
} catch (error) {
  console.error("Login Error:", error);
  return res.status(500).json({ message: "Internal server error" });}
};
