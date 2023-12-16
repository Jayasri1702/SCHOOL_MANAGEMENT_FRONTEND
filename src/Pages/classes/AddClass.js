import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import CloseButton from "../../Components/CloseButton"

function AddClass(){

    var schedule=[]
    var days=["Monday","Tuesday","Wednesday","Thursday","Saturday"]
    for(let i=0;i<days.length;i++){
        schedule.push(
            <tr>
                    <td>{days[i]}</td>
                    <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[i]+"_8_to_9_am"} placeholder="subject-1"/>}</td>
                    <td>{<input style={{width:"5.5em" , border:"none"}} type="text" id={days[i]+"_9_to_10_am"} placeholder="subject-2"/>}</td>
                    <td>{<input style={{width:"5.5em" , border:"none"}} type="text" id={days[i]+"_10_to_11_am"} placeholder="subject-3"/>}</td>
                    <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[i]+"_11_to_12_pm"} placeholder="subject-4"/>}</td>
                    <td>{<input style={{width:"5em", border:"none",textAlign:"center"}} type="text" id={days[i]+"_12_to_1_pm"} defaultValue="Lunch" disabled/>}</td>
                    <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[i]+"_1_to_2_pm"} placeholder="subject-5"/>}</td>
                    <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[i]+"_2_to_3_pm"} placeholder="subject-6"/>}</td>
                    <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[i]+"_3_to_4_pm"} placeholder="subject-7"/>}</td>
                    <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[i]+"_4_to_5_pm"} placeholder="subject-8"/>}</td>
            </tr>
        )
    }


    const navigate=useNavigate()
    const [resData,setResData]=useState([])

    const handleReload=()=>{
        navigate(0)
    }

    const handlegoBack=()=>{
        navigate(-1)
    }

    const handleSubmit=()=>{
        
       

        let class_no=document.getElementById("class").value

        let section;
        var e = document.getElementById("section");
        section = e.value;

        let subject1=document.getElementById("subject1").value
        let subject2=document.getElementById("subject2").value
        let subject3=document.getElementById("subject3").value
        let subject4=document.getElementById("subject4").value
        let subject5=document.getElementById("subject5").value

       

        var schedule={}

        for(let i=0;i<days.length;i++){
            schedule[days[i]]={

                _8_to_9_am: document.getElementById(days[i]+"_8_to_9_am").value,
                _9_to_10_am: document.getElementById(days[i]+"_9_to_10_am").value,
                _10_to_11_am: document.getElementById(days[i]+"_10_to_11_am").value,
                _11_to_12_pm: document.getElementById(days[i]+"_11_to_12_pm").value,
                _12_to_1_pm: document.getElementById(days[i]+"_12_to_1_pm").value,
                _1_to_2_pm: document.getElementById(days[i]+"_1_to_2_pm").value,
                _2_to_3_pm: document.getElementById(days[i]+"_2_to_3_pm").value,
                _3_to_4_pm: document.getElementById(days[i]+"_3_to_4_pm").value,
                _4_to_5_pm: document.getElementById(days[i]+"_4_to_5_pm").value
            }
        }

        var obj={
            class_id:{class:class_no,section:section},
            subjects:[subject1,subject2,subject3,subject4,subject5],
            schedule:schedule
        }

        const url="https://orange-ring-cello.glitch.me/class/create-class"
        
        Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
                alert("data added successfully")
            }
            else if(res.status===222){
                alert("class already exists")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }

    



    return(
        <div style={{width:"85%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton />
        <h3 class="text-center mb-4 mt-2 text-decoration-underline">ADD CLASS DETAILS</h3>
        <div id="add_class_form" style={{width:"70%",marginLeft:"auto",marginRight:"auto"}} class="form row ">

        <div class="col-sm-2 "><b>Class:</b></div> 
        <div class="col-sm-12"><input id="class" class="w-100" type="number" placeholder="Enter Class Number"/></div><br /><br />

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

        <div class="col-sm-2 "><b>Subject 1:</b></div> 
        <div class="col-sm-12"><input id="subject1" class="w-100" type="text" placeholder="Enter Subject 1" required/></div><br /><br />

        <div class="col-sm-2 "><b>Subject 2:</b></div> 
        <div class="col-sm-12"><input id="subject2" class="w-100" type="text" placeholder="Enter Subject 2" required/></div><br /><br />

        <div class="col-sm-2 "><b>Subject 3:</b></div> 
        <div class="col-sm-12"><input id="subject3" class="w-100" type="text" placeholder="Enter Subject 3" required/></div><br /><br />

        <div class="col-sm-2 "><b>Subject 4:</b></div> 
        <div class="col-sm-12"><input id="subject4" class="w-100" type="text" placeholder="Enter Subject 4" required/></div><br /><br />

        <div class="col-sm-2 "><b>Subject 5:</b></div> 
        <div class="col-sm-12"><input id="subject5" class="w-100" type="text" placeholder="Enter Subject 5" required/></div><br /><br />
        </div>

        

        <h3 class="text-center mb-4 mt-5 text-decoration-underline">Time Table</h3>
        <div className="tt">
       
        <table className="table table-responsive text-center" style={{marginLeft:"auto",marginRight:"auto",border:"1px solid black"}}>
                <tr>
                <th>Day</th>
                <th>8:00 AM <br/> 8:50 AM</th>
                <th>9:00 AM <br/> 9:50 AM</th>
                <th>10:00 AM <br/> 10:50 AM</th>
                <th>11:00 AM <br/> 11:50 AM</th>
                <th>12:00 PM <br/> 12:50 AM</th>
                <th>1:00 PM <br/> 1:50 AM</th>
                <th>2:00 PM <br/> 2:50 AM</th>
                <th>3:00 PM <br/> 3:50 AM</th>
                <th>4:00 PM <br/> 4:50 AM</th>  
                </tr>
                {schedule}
            </table>
        </div>

        <div class="row">
        <div class="col-sm-5"><button class="btn btn-sm btn-primary" type="button" onClick={handleSubmit}>Add Class</button></div>
        <div class="col text-end">
                <button class="btn btn-sm btn-secondary " type="button" onClick={handleReload}>Reset</button>
                {/* <button class="btn btn-sm btn-danger ms-5" type="button" onClick={handlegoBack}>Cancel</button> */}
        </div><br /><br />
        </div> 
 
        
    
     
    </div>
    )


}

export default AddClass