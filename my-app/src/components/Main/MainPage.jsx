import React, { useState } from 'react'
import Enrolled from '../WhoEnrolled/EnrolledPage'
import Refferal from '../ReferalPage/ReferalPage'
import "./Main.css";
const Main = () => {
  const [referactive, setRefer] = useState(false)
  const handelrefer = () => {
    setRefer(true);
    console.log(referactive);
  }
  const handleenroll = () => {
    setRefer(false)
    window.scroll(0,0)
   }
  return (
    <div className='container'>
      {
        referactive 
        ? <Refferal handleenroll={handleenroll} /> 
        : <Enrolled handelrefer= {handelrefer} />
      }
    </div>
  )
}

export default Main