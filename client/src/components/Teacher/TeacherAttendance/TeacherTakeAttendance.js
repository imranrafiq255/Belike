import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadCurrentTeacherAction from "../../Redux/Teacher/Actions/loadCurrentTeacherAction.Teacher";
import axios from "axios";
import { handleShowFailureToast } from "../../ToastMessages/ToastMessage";

const TeacherTakeAttendance = () => {
  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState([]);
  const [lectureCount, setLectureCount] = useState(2);
  const [checkedStatus, setCheckedStatus] = useState({});
  const [allStudents, setAllStudents] = useState(null);
  const [viewGradeAttendance, setViewGradeAttendance] = useState(null);
  const [lectureNumber, setLectureNumber] = useState();
  useEffect(() => {
    dispatch(loadCurrentTeacherAction());
    const loadAllGradeStudents = async () => {
      try {
        const response = await axios.get(
          "/api/v1/teacher/load-all-students-same-grade"
        );
        setAllStudents(response.data.studentsSameGrade);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    loadAllGradeStudents();
  }, [dispatch]);

  const { currentTeacherData } = useSelector(
    (state) => state.currentTeacherData
  );

  useEffect(() => {
    if (currentTeacherData) {
      const loadViewGradeAttendance = async () => {
        try {
          const response = await axios.get(
            `/api/v1/teacher/view-grade-attendance/${currentTeacherData.teacher.teacherGradeIncharge._id}`
          );
          setViewGradeAttendance(response.data.gradeStudentsAttendance);
        } catch (error) {
          console.log(error.response.data.message);
        }
      };
      loadViewGradeAttendance();
    }
  }, [currentTeacherData]);
  console.log(viewGradeAttendance);
  const handleCheckboxChange = (studentId, lectureIndex, isChecked) => {
    const newCheckedStatus = { ...checkedStatus };
    newCheckedStatus[`${studentId}-${lectureIndex}`] = isChecked;
    setCheckedStatus(newCheckedStatus);
  };

  const handleSubmit = () => {
    if (allStudents) {
      const newAttendance = allStudents.map((student, studentIndex) => {
        const studentAttendance = Array.from(
          { length: 1 },
          (_, lectureIndex) => ({
            studentId: student._id,
            present: checkedStatus[`${student._id}-${lectureIndex}`] || false,
          })
        );
        return studentAttendance;
      });
      setAttendance(newAttendance);
      const sendDataToAttendanceApi = async () => {
        const data = {
          attendanceLecture: lectureNumber,
          attendanceStudents: newAttendance,
        };
        try {
          const response = await axios.post(
            `/api/v1/teacher/take-attendance/${currentTeacherData?.teacher?.teacherGradeIncharge?._id}`,
            data
          );
          console.log(response.data.message);
        } catch (error) {
          console.log(error.response.data.message);
        }
      };
      if (newAttendance.length > 0) {
        sendDataToAttendanceApi();
      }
    }
  };
  useEffect(() => {
    const initialCheckedStatus = {};
    if (allStudents) {
      allStudents.forEach((student) => {
        for (let i = 0; i < lectureCount; i++) {
          initialCheckedStatus[`${student._id}-${i}`] = true;
        }
      });
      setCheckedStatus(initialCheckedStatus);
    }
  }, [allStudents, lectureCount]);

  return (
    <div className="">
      <div className="flex flex-col overflow-x-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="flex gap-8 m-10 items-center">
              <h1 className="text-2xl font-bold">
                Grade{" "}
                {
                  currentTeacherData?.teacher?.teacherGradeIncharge
                    ?.gradeCategory
                }
              </h1>
              <input
                type="number"
                placeholder="Enter Lecture No"
                onChange={(e) => setLectureNumber(e.target.value)}
                className=" border-[0.3px] py-2 px-2 outline-none border-slate-400"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Student Id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Student Name
                    </th>
                    Today's Attendance
                  </tr>
                </thead>
                <tbody>
                  {allStudents &&
                    allStudents.map((student, studentIndex) => (
                      <tr
                        key={student?._id}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {studentIndex + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {student?._id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {student?.studentName}
                        </td>
                        {viewGradeAttendance &&
                          viewGradeAttendance.map(
                            (attendance, lectureIndex) => (
                              <td
                                key={lectureIndex}
                                className="whitespace-nowrap px-6 py-4"
                              >
                                <input
                                  id={`checkbox-${student._id}-${lectureIndex}`}
                                  type="checkbox"
                                  className="w-10 h-4"
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      student._id,
                                      lectureIndex,
                                      e.target.checked
                                    )
                                  }
                                  checked={
                                    checkedStatus[
                                      `${student._id}-${lectureIndex}`
                                    ] || false
                                  }
                                />
                              </td>
                            )
                          )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 px-8 py-2 rounded-md font-bold text-xl  text-white hover:bg-blue-400 m-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TeacherTakeAttendance;
