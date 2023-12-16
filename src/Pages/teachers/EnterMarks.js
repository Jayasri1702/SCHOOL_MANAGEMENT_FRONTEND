import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState,useEffect } from "react";
import CloseButton from "../../Components/CloseButton";


function EnterMarks(){

    const location=useLocation()
    const navigate=useNavigate()

    const [resData,setResData]=useState([])
    const [loading,setLoading]=useState(false)
    const [uploading,setUploading]=useState(0)

    var subjects=[]
    var studentmarks=[]
    var student_data=[]


    const handleReload=()=>{
        navigate(0)
    }

    const handlegoBack=()=>{
        navigate(-1)
    }

    useEffect(()=>{
        const obj={class_id:location.state.class_id}
        const url = "https://orange-ring-cello.glitch.me/student/specific-student-list";

        Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
                setLoading(true)
            }
            else if(res.status===204){
              
                setResData(res.data)
                document.getElementById("error_code").innerHTML="Empty list"
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=> document.getElementById("error_code").innerHTML=err);
    },[])

    if(loading){
        let subject_names=Object.keys(resData[0].marks)

        for(let i=0;i<subject_names.length;i++){
            subjects.push(
                <th>
                    {subject_names[i]}
                </th>
            )
        }

        student_data=resData
        for(let i=0;i<Object.keys(student_data).length;i++){

            studentmarks.push(
                <tr>
                    <td>{i+1}</td>
                    <td>
                        {student_data[i].student_id}
                    </td>

                    <td>
                        <input type="number" defaultValue={student_data[i].marks[subject_names[0]]} 
                        onChange={(e)=>{student_data[i].marks[subject_names[0]]=parseFloat(e.target.value)}}/>
                    </td>

                    <td>
                        <input type="number" defaultValue={student_data[i].marks[subject_names[1]]} 
                        onChange={(e)=>{student_data[i].marks[subject_names[1]]=parseFloat(e.target.value)}}/>
                    </td>

                    <td>
                        <input type="number" defaultValue={student_data[i].marks[subject_names[2]]} 
                        onChange={(e)=>{student_data[i].marks[subject_names[2]]=parseFloat(e.target.value)}}/>
                    </td>
                    <td>
                        <input type="number" defaultValue={student_data[i].marks[subject_names[3]]} 
                        onChange={(e)=>{student_data[i].marks[subject_names[3]]=parseFloat(e.target.value)}}/>
                    </td>
                    <td>
                        <input type="number" defaultValue={student_data[i].marks[subject_names[4]]} 
                        onChange={(e)=>{student_data[i].marks[subject_names[4]]=parseFloat(e.target.value)}}/>
                    </td>
                    
                </tr>
            )
           
        }


    }

    const handleSubmit=()=>{
        

        let subject_names=Object.keys(resData[0].marks)
        




        for(let i=0;i<Object.keys(student_data).length;i++){

            let avg=0
            let grade='-'
            for(let j=0;j<subject_names.length;j++){
                avg+=student_data[i].marks[subject_names[j]]
            }
            
            avg=avg/5
           
            if(avg>90){grade='S'}
            else if(avg>80){grade='A'}
            else if(avg>70){grade='B'}
            else if(avg>60){grade='C'}
            else if(avg>50){grade='D'}
            else if(avg>40){grade='E'}
            else if(avg===0){grade='-'}
            else{grade='F'}

            student_data[i].grade=grade

            const url = "https://orange-ring-cello.glitch.me/student/update-student/"+student_data[i]._id;
            const obj={marks:student_data[i].marks,grade:grade}
           
            Axios.put(url,obj)
            .then((res)=>{
                if(res.status===200)
                {
                    setUploading(uploading+1)
                    
                }
                else if(res.status===204){
                    alert("Error"+res.data[1])
                }
                else{
                    Promise.reject();
                }
            })
            .catch((err)=>alert(err))


        }

       

       
            alert("Data successfully updated")
            navigate(0)
        

       
    }


    return(
        <div style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
        <CloseButton />
        <h3 class="text-center mb-4 mt-5 text-decoration-underline">ENTER MARKS</h3>

            <table id="list-view-tables"  className="table table-responsive text-center" style={{border:"1px solid black" }}>
                <tr className="text-center" >
                    <th style={{padding:"10px 0px"}}>S.No.</th>
                    <th>Student ID</th>
                    {subjects}
                </tr>

                {studentmarks}

            </table>
            <p id="error_code"></p>
            <div class="row">
                <div class="col-sm-5"><button class="btn btn-sm btn-primary" type="button" onClick={handleSubmit}>Add Marks</button></div>
                <div class="col text-end">
                        <button class="btn btn-sm btn-secondary " type="button" onClick={handleReload}>Reset</button>
                        {/* <button class="btn btn-sm btn-danger ms-5" type="button" onClick={handlegoBack}>Cancel</button> */}
                </div><br /><br />
            </div> 
        </div>
    )


}


export default EnterMarks