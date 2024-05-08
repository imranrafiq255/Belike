import React from 'react'
import StudentDashboard from '../StudentDashboard'

export default function StudentViewProfile() {
  return (
    <>
    <div className='h-[100vh]'>
  <div className='grid grid-cols-6 h-full'>
    <StudentDashboard className="h-full" />
    <div className='col-span-5 flex flex-col justify-center items-center'>
      <div className='justify-between p-2 bw-[90%] md:w-5/6 h-5/6'>
        <div className='md:flex flex-wrap items-center justify-between w-full h-1/5'>
          <div className='md:w-[40%] flex flex-col  justify-center items-center md:block '>
            <div>
            <img src="" alt="avatar" />
            </div>
          </div>
          <div className='md:w-[60%] flex justify-between mt-4 md:mt-0'>
          <div className='shrink-0'>
            <h1>Student Name</h1>
          </div>
          <div className='shrink-0'>
            <h1>Student Id</h1>
          </div>
          </div>
        </div>
        <div className='h-[80%] overflow-x-auto mt-4 text-center'>
          <table className="table-auto w-full border-collapse border border-gray-500">
            <thead>
              <tr className="">
                <th className="border border-gray-500 px-2 py-1">Subjects</th>
                <th className="border border-gray-500 px-2 py-1">Teachers</th>
                <th className="border border-gray-500 px-2 py-1">Timetable</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data */}
              <tr>
                <td className="border border-gray-500 px-2 py-1">Mathematics</td>
                <td className="border border-gray-500 px-2 py-1">Mr. Smith</td>
                <td className="border border-gray-500 px-2 py-1">Monday 9:00 AM - 10:30 AM</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-2 py-1">Science</td>
                <td className="border border-gray-500 px-2 py-1">Ms. Johnson</td>
                <td className="border border-gray-500 px-2 py-1">Tuesday 11:00 AM - 12:30 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-2 py-1">Science</td>
                <td className="border border-gray-500 px-2 py-1">Ms. Johnson</td>
                <td className="border border-gray-500 px-2 py-1">Tuesday 11:00 AM - 12:30 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-2 py-1">Science</td>
                <td className="border border-gray-500 px-2 py-1">Ms. Johnson</td>
                <td className="border border-gray-500 px-2 py-1">Tuesday 11:00 AM - 12:30 PM</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-2 py-1">Science</td>
                <td className="border border-gray-500 px-2 py-1">Ms. Johnson</td>
                <td className="border border-gray-500 px-2 py-1">Tuesday 11:00 AM - 12:30 PM</td>
              </tr>
              <tr>
                {/* Add more rows as needed */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
