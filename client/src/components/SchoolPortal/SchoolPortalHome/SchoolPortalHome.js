import React from 'react'
import schoolportallogo from "../../../Assets/schoolportallogo.png"
import AllschoolAssociation from "../../../Assets/association.jpeg"
import "./SchoolPortalHome.css"
import { FaTemperatureHigh } from "react-icons/fa";
export default function SchoolPortalHome() {
  return (
    <div className='bg-[#033e71]'>

      <div className='flex flex-col justify-center items-center p-4'>
        <div className='flex items-center justify-between  md:w-[50%]'>
        <div>
        <h1 className='text-[#40b08c] text-4xl md:text-5xl font-bold'>Belike Edu. Software</h1>
        </div>
         <div>
             <img src={schoolportallogo} className='invert' alt="" />
         </div>
        </div>
        <div className='mt-4'>
          <h2 className='text-3xl font-bold text-white'>Our partners School</h2>

     
        </div>
        <div className='mt-6 flex justify-between  md:w-[65%]'>
             <div className='schoolportalcards  bg-white w-[45%] flex flex-col justify-center items-center'>
              <div>
                  <img src={schoolportallogo} className='hover:invert' alt="" />
              </div>
                <div className='mt-2'>
                <h3>Other Institutes</h3>
                </div>
             </div>
             <div className='patners schoolportalcards  w-[45%] bg-white flex flex-col justify-center items-center'>
              <div>
                <img src={AllschoolAssociation} className='patners w-[8rem] h-[8rem]' alt="" />
              </div>
                <div className='text-center mt-2'>
                <h3>All Schools and Academies Association</h3>
                </div>
             </div>

          </div>
        <div>

        </div>
      </div>
      <div class='mt-4 border border-red-800 flex flex-col justify-center items-center'>
  <h1 className='text-4xl text-white font-bold'>Admissions</h1>
  <div class='mt-4 flex gap-2 flex-wrap  w-[70%] border border-fuchsia-500'>
    <div class=' border border-red-500 flex flex-col justify-center items-center admcard  mx-auto'>
      <div>
        <FaTemperatureHigh class='text-2xl admnicon' />
      </div>
      <div><h3 class='font-bold text-xl'>Summer</h3></div>
    </div>
    <div class=' flex flex-col justify-center items-center admcard   mx-auto'>
      <div>
        <FaTemperatureHigh />
      </div>
      <div><h3>Annual</h3></div>
    </div>
    <div class=' flex flex-col justify-center items-center admcard  mx-auto'>
      <div>
        <FaTemperatureHigh />
      </div>
      <div><h3>Academy</h3></div>
    </div>
    <div class=' flex flex-col justify-center items-center admcard   mx-auto'>
      <div>
        <FaTemperatureHigh />
      </div>
      <div><h3>IT Course</h3></div>
    </div>
    <div class=' flex flex-col justify-center items-center admcard   mx-auto'>
      <div>
        <FaTemperatureHigh />
      </div>
      <div><h3>IT Course</h3></div>
    </div>
   
  </div>
</div>


        
    </div>
  )
}
