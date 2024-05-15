const express = require("express");
const {
  createAdmin,
  adminLogin,
  addStudent,
  addTeacher,
  addGrade,
  addCourse,
  loadAllStudents,
  loadAllTeachers,
  loadCurrentAdmin,
  adminLogout,
  addTeacherCourses,
  addTeacherGrades,
  viewGradeResult,
  viewGradeAttendance,
  loadAllGrades,
  loadAllCourses,
  loadAllCoursesFeedbacks,
} = require("../controllers/admin.controllers");
const multipleUpload = require("../middlewares/imageUpload.middlewares");
const isAdminAuthenticated = require("../middlewares/isAdminAuthenticated.middlewares");
const Router = express.Router();

Router.route("/createadmin").post(multipleUpload, createAdmin);
Router.route("/login").post(adminLogin);
Router.route("/add-student/:grade_id").post(
  isAdminAuthenticated,
  multipleUpload,
  addStudent
);
Router.route("/add-teacher").post(
  isAdminAuthenticated,
  multipleUpload,
  addTeacher
);
Router.route("/add-teacher-courses/:teacher_id").post(
  isAdminAuthenticated,
  addTeacherCourses
);
Router.route("/add-teacher-grades/:teacher_id").post(
  isAdminAuthenticated,
  addTeacherGrades
);
Router.route("/add-grade").post(isAdminAuthenticated, addGrade);
Router.route("/add-course/:teacher_id").post(isAdminAuthenticated, addCourse);
Router.route("/load-all-students").get(isAdminAuthenticated, loadAllStudents);
Router.route("/load-all-teachers").get(isAdminAuthenticated, loadAllTeachers);
Router.route("/load-current-admin").get(isAdminAuthenticated, loadCurrentAdmin);
Router.route("/logout").get(isAdminAuthenticated, adminLogout);
Router.route("/view-grade-result/:grade_id").get(
  isAdminAuthenticated,
  viewGradeResult
);
Router.route("/view-grade-attendance/:grade_id").get(
  isAdminAuthenticated,
  viewGradeAttendance
);
Router.route("/load-all-grades").get(isAdminAuthenticated, loadAllGrades);
Router.route("/load-all-students").get(isAdminAuthenticated, loadAllStudents);
Router.route("/load-all-courses").get(isAdminAuthenticated, loadAllCourses);
Router.route("/load-all-courses-feedbacks").get(
  isAdminAuthenticated,
  loadAllCoursesFeedbacks
);
module.exports = Router;
