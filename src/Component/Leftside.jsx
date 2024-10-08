import React from 'react'

function Leftside() {
  return (
    <div className='flex flex-col w-full sm:w-[25%] absolute left-0 items-center bg-black h-screen justify-around'>
    {/* شريط البحث */}
    <div className='w-full flex justify-center mt-2'>
      <label className="input input-bordered flex items-center h-auto overflow-y-scroll w-[90%] gap-2 bg-[#202427]">
        <input type="text" className="grow rounded-e-full" placeholder="بحث" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </label>
    </div>
  
    {/* قسم الاشتراك */}
    <div className='border border-gray-700 h-[25vh] w-[80%] p-3 flex max-sm:h-[30vh] max-md:h-[50%] max-xl:h-[50%] flex-col justify-around'>
      <h1 className='font-bold text-2xl text-white text-right '>Premium الاشتراك في</h1>
      <h2 className='text-white text-xl text-right max-sm:text-l max-xl:text-[2vh] '>اشترك لاكتشاف مميزات جديدة وفي حال كنت مؤهلا، ستتسلم حصة من إيرادات الإعلانات</h2>
      <button type="submit" className='text-white bg-[#1c9bef] rounded-3xl  max-sm:h-[6vh]  sm:w-[10vh] p-2 text-xl'>اشتراك</button>
    </div>
  
    {/* قسم المحتوى */}
    <div className='border border-gray-700 w-[80%] h-[60vh] p-3 flex flex-col justify-around overflow-y-auto'>
      <h1 className='text-white text-right'>ماذا يحدث</h1>
  
      {/* إضافة العناصر */}
      {["المتداول في المملكة العربية السعودية", "صور شعبية - متداول", "سلطان-عويد-النمران-حادث#", "ارامكو#"].map((title, index) => (
        <div key={index} className='flex justify-between'>
          <svg className='w-[4%]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Menu / More_Horizontal">
                <g id="Vector">
                  <path d="M17 12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </g>
            </g>
          </svg>
          <h2 className='text-white text-gray-500 text-xl'>{title}</h2>
        </div>
      ))}
    </div>
  </div>
)    
}

export default Leftside
