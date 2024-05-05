import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
export const AddCourse = () => {
    const [activeComponent, setActiveComponent] = useState('myproduct');
    const [userRole,setuserRole]=useState("Admin")
   
  const [Showmenu,setShowmenu]=useState(false)
    const [AddCourse,setAddCourse]=useState({
      title:"",
      category:"",
      CourseTeacher:"",
      discount:"",
      CourseStudents:"",
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
    
  return (
    <div className='md:px-8 mt-4'>
      { userRole  === "Admin" ?(
        
<form onSubmit={handlesubmitt} className="text-gray-600 body-font relative">
  <div className="">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Add Course</h1>
      
    </div>
    <div className=" ">
      <div className=" ">
        <div className="md:flex justify-between   ">
          <div className="md:w-[45%]">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
            <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handlechange} />
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="CourseTeacher"  className="leading-7 text-sm text-gray-600">CourseTeacher</label>
            <input type="text" min="0" id="CourseTeacher"  name="CourseTeacher" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          {/* <div className="md:w-[45%]">
            <label htmlFor="category" className="leading-7 text-sm text-gray-600">Category</label>
           
           <select id="countries" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-purple-500 dark:focus:border-purple-500" onChange={handlechange}>
             <option className="p-2 hover:bg-purple-400" selected disabled>Select </option>
             <option className="p-2 hover:bg-purple-400" value="Home and Furniture">Home and Furniture</option>
             <option className="p-2 hover:bg-purple-400" value="Sports and Fitness">Sports and Fitness</option>
             <option className="p-2 hover:bg-purple-400" value="Health and Wellness">Health and Wellness</option>
             <option className="p-2 hover:bg-purple-400" value="Automotive">Automotive</option>
             <option className="p-2 hover:bg-purple-400" value="Baby and Kids">Baby and Kids</option>
             <option className="p-2 hover:bg-purple-400" value="Food and Beverages">Food and Beverages</option>
             <option className="p-2 hover:bg-purple-400" value="Toys and Games">Toys and Games</option>
             <option className="p-2 hover:bg-purple-400" value="Apparel and Accessories">Apparel and Accessories</option>
             <option className="p-2 hover:bg-purple-400" value="Electronics">Electronics</option>
             <option className="p-2 hover:bg-purple-400" value="Jewelry and Watches">Jewelry and Watches</option>
             <option className="p-2 hover:bg-purple-400" value="Education and Learning">Education and Learning</option>
            </select>
          </div> */}
        </div>
        {/* <div className="md:flex justify-between ">
          <div className="md:w-[45%]">
            <label htmlFor="CourseTeacher"  className="leading-7 text-sm text-gray-600">CourseTeacher</label>
            <input type="number" min="0" id="CourseTeacher"  name="CourseTeacher" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="stock" className="leading-7 text-sm text-gray-600">Stock Present?</label>
            <input type="number" min="0"  id="stock" name="stock" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div> */}
        <div className="md:flex justify-between ">
          <div className="md:w-[45%] ">
            <label htmlFor="CourseStudents" className="leading-7 text-sm text-gray-600">CourseStudents</label>
            <input type="text"  id="CourseStudents" name="CourseStudents" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          {/* <div className="md:w-[45%] ">
            <label htmlFor="profile picture" className="leading-7 text-sm text-gray-600">Select Profile Picture</label>
            <div>
            
            </div>
          </div> */}
        </div>
        {/* <div className="md:flex justify-between ">
          <div className="md:w-[45%] ">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Discount</label>
            <input type="number" min="0" id="discount" name="discount" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%] ">
            <label htmlFor="profile picture" className="leading-7 text-sm text-gray-600">Enter Small Description</label>
           <div>
           <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="description" id="" cols="55" rows="2" onChange={handlechange}></textarea>
           </div>
          </div>
        </div> */}
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


    












 