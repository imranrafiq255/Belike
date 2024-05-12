const studentModel = require("../models/student.models");
const attendanceModel = require("../models/attendance.models");
const { STATUS_CODES } = require("http");
const teacherModel = require("../models/teacher.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const testModel = require("../models/test.models");
const resultModel = require("../models/result.models");
require("dotenv").config();
exports.teacherLogin = async (req, res) => {
  try {
    const { teacherEmail, teacherPassword } = req.body;
    if (!teacherEmail) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Teacher Email is missing",
      });
    }
    if (!teacherPassword) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Teacher Password is missing",
      });
    }
    const isTeacherEmailExisted = await teacherModel
      .findOne({ teacherEmail })
      .select("+teacherPassword");
    if (!isTeacherEmailExisted) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: `${teacherEmail} is not existed into database, please add correct email address!`,
      });
    }
    const passwordCompared = await bcrypt.compare(
      teacherPassword,
      isTeacherEmailExisted.teacherPassword
    );
    if (!passwordCompared) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message:
          "Password is incorrect, please add correct password and try again!",
      });
    }
    const options = {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 10,
      secure: true,
    };
    const teacherToken = await jwt.sign(
      { _id: isTeacherEmailExisted._id },
      process.env.TEACHER_SECRET_TOKEN
    );
    res.cookie("teacherToken", teacherToken, options);
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "You signed in successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.createAttendance = async (req, res) => {
  try {
    const { gradeId } = req.params.id;
    if (!gradeId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Grade id is missing",
      });
    }
    await attendanceModel.create({ gradeId });
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: "Attendance is created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.takeAttendance = async (req, res) => {
  try {
    const { attendanceStudents } = req.body;
    const gradeId = req?.params?.grade_id;
    if (!gradeId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Grade id parameter is missing",
      });
    }
    if (!attendanceStudents) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Students Attendance is missing",
      });
    }
    await attendanceModel.create({
      attendanceStudents,
      gradeId,
    });
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: "Attendance is saved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadCurrentTeacher = async (req, res) => {
  try {
    const teacherId = req?.currentTeacher?._id;
    const isCurrentTeacherExisted = await teacherModel
      .findOne({ _id: teacherId })
      .populate("teacherGrades.gradeId")
      .populate("teacherCourses.courseId");
    if (!isCurrentTeacherExisted) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message:
          "Current Teacher not existed into database, please login again!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      teacher: isCurrentTeacherExisted,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.createTest = async (req, res) => {
  try {
    const gradeId = req?.params?.grade_id;
    const testCourseId = req?.params?.test_course_id;
    const {
      testNumber,
      testTotalMarks,
      testQuestions,
      testConductedDate,
      testTime,
    } = req.body;
    if (!gradeId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Grade Id is missing",
      });
    }
    if (!testCourseId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Test Course Id is missing",
      });
    }
    if (
      !testNumber ||
      !testTotalMarks ||
      !testQuestions ||
      !testConductedDate ||
      !testTime
    ) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message:
          "Test Number or Test Total Marks or Test Questions or Test Conducted Date or Test Time parameter is missing, Pleae make sure no paramter should be missed at all!",
      });
    }
    const newTest = await new testModel({
      testNumber,
      gradeId,
      testCourseId,
      testTotalMarks,
      testQuestions,
      testConductedDate,
      testTime,
    }).save();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `Test number ${newTest.testNumber} is created`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.createResult = async (req, res) => {
  try {
    const testId = req?.params?.test_id;
    const gradeId = req?.params?.grade_id;
    const studentId = req?.params?.student_id;
    if ((!testId, !gradeId, !studentId)) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message:
          "Test Id or Grade Id or Student Id is missing, please make sure all parameters must be added!",
      });
    }
    const { resultObtainedNumber, resultStatus, resultPercentage } = req.body;
    if (!resultObtainedNumber || !resultStatus || !resultPercentage) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message:
          "Result Obtained Number or Result Status or Result Percentage is missing, Please add all fields!",
      });
    }
    const newResult = await new resultModel({
      testId,
      gradeId,
      studentId,
      resultObtainedNumber,
      resultStatus,
      resultPercentage,
    }).save();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Result is submitted successfully",
      newResult,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.viewGradeResult = async (req, res) => {
  try {
    const gradeId = req?.params?.grade_id;
    if (!gradeId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Grade Id parameter is missing",
      });
    }
    let gradeResult = await resultModel
      .find({ gradeId })
      .populate("studentId")
      .populate("testId");
    if (gradeResult.length === 0 || !gradeResult) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "The is no result for this grade in database",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      gradeResult,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.viewGradeAttendance = async (req, res) => {
  try {
    const gradeId = req.currentTeacher.teacherGradeIncharge;
    if (!gradeId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Grade Id parameter is missing, please add it",
      });
    }
    const gradeStudentsAttendance = await attendanceModel
      .find({ gradeId })
      .populate("attendanceStudents.studentId");
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      gradeStudentsAttendance,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.loadAllStudentOnSameGradeIncharge = async (req, res) => {
  try {
    const gradeId = req?.currentTeacher?.teacherGradeIncharge;
    if (!gradeId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message:
          "Grade Id is missing from Teacher Grade Incharge, please login!",
      });
    }
    const studentsSameGrade = await studentModel.find({
      studentGrade: gradeId,
    });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      studentsSameGrade,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
