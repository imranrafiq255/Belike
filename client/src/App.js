
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import Landingpage from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import SchoolPortalHome from './components/SchoolPortal/SchoolPortalHome/SchoolPortalHome';
import AdminDashboard from './components/Admin/AdminDashboard';
import TeacherDashboard from './components/Teacher/TeacherDashboard';

import Login from './components/Student/StudentLogin/Login.Student';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
     <Routes>
       {/* <Route path="/" element={<Landingpage/>}/> */}
       {/* <Route path="/" element={<Login/>}/> */}
      {/* <Route path="/SchoolPortalHome" element={ <SchoolPortalHome/>}/> */}
      <Route path="/" element={ <AdminDashboard/>}/>
      {/* <Route path="/" element={ <TeacherDashboard/>}/> */}
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
