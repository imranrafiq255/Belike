import React, { useState } from 'react';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
// import { AddCourse } from './AdminAddCourse/AdminAddCourse';

function TeacherDashboard() {
  const [activeComponent, setActiveComponent] = useState('AddTeacher');
  const [Teacher, setTeacher] = useState(true);
  const [Showmenu, setShowmenu] = useState(false);
 console.log(activeComponent);
  return (
    <div className='relative h-[100vh]'>
      {Teacher ? (
       
       
        <div className='grid grid-cols-6 h-full'>
         
          <div className={`   md:block col-span-1 ${Showmenu ? ' ' : '  '} transition-width duration-500 ease-in-out p-2 bg-[#033e71] text-white text-[0.7rem] md:text-[1rem] font-light md:font-semibold overflow-hidden`}>
            <div className='text-end '>

              {/* <button onClick={() => setShowmenu(!Showmenu)}> 
                {Showmenu ? (
                  <RiMenuUnfoldLine style={{ transform: 'translateX(5%)' }} className=' md:text-4xl mr-2' />
                ) : (
                  <RiMenuFoldLine className='md:text-4xl mr-[-2rem]' />
                )}
              </button> */}
            </div>

            <ul className='md:p-2' style={{ transform: Showmenu ? 'translateX(-1000%)' : 'translateX(0%)', transition: 'transform 0.5s ease-in-out' }}>
              <li><h1 className='font-extrabold xl md:text-2xl'>Quick as</h1></li>
              <li className='mt-4'><h5  href={''} onClick={() => setActiveComponent('AddTeacher')} className={activeComponent === 'AddTeacher' ? ' border-b-2 border-white' : ''}>Add Teacher</h5></li>
              <li className='mt-4'><h5  href={``} onClick={() => setActiveComponent('')} className={activeComponent === '' ? ' border-b-2 border-white' : ''}>Add Student</h5></li>
              {/* <li className='mt-4'><h5  href={''} onClick={() => setActiveComponent('AddCourse')} className={` cursor-pointer ${activeComponent === 'AddCourse' ? ' border-b-2 border-white' : ''}`}>Add Course</h5></li> */}
              <li className='mt-4'><h5  href={``} onClick={() => setActiveComponent('')} className={` cursor-pointer ${activeComponent === '' ? ' border-b-2 border-white' : ''}`}>Add Grade</h5></li>
              <li className='mt-4'><h5  href={``} onClick={() => setActiveComponent('')} className={` cursor-pointer ${activeComponent === '' ? 'border-b-2 border-white' : ''}`}>View Results</h5></li>
              <li className='mt-4'><h5  href={``} onClick={() => setActiveComponent('')} className={` cursor-pointer ${activeComponent === '' ? 'border-b-2 border-white' : ''}`}>View Grades</h5></li>
              <li className='mt-4'><h5  href={``} onClick={() => setActiveComponent('')} className={` cursor-pointer ${activeComponent === '' ? 'border-b-2 border-white' : ''}`}>View Attendence</h5></li>
              <li className='mt-4'><h5  href={``} onClick={() => setActiveComponent('')} className={` cursor-pointer ${activeComponent === '' ? 'border-b-2 border-white' : ''}`}>View Session Feedback</h5></li>
              <li className='mt-4'><h5  href={``} onClick={() => setActiveComponent('')} className={` cursor-pointer ${activeComponent === '' ? 'border-b-2 border-white' : ''}`}>View Course</h5></li>
           
            </ul>
           <div>
          <button>Signout</button>
           </div>
          </div>

          <div className='p-4 col-span-5'>
       
           <div className='text-center bg-gray-200 font-bold'><h1>Teacher Dashboard</h1></div>

            {/* {activeComponent === 'AddCourse' && <AddCourse />} */}
          </div>
        </div>
     
      ) : (
        <h1>Not logged in to any account</h1>
      )}
    </div>
  );
}

export default TeacherDashboard;
