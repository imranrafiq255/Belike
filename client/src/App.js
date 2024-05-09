import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Landingpage from "./components/Landing/Landing";

// import SchoolPortalHome from "./components/SchoolPortal/SchoolPortalHome/SchoolPortalHome";
import AdminDashboard from "./components/Admin/AdminDashboard";
// import TeacherDashboard from "./components/Teacher/TeacherDashboard.js";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import Login from "./components/Student/StudentLogin/Login.Student";
import TeacherLogin from "./components/Teacher/TeacherLogin/TeacherLogin";
import StudentViewAtttendance from "./components/Student/StudentViewAttendance/StudentViewAtttendance";

import TeacherTakeAttendance from "./components/Teacher/TeacherAttendance/TeacherTakeAttendance";
import TeacherViewAttendance from "./components/Teacher/TeacherAttendance/TeacherViewAttendance.js";

import { AddCourse } from "./components/Admin/AdminAddCourse/AdminAddCourse";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentViewProfile from "./components/Student/StudentViewSubjects/StudentViewProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import loadCurrentStudentAction from "./components/Redux/Student/Actions/loadCurrentStudentAction.Student";
import RingLoader from "./components/Loaders/RingLoader";
import loadCurrentAdminAction from "./components/Redux/Admin/Actions/loadCurrentAdminAction.Admin";
import Landingpage from "./components/Landing/Landing";
function App() {
  const dispatch = useDispatch();
  const [studentLoading, setStudentLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    dispatch(loadCurrentStudentAction())
      .then(() => setStudentLoading(false))
      .catch((error) => {
        setStudentLoading(false);
      });
    dispatch(loadCurrentAdminAction())
      .then(() => setAdminLoading(false))
      .catch((error) => setAdminLoading(false));
  }, []);
  const { isStudentAuthenticated } = useSelector(
    (state) => state.currentStudentData
  );
  const { isAdminAuthenticated } = useSelector(
    (state) => state.currentAdminData
  );
  if (studentLoading || adminLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <RingLoader />
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Landingpage/>}/>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-login" element={<Login />} />
          <Route path="/admin-add-course" element={<AddCourse />} />
          {/* <Route path="/SchoolPortalHome" element={ <SchoolPortalHome/>}/> */}
          <Route
            path="/admin-dashboard"
            element={isAdminAuthenticated ? <AdminDashboard /> : <AdminLogin />}
          />
        

          <Route
            path="/student-dashboard"
            element={isStudentAuthenticated ? <StudentDashboard /> : <Login />}
          />
          <Route
            path="/student-view-profile"
            element={
              isStudentAuthenticated ? <StudentViewProfile /> : <Login />
            }
          />
          <Route
            path="/student-view-attendance"
            element={<StudentViewAtttendance />}
          />
          <Route
            path="/teacher-take-attendance"
            element={<TeacherTakeAttendance />}
          />
          <Route
            path="/teacher-view-attendance"
            element={<TeacherViewAttendance />}
          />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
