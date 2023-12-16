import React from 'react'
import { Link } from 'react-router-dom'

function FormCredential(props) {

    let returnData=()=>{
        var uname=document.getElementById("uname").value 
        var pwd=document.getElementById("pwd").value 
        

        props.getState([uname,pwd])

        
    }


  return (
    <div></div>
  )
}

export default FormCredential