import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
import logo from '../assests/logo2.png'


function Header() {
  return (
    <div className='row container-fluid m-0 p-0'>
        <nav className='col-sm-12'>
          <input type='checkbox' id='check'></input>  
          <label for='check' className='checkbtn'>
            <FontAwesomeIcon icon={faBars} />
          </label>
          <img className='nav-img' src= {logo} width='120'></img>
          <ul>
           <li className=''></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header