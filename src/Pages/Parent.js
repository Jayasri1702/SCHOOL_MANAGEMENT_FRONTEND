import React from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faCircleInfo, faArrowRightFromBracket, faUsers} from '@fortawesome/free-solid-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'

import '../Styles/Student.css'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'

function Parent() {
  const location=useLocation()
  const navigate=useNavigate()
  

  const goToHelp=()=>{
   

    navigate('/help',
    {
      state:
      {
        username:location.state.username
        }
    
    }
    )
  }

  const goToStudentList=()=>{
   

    navigate('/student/student-parent-list',
    {
      state:
      {_id: location.state._id,
        username:location.state.username,
        student_ids:location.state.student_ids
        }
    
    }
    )
  }


  const goToViewMarks=()=>{
   

    navigate('/student/student-parent-mark-list',
    {
      state:
      {_id: location.state._id,
        username:location.state.username,
        student_ids:location.state.student_ids
        }
    
    }
    )
  }

  return (


    <div>
        <div className='dropdown'>
          <p className='user-name'>{location.state.username} (Parent)
            <div className='dropdown-content'>
              <Link to='/loginpage'><button className='btn btn-sm btn-success'>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
            </div>
          </p>
        </div>

        <div className='row '>  

          <div className='sidebar col-1'>
              

            <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToStudentList}>
            <FontAwesomeIcon className='stuicon profile' icon={faUsers} /><span className='sidebar-text'>View_Students</span>
            </button>

            <button type="button" className='btn btn-default btn-block links mx-0 px-0' style={{textDecoration:'none'}} onClick={goToViewMarks}>
            <FontAwesomeIcon className='stuicon profile' icon={faIdCard} /><span className='sidebar-text'>View_Marks</span>
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

export default Parent