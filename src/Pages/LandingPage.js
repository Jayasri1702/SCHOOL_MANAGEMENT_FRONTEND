import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/LandingPage.css'

import React from 'react'

function LandingPage() {
  return (
    <div ><Footer />
      {/* <Header/> */}
    <div className='landing-page row d-flex justify-content-center'>
        
        
        <div class="card col-sm "  style={{maxWidth:"25vh" ,borderBottom:'3px solid blue'}}>
          <Link to='/loginpage ' style={{textDecoration:'none'}}>
          <div class="card-body">
            <h5 class="card-title text-primary">Student</h5> 
            <button className='enterbtn btn btn-primary'><FontAwesomeIcon icon={faRightToBracket} /></button>
          </div>
          </Link>
        </div>

        <div class=" card col-sm"  style={{maxWidth:"25vh",borderBottom:'3px solid rgb(255, 119, 0)'}}>
          <Link to='/loginpage ' style={{textDecoration:'none'}}>
          <div class="card-body">
            <h5 class="card-title" style={{color:'rgb(255, 119, 0)'}}>Teacher</h5> 
            <button className='enterbtn' style={{backgroundColor:'rgb(255, 119, 0)'}}><FontAwesomeIcon icon={faRightToBracket} /></button>
          </div>
          </Link>
        </div>

        <div class="card col-sm"  style={{maxWidth:"25vh",borderBottom:'3px solid green'}}>
          <Link to='/loginpage' style={{textDecoration:'none'}}>
          <div class="card-body">
            <h5 class="card-title text-success">Admin</h5> 
            <button className='enterbtn btn btn-success'><FontAwesomeIcon icon={faRightToBracket} /></button>
          </div>
          </Link>
        </div>



        <div class="aluminibox card col-sm"  style={{maxWidth:"25vh" ,borderBottom:'3px solid rgba(0, 183, 255, 0.938)'}}>
          <Link to='/loginpage ' style={{textDecoration:'none'}}>
          <div class="card-body"  >
            <h5 class="card-title" style={{color:'rgba(0, 183, 255, 0.938)'}}>Parent</h5> 
            <button className='enterbtn' style={{backgroundColor:'rgba(0, 183, 255, 0.938)'}}><FontAwesomeIcon icon={faRightToBracket} /></button>
          </div>
          </Link>
        </div>
    </div>

    
    </div>
  )
}

export default LandingPage