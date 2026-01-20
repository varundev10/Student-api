const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.get("/students", authMiddleware, getAllStudents);
router.get("/students/:id", authMiddleware, getStudentById);
router.post("/students", authMiddleware, createStudent);
router.put("/students/:id", authMiddleware, updateStudent);
router.delete("/students/:id", authMiddleware, deleteStudent);

module.exports = router;
