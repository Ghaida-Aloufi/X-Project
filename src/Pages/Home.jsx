import React from 'react'
import Leftside from '../Component/Leftside';
import Rightside from '../Component/rightside';
import Center from '../Component/Center';
import Center2 from '../Component/Center2';

function Home() {
  return (
 
   <div className='flex'>
  <Leftside/> 
    <Center/>
    <Rightside/>
    </div>

  )
}

export default Home
