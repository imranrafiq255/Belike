const mongoose = require("mongoose");

function getCurrentMonth() {
  return new Date().getMonth() + 1;
}

function getCurrentYear() {
  return new Date().getFullYear();
}
const attendanceSchema = mongoose.Schema(
  {
    attendanceDate: {
      type: Date,
      default: Date.now,
    },
    attendanceLecture: {
      type: Number,
      default: 0,
    },
    gradeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
    },
    attendanceStudents: [
      {
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        present: {
          type: Boolean,
          default: false,
        },
      },
    ],
    currentMonth: {
      type: Number,
      default: getCurrentMonth(),
    },
    currentYear: {
      type: Number,
      default: getCurrentYear(),
    },
    isAttendanceMarked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const attendanceModel = mongoose.model("Attendance", attendanceSchema);

module.exports = attendanceModel;
