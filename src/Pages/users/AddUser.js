import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";
import Axios from "axios";
import CloseButton from "../../Components/CloseButton";
function AddUser(){
    const navigate=useNavigate()
    const [options,setOptions]=useState([])
    const [child,setChildren]=useState('')

    const [resData,setResData]=useState([])

    const handleReload=()=>{
        navigate(0)
    }

    const handlegoBack=()=>{
        navigate(-1)
    }

    const handleSubmit=()=>{
            let username=document.getElementById("username").value
            let password=document.getElementById("password").value


            const iv = { words: [ 0, 0, 0, 0 ], sigBytes: 16 }
            var ciphertext=CryptoJS.DES.encrypt(password, CryptoJS.enc.Utf8.parse('9uvjiowejiasdvd'), { iv }).toString()
         

            let user_type=document.getElementById("user_type").value


            var obj={username:username,password:ciphertext,user_type:user_type}

            if(user_type==="admin"){

            }
            else if(user_type==="student"){
                obj["student_id"]=document.getElementById("student_id").value
            }
            else if(user_type==="teacher"){
                obj["teacher_id"]=document.getElementById("teacher_id").value
                obj["class_id"]={class:document.getElementById("class").value,
                                 section:document.getElementById("section").value}
            }
            else if(user_type==="parent"){
                let noc=document.getElementById("children").value

                let student_ids=[]
                for(let i=0;i<noc;i++){
                    student_ids.push(document.getElementById("student_id"+(i+1)).value)
                }
            
                obj["student_ids"]=student_ids

            }

            const url="https://orange-ring-cello.glitch.me/user/create-user"
        
            Axios.post(url,obj)
            .then((res)=>{
                if(res.status===200)
                {
                    setResData(res.data)
                    alert("data added successfully")
                }
                else if(res.status===222){
                    alert("user already exists")
                }
                else if(res.status===204){
                    alert("Error"+res.data[1])
                }
                else{
                    Promise.reject();
                }
            })
            .catch((err)=>alert(err));

    }


    const addChild=()=>{
        let noc=document.getElementById("children").value
       
        let temp_children=[]
        for(let i=0;i<noc;i++){
            temp_children.push(
                <div>
                    <div class="col-sm-2 "><b> Student {i+1}'s ID :</b></div> 
                    <div class="col-sm-12"><input id={"student_id"+(i+1)} class="w-100" type="text" placeholder="Enter ID" required/></div><br />
                </div>
                
            )
        }
      
        setChildren(temp_children)
        
    }

    const giveOptions=()=>{
        let user_type=document.getElementById("user_type").value
     

        if(user_type==="admin"){
            setOptions([])
            setChildren("")
        }
        else if(user_type==="teacher"){
            setOptions(
                <div>
                   <div class="col-sm-2 "><b> Teacher ID:</b></div> 
                    <div class="col-sm-12"><input id="teacher_id" class="w-100" type="text" placeholder="Enter ID" required/></div><br />
                    <div class="col-sm-2 "><b>Class:</b></div> 
                    <div class="col-sm-12"><input id="class" class="w-100" type="number" placeholder="Enter Class Number" /></div><br />

            <label class="col-2" for="class"><b>Section:</b></label>

            <div class="col-12">
                <select class="w-100" name="section" id="section" required>
                <option value="none" selected disabled hidden place>Select an Option</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                </select>
            </div><br />
                </div>
            )
            setChildren("")

        }
        else if(user_type==="student"){
            
            setOptions(
                <div>
                    <div class="col-sm-2 "><b> Student ID:</b></div> 
                    <div class="col-sm-12"><input id="student_id" class="w-100" type="text" placeholder="Enter ID" required/></div><br />
                </div>
            )
            setChildren("")
            
        }

        else if(user_type==="parent"){
            
            setOptions(
                <div>
                    <div class="col-sm-2 "><b> No of children :</b></div> 
                    <div class="col-sm-12"><input id="children" class="w-100" type="number" placeholder="Enter no. of children" onChange={addChild}/>
                    
                    </div><br />
                </div>
            )

        }

       
    }

    return(
        <div>
        <CloseButton />
        <h3 class="text-center mb-5 mt-2 text-decoration-underline ">ADD USER DETAILS</h3>
        <div id="add_student_form" class="form row "  style={{width:"60%",marginLeft:"auto",marginRight:"auto"}}>

        <div class="col-sm-2 "><b> User Name:</b></div> 
        <div class="col-sm-12"><input id="username" class="w-100" type="text" placeholder="Enter username" required/></div><br /><br />

        <div class="col-sm-2 "><b>Password:</b></div> 
        <div class="col-sm-12"><input id="password" class="w-100" type="password" placeholder="Enter password" required/></div><br /><br />

        
        <div class="col-sm-2" ><b>User Type:</b></div>

        <div class="col-sm-12">
            <select class="w-100" name="section" id="user_type" onChange={giveOptions}>
            <option value="none" selected disabled hidden place>Select an Option</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            </select>
        </div><br /><br />

        {options}
        {child}   

        {/* <div class="col-2 "></div>  */}
        <div class="col-sm-4 mt-3"><button class="btn btn-sm btn-primary" type="button" onClick={handleSubmit}>Add User</button></div>
        <div class="col mt-3 text-end">
                <button class="btn btn-sm btn-secondary " type="button" onClick={handleReload}>Reset</button>
                {/* <button class="btn btn-sm btn-danger ms-5 col-sm-2" type="button" onClick={handlegoBack}>Cancel</button> */}
        </div><br /><br />
    </div>
     
    </div>
    )
}


export default AddUser