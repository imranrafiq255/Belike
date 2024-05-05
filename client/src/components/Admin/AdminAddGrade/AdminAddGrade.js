import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
export const AdminAddGrade = () => {
    const [activeComponent, setActiveComponent] = useState('myproduct');
    const [userRole,setuserRole]=useState("Admin")
   
  const [Showmenu,setShowmenu]=useState(false)
    const [AddCourse,setAddCourse]=useState({
      gradeCategory:"",
      category:"",
      gradeStudents:"",
      gradeCoursesss:"",
      teacherSalary:"",
      avatar:"",
      studentPassword:"",
      description:"",
      supplierId:"",
    })
    const handlechange=(e)=>{
      e.preventDefault();
     const {name,value}=e.target;
     setAddCourse(prev=>({
      ...prev,
      [name]:value,
     }))
    }
    const handlesubmitt=async(e)=>{
      e.preventDefault();
      console.log(AddCourse);
      try {
            const response=await axios.post('http://localhost:5200/AddCourse',AddCourse)
            toast.success('product added successfuly')
      } catch (error) {
        console.log(error);
      }
       console.log(AddCourse);
    }
    
  return (
    <div className='md:px-8 mt-4'>
      { userRole  === "Admin" ?(
        
<form onSubmit={handlesubmitt} className="text-gray-600 body-font relative">
  <div className="">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-2xl font-medium gradeCategory-font  text-gray-900">Add Grade</h1>
      
    </div>
    <div className=" ">
      <div className=" ">
        <div className="md:flex justify-between   ">
          <div className="md:w-[45%]">
            <label htmlFor="gradeCategory" className="leading-7 text-sm text-gray-600">Student Name</label>
            <input type="text" id="gradeCategory" name="gradeCategory" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handlechange} />
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="gradeStudents"  className="leading-7 text-sm text-gray-600">Grade Student</label>
            <input  min="0" id="gradeStudents"  name="gradeStudents" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="md:flex justify-between ">
          <div className="md:w-[45%]">
            <label htmlFor="gradeTeachers"  className="leading-7 text-sm text-gray-600">Grade Teachers</label>
            <input   id="gradeTeachers"  name="gradeTeachers" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="studentPassword" className="leading-7 text-sm text-gray-600">Student Password</label>
            <input    id="studentPassword" name="studentPassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="md:flex justify-between ">
        <div className="md:w-[45%] ">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Grade Courses</label>
            <input  id="gradeCoursesss" name="gradeCoursesss" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%] ">
            <label htmlFor="gradeResults" className="leading-7 text-sm text-gray-600">Grade Results</label>
            <input type="text"  id="gradeResults" name="gradeResults" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          
          
         
        </div>
      
        <div className="p-2 w-full mt-4">
          <button className="flex mx-auto text-white bg-[#40b08c] border-0 py-1 px-4 focus:outline-none hover:bg-[#75dbbb] rounded text-lg" type='submit'>Add Course</button>
        </div>
        <div className="p-2 w-full    text-center">
        </div>
      </div>
    </div>
  </div>
</form>
      ):(
        <h1>You need to login as supplier...</h1>
      )
      }
    </div>
  )
}


    












 