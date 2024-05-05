const { STATUS_CODES } = require("http");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const studentModel = require("../models/student.models");
const attendanceModel = require("../models/attendance.models");
const resultModel = require("../models/result.models");
const feedbackResponseModel = require("../models/feedbackResponse.models");
const teacherModel = require("../models/teacher.models");
const feedbackModel = require("../models/feedback.models");
exports.studentLogin = async (req, res) => {
  try {
    const { studentEmail, studentPassword } = req.body;
    if (!studentEmail) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Student Email parameter is missing!",
      });
    }
    if (!studentPassword) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Student Password parameter is missing!",
      });
    }
    const isStudentEmailExisted = await studentModel.findOne({ studentEmail });
    if (!isStudentEmailExisted) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: `Incorrect email address!`,
      });
    }
    const comparedPassword = await bcrypt.compare(
      studentPassword,
      isStudentEmailExisted.studentPassword
    );
    if (!comparedPassword) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "Incorrect password!",
      });
    }
    const studentToken = await jwt.sign(
      { _id: isStudentEmailExisted._id },
      process.env.STUDENT_SECRET_TOKEN
    );
    const options = {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 20,
      secure: true,
    };
    res.cookie("studentToken", studentToken, options);
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "You logged in successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.studentLogout = async (req, res) => {
  try {
    res.clearCookie("studentToken");
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "You logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.viewAttendance = async (req, res) => {
  try {
    const studentId = req?.params?.student_id;
    if (!studentId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Student Id paramater is missing",
      });
    }
    const studentAttendance = await attendanceModel.find({
      "attendanceStudents.studentId": studentId,
    });
    if (!studentAttendance || studentAttendance.length === 0) {
      res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: `The student with id of: ${studentId} ,has no record in database with this id`,
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      studentAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.viewResult = async (req, res) => {
  try {
    const studentId = req?.params?.student_id;
    if (!studentId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Student Id parameter is missing",
      });
    }
    const studentResults = await resultModel
      .find({ studentId })
      .populate({ path: "testId", populate: { path: "testCourseId" } });
    if (!studentResults || studentResults.length === 0) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No result matches with student id of: " + studentId,
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      studentResults,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.submitFeedbacks = async (req, res) => {
  try {
    const studentId = req?.currentStudent?._id;
    const teacherId = req?.params?.teacher_id;
    const { feedbackMessage } = req.body;
    if (!studentId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Student id parameter is missing",
      });
    }
    if (!teacherId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Teacher Id is missing",
      });
    }
    if (!feedbackMessage) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Feedback message field is missing",
      });
    }
    const teacher = await teacherModel.findOne({ _id: teacherId });
    if (!teacher) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Teacher not found in database with id: " + teacherId,
      });
    }
    const newFeedback = await new feedbackModel({
      teacherId,
      studentId,
      feedbackMessage,
    }).save();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Your feedback is recorded successfully!",
      newFeedback,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.loadCurrentStudent = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
