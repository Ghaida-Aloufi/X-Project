import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  const [name,setName]=useState("")
  const [pass,setPass]=useState("")

  const post=(e)=>{
    
    if(name.length<5){
      alert("try the name")
    return
    }
    if(pass.length<8){
      alert("try the pass")
    return
    }
    fetch('https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login', {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    pass: pass,
  
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}) 

.then((response) => response.json())
.then((json) => {
  console.log(json);
  setName("");
  setPass("");
})
}



  return (





<div>
  <div className='w-[100%] h-[100vh] flex flex-row-reverse justify-evenly text-right justify-center items-center h-screen bg-black  max-sm:justify-center max-sm:justify-around '>
    <div className='w-[25%] max-sm:hidden'>
   <svg className='bg-black  ' viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path stroke="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
    </div>
   <div className="card bg-base-100 h-[60vh] flex flex-col justify-center items-center justify-around w-96 shadow-xl max-sm:w-[90%] ">
    <div className="card-body flex flex-col justify-center justify-around">
    <h2 className="card-title  flex justify-end text-3xl font-bold">إنشاء حساب</h2>
    <input type="text" onChange={(e)=>{setName(e.target.value)}} className='h-[6vh] border border-[#818484] text-right' placeholder='الاسم' />
    <input type='password' onChange={(e)=>{setPass(e.target.value)}} className='h-[6vh]  border border-[#818484] text-right' placeholder='الرقم السري'  />
    <h2 className='text-black'>بالتسجيل، أنت توافق على   <span className='text-[#188cd8]' >شروط الخدمة </span> و <span className='text-[#188cd8]'>سياسة الخصوصية</span> بما في ذلك <span className='text-[#188cd8]'> استخدام الكوكيز</span> </h2>
    <div className='w-[100%] flex justify-center items-center'>
      <Link to="/Home">
  <button type="submit" onClick={post} className='text-white bg-[#818484] flex justify-center items-center hover:bg-black rounded-3xl w-[40vh] p-3 text-xl '>التالي</button>
      </Link>
    </div>
   </div>
</div>
</div>



</div>
  )
}

export default Signup
