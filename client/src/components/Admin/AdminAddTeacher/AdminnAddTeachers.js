import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
export const AdminAddTeacher = () => {
    const [activeComponent, setActiveComponent] = useState('myproduct');
    const [userRole,setuserRole]=useState("Admin")
   
  const [Showmenu,setShowmenu]=useState(false)
    const [AddCourse,setAddCourse]=useState({
      teacherName:"",
      category:"",
      teacherEmail:"",
      teacherCourses:"",
      teacherSalary:"",
      avatar:"",
      stock:"",
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
    

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [SelectedCourses, setSelectedCourses] = useState([]);
 

    const handleSelectChange = (event) => {
      const selectedOption = event.target.value;
      if (!selectedOptions.includes(selectedOption)) {
        setSelectedOptions([...selectedOptions, selectedOption]);
      }
    };

    const handleSelectCourse = (event) => {
      const selectedCourse = event.target.value;
      if (!SelectedCourses.includes(selectedCourse)) {
        setSelectedCourses([...SelectedCourses, selectedCourse]);
      }
    };
    
    const removeCourse = (course) => {
      setSelectedCourses(SelectedCourses.filter((item) => item !== course));
    };
    
    const removeOption = (option) => {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    };
  return (
    <div className='md:px-8 mt-4'>
      { userRole  === "Admin" ?(
        
<form onSubmit={handlesubmitt} className="text-gray-600 body-font relative">
  <div className="">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-2xl font-medium teacherName-font  text-gray-900">Add Teacher</h1>
      
    </div>
    <div className=" ">
      <div className=" ">
        <div className="md:flex justify-between   ">
          <div className="md:w-[45%]">
            <label htmlFor="teacherName" className="leading-7 text-sm text-gray-600">Teacher Name</label>
            <input type="text" id="teacherName" name="teacherName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handlechange} />
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="teacherEmail"  className="leading-7 text-sm text-gray-600">Teacher Email</label>
            <input  id="teacherEmail"  name="teacherEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        
        </div>
        <div className="md:flex justify-between ">
        <div className="md:w-[45%]">
            <label htmlFor="teachersGrade" className="leading-7 text-sm text-gray-600">Teacher Grades</label>
           
            <div>
      <select
        id="grades"
        name='teacherGrades'
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-purple-500 dark:focus:border-purple-500"
        onChange={handleSelectChange}
        value=""
      >
        <option selected disabled value="">Select</option>
        <option value="Home and Furniture">Home and Furniture</option>
        <option value="Sports and Fitness">Sports and Fitness</option>
        <option value="Health ">Health </option>
        <option value="Wellness"> Wellness</option>
        <option value="Well"> Well</option>
        {/* Add other options */}
      </select>
      
      <div>
        {selectedOptions.map((option, index) => (
          <div key={index} className="inline-block bg-gray-100 text-gray-800 rounded-md px-2 py-1 mr-2 mt-2">
            {option}
            <button onClick={() => removeOption(option)} className="ml-2">&times;</button>
          </div>
        ))}
      </div>
    </div>

          </div>
          <div className="md:w-[45%]">
            <label htmlFor="stock" className="leading-7 text-sm text-gray-600">Teacher Password</label>
            <input   id="stock" name="stock" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="md:flex justify-between ">
          <div className="md:w-[45%] ">
            <label htmlFor="teacherSalary" className="leading-7 text-sm text-gray-600">Teacher Salary</label>
            <input type="text"  id="teacherSalary" name="teacherSalary" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%] ">
            <label htmlFor="teacherIdCardno" className="leading-7 text-sm text-gray-600">Teacher Id Card no</label>
            <input type="text"  id="teacherIdCardno" name="teacherIdCardno" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          
          
         
        </div>
       <div className="md:flex justify-between ">
     
       <div className="md:w-[45%]">
            <label htmlFor="teachersGrade" className="leading-7 text-sm text-gray-600">Teacher Grades</label>
           
            <div>
      <select
        id="grades"
        name='teacherGrades'
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-purple-500 dark:focus:border-purple-500"
        onChange={handleSelectCourse}
        value=""
      >
        <option selected disabled value="">Select</option>
        <option value="Home and Furniture">Home and Furniture</option>
        <option value="Sports and Fitness">Sports and Fitness</option>
        <option value="Health ">Health </option>
        <option value="Wellness"> Wellness</option>
        <option value="Well"> Well</option>
        {/* Add other options */}
      </select>
      
      <div>
        {SelectedCourses.map((option, index) => (
          <div key={index} className="inline-block bg-gray-100 text-gray-800 rounded-md px-2 py-1 mr-2 mt-2">
            {option}
            <button onClick={() => removeCourse(option)} className="ml-2">&times;</button>
          </div>
        ))}
      </div>
    </div>

          </div>
          <div className="md:w-[45%] ">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Teacher Job Date</label>
            <input  id="teacherJobDate" name="teacherJobDate" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
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


    












 