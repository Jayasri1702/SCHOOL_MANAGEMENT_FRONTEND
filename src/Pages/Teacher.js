import React from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faUser,faCircleInfo,faCaretDown,faCaretUp, faArrowRightFromBracket,faUsers, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'
import '../Styles/Student.css'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'



function Teacher() {
  const navigate=useNavigate()
  const location=useLocation()
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
    });
}

  const goToTeacher=()=>{
   // console.log(location.state)

    navigate('/teacher/teacher_profile',
    {
      state:
      {_id: location.state._id,
        username:location.state.username,
        teacher_id:location.state.teacher_id}
    
    }
    )
  }

  
  const goToEnterMarks=()=>{
    //console.log(location.state)

    navigate('/teacher/enter-marks',
    {
      state:
      {
        class_id:location.state.class_id
      }
    
    }
    )
  }

  const goToClassSchedule=()=>{
    
        navigate('/class/view-schedule',{state:{class_id:location.state.class_id}})
      

  }

  const goToStudentList=()=>{
    //console.log(location.state)

    navigate('/student/student-class-list',
    {
      state:
      {_id: location.state._id,
        username:location.state.username,
        teacher_id:location.state.teacher_id,
        class_id:location.state.class_id
        }
    
    }
    )
  }

  const goToHelp=()=>{
    //console.log(location.state)

    navigate('/help',
    {
      state:
      {
        username:location.state.username
        }
    
    }
    )
  }

  
  return (
    <div>
    <div className='dropdown'>
      <p className='user-name'>{location.state.username} (Teacher)
        <div className='dropdown-content'>
          <Link to='/loginpage'><button className='btn btn-sm btn-success'>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
        </div>
      </p>
    </div>

    <div className='row '>  

      <div className='sidebar col-1'>
       

        <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToTeacher}>
          <FontAwesomeIcon className='stuicon profile' icon={faUser} /><span className='sidebar-text'>Profile</span><br/>
        </button>

        <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToClassSchedule}>
          <FontAwesomeIcon className='stuicon profile' icon={faCalendarDays} /><span className='sidebar-text'>Class_Schedule</span><br/>
        </button>

        {/*<Link to='/teacher/teacher_attendance' className='links' style={{textDecoration:'none'}}>
          <FontAwesomeIcon className='stuicon attendance' icon={faCalendarCheck} /><span className='sidebar-text'>Attendance</span><br />
         </Link>*/}

        {/*<Link to='/teacher/teacher_schedule' className='links' style={{textDecoration:'none'}}>
          <FontAwesomeIcon className='stuicon time-table' icon={faClipboardList} /><span className='sidebar-text'>Class Schedule</span><br />
  </Link>*/}

        <div className='dropdown-classess'>
            <div class="dropdown1 ">
                <div className='links'>
                    <FontAwesomeIcon className='stuicon time-table' icon={faUsers} /><span class="sidebar-text dropbtn1 ">Class</span>
                    <FontAwesomeIcon className='arrow arrow-down' icon={faCaretDown} />
                    <FontAwesomeIcon className='arrow arrow-up' icon={faCaretUp} />

                </div>
            <div class="dropdown-content1">
                {/*<Link to='/student/student-class-list' style={{textDecoration:'none'}}>View Student list</Link>*/}

                <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToStudentList}>
                <FontAwesomeIcon icon={faCaretRight} style={{marginTop:"5px"}} /><span className='sidebar-text'>View Students</span><br/>
              </button>

              <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToEnterMarks}>
              <FontAwesomeIcon icon={faCaretRight} style={{marginTop:"5px"}} /><span className='sidebar-text'>Enter Marks</span><br/>
              </button>

            </div>
            <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToHelp}>
            <FontAwesomeIcon className='stuicon help' icon={faCircleInfo} /><span className='sidebar-text'>Help</span>
            </button>
            </div>
            <br />
        </div>
        

        
        {/* <Link to='/teacher/help' className='links' style={{textDecoration:'none'}}>
          <FontAwesomeIcon className='stuicon help' icon={faCircleInfo} /><span className='sidebar-text'>Help</span><br />
        </Link> */}
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
    
    {/* <p>{
    
    location.state.username
    }</p> */}

</div>
  )
}

export default Teacher