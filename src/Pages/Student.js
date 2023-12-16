import React, { useState } from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faUser,faCircleInfo, faArrowRightFromBracket, faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import '../Styles/Student.css'
import Axios from 'axios'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'

function Student() {
  const location=useLocation()
  const navigate=useNavigate()
  const [resData,setResData]=useState([])
  const [loading,setLoading]=useState(false)

  const handleView=()=>{
    //console.log("student_id: ",location.state._id)

    const obj={student_id:location.state.student_id}
    //console.log("obj",obj)
    const url = "https://orange-ring-cello.glitch.me/student/specific-student-list";
    Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
              //alert("data retrieved successfully")
              //console.log("error")
              setResData(res.data[0])
              setLoading(true)
            }
            else if(res.status===204){
                //console.log("status code called")
                setResData(res.data)
                document.getElementById("error_code").innerHTML="Empty list"
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=> document.getElementById("error_code").innerHTML=err);


      if(loading)
      {
        navigate('/student/view-student-marks',{state:{_id:resData["_id"]}})
      }
        
  }

  const goToClassSchedule=()=>{
    //console.log("student_id: ",location.state._id)

    const obj={student_id:location.state.student_id}
    //console.log("obj",obj)
    const url = "https://orange-ring-cello.glitch.me/student/specific-student-list";
    Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
              //alert("data retrieved successfully")
              //console.log("error")
              setResData(res.data[0])
              setLoading(true)
            }
            else if(res.status===204){
                //console.log("status code called")
                setResData(res.data)
                document.getElementById("error_code").innerHTML="Empty list"
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=> document.getElementById("error_code").innerHTML=err);


      if(loading)
      {
        navigate('/class/view-schedule',{state:{class_id:resData["class_id"]}})
      }

  }

  const goToHelp=()=>{
   // console.log(location.state)

    navigate('/help',
    {
      state:
      {
        username:location.state.username
        }
    
    }
    )
  }

  const goToStudent=()=>{
    //console.log(location.state)

    navigate('/student/student_profile',
    {
      state:
      {_id: location.state._id,
        username:location.state.username,
        student_id:location.state.student_id}
    }
    )
  }

  return (

    <div>
        <div className='dropdown'>
          <p className='user-name'>{location.state.username} (student)
            <div className='dropdown-content'>
              <Link to='/loginpage'><button className='btn btn-sm btn-success'>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
            </div>
          </p>
        </div>

        <div className='row '>  

          <div className='sidebar col-1'>

          <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToStudent}>
          <FontAwesomeIcon className='stuicon profile' icon={faUser} /><span className='sidebar-text'>Profile</span><br/>
          </button>

          <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToClassSchedule}>
          <FontAwesomeIcon className='stuicon profile' icon={faCalendarDays} /><span className='sidebar-text'>Schedule</span><br/>
          </button>


          {/*  <Link to='/student/help' className='links' style={{textDecoration:'none'}}>
              <FontAwesomeIcon className='stuicon time-table' icon={faClipboardList} /><span className='sidebar-text'>Schedule</span><br />
              </Link> */}

            

            <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={handleView}>
          <FontAwesomeIcon className='stuicon profile' icon={faIdCard} /><span className='sidebar-text'>Marks</span><br/>
          </button>

          <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToHelp}>
            <FontAwesomeIcon className='stuicon help' icon={faCircleInfo} /><span className='sidebar-text'>Help</span>
            </button>
          </div>
          
          <div className='main-content col ms-3 mt-2'>
            <div className='contents'>
              <button className='btn btn-secondary text-light m-3'>Spotlight</button>
              <ul>
                <li>
                  <button className='btn btn-sm btn-primary'>Academics</button>
                  <ul>
                    <li className='mt-2 mb-1'>
                    <FontAwesomeIcon icon={faEnvira} className='me-2'/>Marks and Grade are out for Academics year 2022-2023 for classes 6 to 10.
                    </li>
                    <li className='mb-1'>
                    <FontAwesomeIcon icon={faEnvira} className='me-2' />Class Schedule is  out for Academics year 2023-2024 classes 1-5.
                    </li>
                    <li className='mb-4'>
                    <FontAwesomeIcon icon={faEnvira} className='me-2' />Fee Payment for Academics year 2023-2024 is extended upto 25/07/2023.
                    </li>
                  </ul>
                </li>
                <li>
                  <button className='btn btn-sm btn-primary'>Others</button>
                  <ul>
                    <li className='mt-2 mb-1'>
                      <FontAwesomeIcon icon={faEnvira} className='me-2' />17/06/2023 is declared as Holiday due to Heavy Rain.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEnvira} className='me-2' />Circular is out for Inaugration of E-Block (new building).
                    </li>
                  </ul>
                </li>
              </ul>
             </div>
          </div>
        </div>
        
        

    </div>
  )
}

export default Student