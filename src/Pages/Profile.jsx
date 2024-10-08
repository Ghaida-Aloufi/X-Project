import React from 'react'
import Leftside from '../Component/Leftside';
import Rightside from '../Component/rightside';
import Center from '../Component/Center';
import Leftside2 from '../Component/Leftside2';
import Center2 from '../Component/Center2';

function Profile() {
  return (
    <div className='flex'>
    <Leftside2/>
    <Center2/>
      <Rightside/>
      </div>
  )
}

export default Profile
