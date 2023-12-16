import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CloseButton from "../../Components/CloseButton"


function AddTeacher(){
    const navigate=useNavigate()
    const [resData,setResData]=useState([])

    const handleReload=()=>{
        navigate(0)
    }

    const handlegoBack=()=>{
        navigate(-1)
    }

    const handleSubmit=()=>{

        let teacher_id=document.getElementById("teacher_id").value
        let name=document.getElementById("name").value
        let age=document.getElementById("age").value

        let gender;
        var ele = document.getElementsByName('gender');
 
            for (let i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    gender=ele[i].value;
            }

        let class_no=document.getElementById("class").value

        let section;
        var e = document.getElementById("section");
        section = e.value;

        let address=document.getElementById("address").value
        let phone_no=document.getElementById("phone_no").value

        let email=document.getElementById("email").value

        //let grade=document.getElementById("grade").value
        const obj={
            teacher_id: teacher_id,
            name:name,
            age:age,
            gender:gender,

            class_id:{ 
            class:class_no,
            section:section
            },

        
            address:address,
            phone_no:phone_no,
            email:email,
            //marks: form.marks.value,

            //grade:form.grade.value

        }
       

        
        const url="https://orange-ring-cello.glitch.me/teacher/create-teacher"
        
        Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
                alert("data added successfully")
            }
            else if(res.status===204){
                alert("Error"+res.data[1])
            }
            else if(res.status===222){
                alert("teacher id already exists")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }

    return(
        <div style={{width:"60%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton />
        <h3 class="text-center mb-5 mt-2 text-decoration-underline ">ADD TEACHER DETAILS</h3>
        <div class="form row" id="add_teacher_form">
            <div class="col-sm-2 "><b> Teacher ID:</b></div> 
            <div class="col-sm-12"><input id="teacher_id" class="w-100" type="text" placeholder="Enter ID" required/></div><br /><br />
    
           

            <div class="col-sm-2 "><b>Name:</b></div> 
            <div class="col-sm-12"><input id="name" class="w-100" type="text" placeholder="Enter Name" required/></div><br /><br />
    
            <div class="col-sm-2 "><b> Age:</b></div> 
            <div class="col-sm-12"><input id="age" class="w-100" type="number" placeholder="Enter Age" required/></div><br /><br />
            
            <div class="col-sm-2"><b>Gender:</b></div>
            <div class="col-sm-12">
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male" className="ms-1">Male</label>
                <input type="radio" className="ms-4" id="female" name="gender" value="female" />
                <label for="female" className="ms-1">Female</label>
                <input type="radio"  className="ms-4" id="other" name="gender" value="other" />
                <label for="other" className="ms-1">Other</label>
            </div><br /><br />


            <div class="col-sm-2 "><b>Class:</b></div> 
        <div class="col-sm-12"><input id="class" class="w-100" type="number" placeholder="Enter Class Number" required/></div><br /><br />

        <label class="col-sm-2" for="class"><b>Section:</b></label>

        <div class="col-sm-12">
            <select class="w-100" name="section" id="section" required>
            <option value="none" selected disabled hidden place>Select an Option</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            </select>
        </div><br /><br />


            <div class="col-sm-2 "><b>Address:</b></div> 
            <div class="col-sm-12"><textarea id="address" class="w-100" rows="5" cols="10" placeholder="Enter Address" required></textarea></div><br /><br />
    
            <div class="col-sm-2 "><b>Phone:</b></div> 
            <div class="col-sm-12"><input id="phone_no" class="w-100" type="telephone" placeholder="Enter Phone Number" required/></div><br /><br />
    
            <div class="col-sm-2 "><b>Email:</b></div> 
            <div class="col-sm-12 mb-5"><input id="email" class="w-100" type="email" placeholder="Enter Email" required/></div><br /><br />
    
            {/* <div class="col-sm-2 "></div>  */}
            <div class="col-5"><button class="btn btn-sm btn-primary" type="submit" onClick={handleSubmit}>Add Teacher</button></div>
        <div class="col text-end">
                <button class="btn btn-sm btn-secondary " type="button" onClick={handleReload}>Reset</button>
                {/* <button class="btn btn-sm btn-danger" type="button" onClick={handlegoBack}>Cancel</button> */}
        </div><br /><br />
    
        </div>
    </div>
    )
}


export default AddTeacher