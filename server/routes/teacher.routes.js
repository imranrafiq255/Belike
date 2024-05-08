const express = require("express");
const {
  teacherLogin,
  loadCurrentTeacher,
  createTest,
  createResult,
  viewGradeResult,
  takeAttendance,
  viewGradeAttendance,
  loadAllStudentOnSameGradeIncharge,
} = require("../controllers/teacher.controllers");
const isTeacherAuthenticated = require("../middlewares/isTeacherAuthenticated");

const Router = express.Router();

Router.route("/login").post(teacherLogin);
Router.route("/load-current-teacher").get(
  isTeacherAuthenticated,
  loadCurrentTeacher
);
Router.route("/create-test/:grade_id/:test_course_id").post(
  isTeacherAuthenticated,
  createTest
);
Router.route("/create-result/:test_id/:grade_id/:student_id").post(
  isTeacherAuthenticated,
  createResult
);
Router.route("/view-grade-result/:grade_id").get(
  isTeacherAuthenticated,
  viewGradeResult
);

Router.route("/take-attendance/:grade_id").post(
  isTeacherAuthenticated,
  takeAttendance
);
Router.route("/view-grade-attendance/:grade_id").get(
  isTeacherAuthenticated,
  viewGradeAttendance
);
Router.route("/load-all-students-same-grade").get(
  isTeacherAuthenticated,
  loadAllStudentOnSameGradeIncharge
);
module.exports = Router;
