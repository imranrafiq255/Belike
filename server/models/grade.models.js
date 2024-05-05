const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema(
  {
    gradeCategory: {
      type: String,
      required: [true, "Grade Category is required"],
      unique: [true, "Grade Category must be unique"],
    },
    gradeStudents: [
      {
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
      },
    ],
    gradeTeachers: [
      {
        teacherId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Teacher",
        },
      },
    ],
    gradeCourses: [
      {
        gradeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      },
    ],
    gradeResults: [
      {
        resultId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Result",
        },
      },
    ],
    gradeRoomNumber: String,
    gradeSchoolTiming: String,
  },
  { timestamps: true }
);

const gradeModel = mongoose.model("Grade", gradeSchema);

module.exports = gradeModel;
