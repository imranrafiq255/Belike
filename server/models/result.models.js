const mongoose = require("mongoose");

const resultSchema = mongoose.Schema(
  {
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
    },
    gradeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    resultObtainedNumber: {
      type: Number,
      default: 0,
    },
    resultStatus: {
      type: Boolean,
      default: false,
    },
    resultPercentage: {
      type: String,
    },
  },
  { timestamps: true }
);

const resultModel = mongoose.model("Result", resultSchema);

module.exports = resultModel;
