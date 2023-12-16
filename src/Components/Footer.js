import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import '../Styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
        <Link to='#'><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to='#'><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link to='#'><FontAwesomeIcon icon={faTwitter} /></Link>
        <Link to='#'><FontAwesomeIcon icon={faYoutube} /></Link>
    </div>
    </div>
    
  )
}

export default Footer