import { useLocation,useNavigate } from "react-router-dom"
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import CloseButton from "./CloseButton"

function Help(){
    
    const navigate=useNavigate()
    const location=useLocation()
    const [resData,setResData]=useState([])


    const handleReload=()=>{
        navigate(0)
    }

    const handlegoBack=()=>{
        navigate(-1)
    }

    const handleSubmit=()=>{

       alert("request sent successfully!")

    }
    



    return(
    <div style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}>
        <CloseButton />
        <h3 class="text-center mb-4 mt-2 text-decoration-underline">HELP REQUEST FORM</h3>
    <div id="add_student_form" class="form row ">
        <div class="col-sm-2 "><b> Username:</b></div> 
        <div class="col-sm-12"><input id="username" class="w-100" type="text" 
        defaultValue={location.state.username}        
        placeholder="Enter Username" disabled/></div><br /><br />
        <div class="col-sm-2 "><b> Subject:</b></div> 
        <div class="col-sm-12"><input id="subject" class="w-100" type="text" placeholder="Subject Title" /></div><br /><br />


        <div class="col-sm-4 "><b>Request Content:</b></div> 
        <div class="col-sm-12 mb-4">
            <textarea  id="content" class="w-100" rows="5" cols="10" placeholder="Enter Request Here..."></textarea>
        </div><br />

        <div class="col-5"><button class="btn btn-sm btn-primary" type="button" onClick={handleSubmit}>Send 
        <FontAwesomeIcon icon={faPaperPlane} className="ms-2" size="sm" bounce/>
        </button></div>
        <div class="col text-end">
                <button class="btn btn-sm btn-secondary " type="button" onClick={handleReload}>Reset</button>
                {/* <button class="btn btn-sm btn-danger" type="button" onClick={handlegoBack}>Cancel</button> */}
        </div><br /><br />

    </div>
     
    </div>
    )




}


export default Help