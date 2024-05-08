const express = require("express");
const {
  studentLogin,
  studentLogout,
  viewAttendance,
  viewResult,
  submitFeedbacks,
  loadCurrentStudent,
} = require("../controllers/student.controllers");
const isStudentAuthenticated = require("../middlewares/isStudentAuthenticated.middlewares");
const Router = express.Router();

Router.route("/login").post(studentLogin);
Router.route("/logout").get(isStudentAuthenticated, studentLogout);
Router.route("/view-attendance").get(isStudentAuthenticated, viewAttendance);
Router.route("/view-result/:student_id").get(
  isStudentAuthenticated,
  viewResult
);
Router.route("/submit-feedback/:teacher_id").post(
  isStudentAuthenticated,
  submitFeedbacks
);
Router.route("/load-current-student").get(
  isStudentAuthenticated,
  loadCurrentStudent
);
module.exports = Router;
