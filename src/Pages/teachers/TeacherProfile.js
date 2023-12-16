import React from 'react'
import '../students/studentStyles/StudentProfile.css'


import { useState,useEffect } from 'react'
import Axios from 'axios'
import { useLocation } from 'react-router-dom'
import CloseButton from '../../Components/CloseButton'


function TeacherProfile() {

    const location=useLocation()

    const [classData,setClassData] = useState([]);

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const obj={teacher_id:location.state.teacher_id}
     

        const url = "https://orange-ring-cello.glitch.me/teacher/specific-teacher-list"
        Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data[0])
                setClassData(res.data[0]["class_id"])
             
            }
            else if(res.status===204){
                alert("Error"+res.data[1])
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])




  return (
    <div style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}>
        <CloseButton/>
        <h3 class="text-center mb-4 mt-2 text-decoration-underline">TEACHER PROFILE</h3>
            <table id="list-view-tables"  className="table col-sm mt-5" style={{border:"1px solid black" }}>
                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Teacher Id</td>
                    <td>{resData.teacher_id}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Name</td>
                    <td>{resData.name}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Class</td>
                    <td>{classData.class}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Section</td>
                    <td>{classData.section}</td>
                </tr>
               


                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Age</td>
                    <td>{resData.age}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Gender</td>
                    <td>{resData.gender}</td>
                </tr>
                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Address</td>
                    <td>{resData.address}</td>
                </tr>
                

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Phone Number</td>
                    <td>{resData.phone_no}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Email</td>
                    <td>{resData.email}</td>
                </tr>
               
            </table>

            
    </div>
  )
}

export default TeacherProfile