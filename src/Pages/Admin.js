import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faUser,faCaretDown,faCaretUp, faArrowRightFromBracket, faUserTie, faUserGraduate, faUsers,faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'

import '../Styles/Student.css'



function Admin() {

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
  return (
    <div>
    <div className='dropdown'>
      <p className='user-name'>{location.state.username} (Admin)
        <div className='dropdown-content'>
          <Link to='/loginpage'><button className='btn btn-sm btn-success'>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
        </div>
      </p>
    </div>

    <div className='row '>  

      <div className='sidebar col-1'>

        
        <div className='dropdown-classess'>
            <div class="dropdown1 ">
                <div className='links'>
                    <FontAwesomeIcon className='stuicon time-table' icon={faUser} /><span class="sidebar-text dropbtn1 ">User</span>
                    <FontAwesomeIcon className='arrow arrow-down' icon={faCaretDown} />
                    <FontAwesomeIcon className='arrow arrow-up' icon={faCaretUp} />

                </div>
            <div class="dropdown-content1">
              <Link to='/user/add-user' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />Add User</Link>
              <Link to='/user/userlist' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />View Users</Link>
            </div>
            </div>
         
        
        </div>

        <div className='dropdown-classess'>
            <div class="dropdown1 ">
                <div className='links'>
                    <FontAwesomeIcon className='stuicon time-table' icon={faUsers}  /><span class="sidebar-text dropbtn1 ">Class</span>
                    <FontAwesomeIcon className='arrow arrow-down' icon={faCaretDown} />
                    <FontAwesomeIcon className='arrow arrow-up' icon={faCaretUp} />

                </div>
            <div class="dropdown-content1">
                <Link to='/class/add-class' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />Add Class</Link>
                <Link to='/class/class-list' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />View Classes</Link>
            </div>
            </div>
        
           
        </div>

        <div className='dropdown-classess'>
            <div class="dropdown1 ">
                <div className='links'>
                    <FontAwesomeIcon className='stuicon time-table' icon={faUserGraduate} /><span class="sidebar-text dropbtn1 ">Student</span>
                    <FontAwesomeIcon className='arrow arrow-down' icon={faCaretDown} />
                    <FontAwesomeIcon className='arrow arrow-up' icon={faCaretUp} />

                </div>
            <div class="dropdown-content1">
                <Link to='/student/add-student' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />Add Student</Link>
                <Link to='/student/student-list' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />View Students</Link>
            </div>
            </div>
     
           
        </div>


        <div className='dropdown-classess'>
            <div class="dropdown1 ">
                <div className='links'>
                    <FontAwesomeIcon className='stuicon time-table' icon={faUserTie} /><span class="sidebar-text dropbtn1 ">Teacher</span>
                    <FontAwesomeIcon className='arrow arrow-down' icon={faCaretDown} />
                    <FontAwesomeIcon className='arrow arrow-up' icon={faCaretUp} />

                </div>
            <div class="dropdown-content1">
                <Link to='/teacher/add-teacher' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />Add Teacher</Link>
                <Link to='/teacher/teacher-list' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"10px"}} />View Teachers</Link>
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
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

export default Admin