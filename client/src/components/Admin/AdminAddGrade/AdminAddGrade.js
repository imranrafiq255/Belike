import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../ToastMessages/ToastMessage";

export const AdminAddGrade = () => {
  const [courses, setCourses] = useState(null);
  const [gradeCategory, setGradeCategory] = useState("");
  const [gradeCourses, setGradeCourses] = useState("");
  const [gradeRoomNumber, setGradeRoomNumber] = useState("");
  const [gradeSchoolTiming, setGradeSchoolTiming] = useState("");
  const [gradeIncharge, setGradeIncharge] = useState("");
  const [teachers, setAllTeachers] = useState(null);
  const {
    register,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const response = await axios.get("/api/v1/admin/load-all-courses");
        setCourses(response.data.courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAllCourses();
    const fetchAllTeachers = async () => {
      try {
        const response = await axios.get("/api/v1/admin/load-all-teachers");
        setAllTeachers(response?.data?.teachers);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };
    fetchAllTeachers();
  }, []);
  //   ###################################### Grade Courses options ##################################
  const [SelectedCourses, setSelectedCourses] = useState([]);
  useEffect(() => {
    setGradeCourses(SelectedCourses);
  }, [SelectedCourses]);
  const handleSelectCourse = (event) => {
    const selectedCourse = event.target.value;
    setSelectedCourses((prevCourses) => {
      if (!prevCourses.includes(selectedCourse)) {
        return [...prevCourses, selectedCourse];
      } else {
        return prevCourses;
      }
    });
  };

  const removeCourse = (course) => {
    setSelectedCourses(SelectedCourses.filter((item) => item !== course));
  };

  const addGradeDataSendHandler = (e) => {
    e.preventDefault();
    if (
      gradeCategory &&
      gradeCourses &&
      gradeRoomNumber &&
      gradeSchoolTiming &&
      gradeIncharge
    ) {
      const Courses = [];
      gradeCourses.map((course) => {
        return Courses.push({ courseId: course });
      });
      const data = {
        gradeCategory,
        gradeCourses: Courses,
        gradeRoomNumber,
        gradeSchoolTiming,
        gradeIncharge,
      };
      const sendGradeData = async () => {
        try {
          const response = await axios.post("/api/v1/admin/add-grade", data);
          handleShowSuccessToast(response.data.message);
          console.log(response.data.message);
        } catch (error) {
          handleShowFailureToast(error.response.data.message);
          console.log(error.response.data.message);
        }
      };
      sendGradeData();
    } else {
      handleShowFailureToast("Input parameter is missing");
    }
    // ############### Api Request Here #######################
  };

  return (
    <div className="md:px-8 mt-4">
      <Toaster />
      <form className="text-gray-600 body-font relative">
        <div className="">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium gradeCategory-font  text-gray-900">
              Add Grade
            </h1>
          </div>
          <div className=" ">
            <div className=" ">
              <div className="md:flex justify-between   ">
                <div className="md:w-[45%]">
                  <label
                    htmlFor="gradeCategory"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Grade Category
                  </label>
                  <input
                    type="text"
                    id="gradeCategory"
                    name="gradeCategory"
                    className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out `}
                    onChange={(e) => setGradeCategory(e.target.value)}
                  />
                </div>
                <div className="md:w-[45%] ">
                  <label
                    htmlFor="gradeCourses"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Grade Courses
                  </label>
                  <div>
                    <select
                      id="gradeCoursess"
                      name="gradeCoursess"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      onChange={handleSelectCourse}
                      value=""
                    >
                      <option selected disabled value="">
                        Select
                      </option>
                      {courses && Array.isArray(courses)
                        ? courses.map((course) => (
                            <option value={course?._id}>
                              {course?.courseTitle}
                            </option>
                          ))
                        : ""}
                    </select>
                    <div>
                      {SelectedCourses.map((option, index) => (
                        <div
                          key={index}
                          className="inline-block bg-gray-100 text-gray-800 rounded-md px-2 py-1 mr-2 mt-2"
                        >
                          {option}
                          <button
                            onClick={() => removeCourse(option)}
                            className="ml-2"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between ">
                <div className="md:w-[45%] ">
                  <label
                    htmlFor="gradeRoomNumber"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Grade Room Number
                  </label>
                  <input
                    type="text"
                    id="gradeRoomNumber"
                    name="gradeRoomNumber"
                    className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out `}
                    onChange={(e) => setGradeRoomNumber(e.target.value)}
                  />
                </div>
                <div className="md:w-[45%] ">
                  <label
                    htmlFor="gradeSchholTiming"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Grade School Timing
                  </label>
                  <input
                    type="text"
                    id="gradeSchoolTiming"
                    name="gradeSchoolTiming"
                    className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out `}
                    onChange={(e) => setGradeSchoolTiming(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="md:w-[45%]">
                  <label
                    htmlFor="courseTeacher"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Grade Incharge
                  </label>
                  <select
                    name="courseTeacher"
                    id="courseTeacher"
                    {...register("courseTeacher", { required: true })}
                    onChange={(e) => setGradeIncharge(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  >
                    <option value="">Teacher</option>
                    {teachers && Array.isArray(teachers)
                      ? teachers.map((teacher) => (
                          <option value={teacher?._id}>
                            {teacher?.teacherName}
                          </option>
                        ))
                      : ""}
                  </select>
                  {errors.courseTeacher && (
                    <p className="text-red-500 text-xs mt-1">
                      Course Teacher is required
                    </p>
                  )}
                </div>
              </div>
              <div className="md:flex justify-between"></div>
              <div className="p-2 w-full mt-4">
                <button
                  onClick={addGradeDataSendHandler}
                  className="flex justify-center w-1/3 mx-auto text-white bg-[#40b08c] border-0 py-1 px-4 focus:outline-none hover:bg-[#75dbbb] rounded text-lg"
                  type="submit"
                >
                  Add Grade
                </button>
              </div>
              <div className="p-2 w-full text-center"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
