import React from 'react'
import "./Enrolled.css"
import BackArrow from "../../images/back_arrow.svg"
 
const Enrolled = ({handelrefer}) => {
   const enrolleddata =[
    {
        "name":"Dhiraj Saxsena",
        "date":"14 Sep, 2022",
        "CountC": 6,
        "courses":["UI/UX", "Photoshop","Illustrator","Python", "Mern", "Java"],
        "referamo":185
    },
    {
        "name":"Subhash Mishra",
        "date":"15 Sep, 2022",
        "CountC": 23,
        "courses":["UI/UX", "Photoshop","Illustrator","Python", "Mern", "Java","UI/UX", "Photoshop","Illustrator","Python", "Mern", "Java"],
        "referamo":485
    },
    {
        "name":"Prafull Kumar",
        "date":"16 Sep, 2022",
        "CountC": 23,
        "courses":["UI/UX", "Photoshop","Illustrator","Python", "Mern", "Java"],
        "referamo":485
    }
]

  return (
    <div>
        <section>
            <p className='para'>UI/UX &gt;<span id='back' onClick={handelrefer}> Refer & Earn </span>&gt; Friends Referred</p>
            <div className='backlink' onClick={handelrefer}  >
                <img src={BackArrow} alt="click to go referral detail page" />
                <span >go back</span>
            </div>
            <div className='walletts'> 
                <div className='code-detail'>
                    <p>Your Referral Code </p>
                    <button >EDCHA</button>
                </div>
                <div className='balance-detail' >
                    <p className='balance-text'>wallet Balance</p>
                    <p className='balance-number' >&#8377; 500 </p>
                </div>
            </div>
        </section>
        <h1 className='headlights'>Friends who enrolled &#40;3&#41; </h1>
        <section className='friends-card' >
            {enrolleddata.map( (friend, index) => {
                const courses= friend.courses;
                return(
                    <div className='card' key={index}>
                <div className='card-detail'>
                    <p className='name'>{friend.name}</p>
                    <p className='date'>{friend.date}</p>
                </div>
                <p className='course-count'>courses Enrolled  &#40;{friend.CountC}&#41; </p>
                <div className='courses'>
                    {courses.map( (course, index)=> {
                        return(
                          <p key={index}>{course}</p>  
                        )
                    })}
                    
                </div>
                <div className='earning'>
                    <p className='amount'> Refferal Amount <span>&#8377;{friend.referamo}</span></p>
                </div>
            </div> 
                )
            })}
          
        </section>
        <p className='terms'>Terms & Conditions</p>
    </div>
  )
}

export default Enrolled