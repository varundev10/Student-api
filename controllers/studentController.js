const db = require("../db");

exports.getAllStudents = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM students");
  res.json(rows);
};

exports.getStudentById = async (req, res) => {
  const id = Number(req.params.id);

  const [rows] = await db.query("SELECT * FROM students WHERE id = ?", [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(rows[0]);
};

exports.createStudent = async (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ message: "name and course required" });
  }

  const [result] = await db.query(
    "INSERT INTO students (name, course) VALUES (?, ?)",
    [name, course]
  );

  res.status(201).json({
    id: result.insertId,
    name,
    course,
  });
};

exports.updateStudent = async (req, res) => {
  const id = Number(req.params.id);
  const { name, course } = req.body;

  const [existing] = await db.query("SELECT * FROM students WHERE id = ?", [id]);
  if (existing.length === 0) {
    return res.status(404).json({ message: "Student not found" });
  }

  const newName = name ?? existing[0].name;
  const newCourse = course ?? existing[0].course;

  await db.query(
    "UPDATE students SET name = ?, course = ? WHERE id = ?",
    [newName, newCourse, id]
  );

  res.json({ message: "Updated ✅", id, name: newName, course: newCourse });
};

exports.deleteStudent = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admin only" });
  }

  const id = Number(req.params.id);

  const [result] = await db.query("DELETE FROM students WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ message: "Deleted ✅", id });
};
