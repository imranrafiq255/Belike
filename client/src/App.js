import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Footer } from "./components/Footer/Footer";
// import Landingpage from "./components/Landing/Landing";
// import Navbar from "./components/Navbar/Navbar";
// import SchoolPortalHome from "./components/SchoolPortal/SchoolPortalHome/SchoolPortalHome";
import AdminDashboard from "./components/Admin/AdminDashboard";
import TeacherDashboard from "./components/Teacher/TeacherDashboard";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import Login from "./components/Student/StudentLogin/Login.Student";
import TeacherLogin from "./components/Teacher/TeacherLogin/TeacherLogin";
import StudentViewAtttendance from "./components/Student/StudentViewAttendance/StudentViewAtttendance";
import TeacherTakeAttendance from "./components/Teacher/TeacherAttendance/TeacherTakeAttendance";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          {/* <Route path="/" element={<Landingpage/>}/> */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<Login />} />
          {/* <Route path="/SchoolPortalHome" element={ <SchoolPortalHome/>}/> */}
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route
            path="/student-view-attendance"
            element={<StudentViewAtttendance />}
          />
          <Route
            path="/teacher-take-attendance"
            element={<TeacherTakeAttendance />}
          />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
