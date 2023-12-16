import { useEffect,useState } from "react";
import StudentMarkDisplay from "./StudentMarkDisplay";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import CloseButton from "../../Components/CloseButton";

function StudentParentMarkList(){
    const location=useLocation()

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const obj={student_id:{$in:location.state.student_ids}}
        const url = "https://orange-ring-cello.glitch.me/student/specific-student-list";

        Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
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

   
    var userlist=[]
    for (let i=0;i<resData.length;i++){
        userlist.push(<StudentMarkDisplay sno={i+1} student_id={resData[i]['student_id']} class_id={resData[i]['class_id']} _id={resData[i]['_id']} 
        name={resData[i]['name']} grade={resData[i]['grade']}/>)
    }

    return(
        <div style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton/>
        <table id="list-view-tables"  className="table col-sm mt-5" style={{border:"1px solid black" }}>
            <thead>
            <tr className="text-center">
                <th>S.No</th>
                <th>Student Id</th>
                <th>Name</th>
                <th>Class Id</th>
                <th>Grade</th>
        
                <th colspan="1">Action</th>
            </tr>
            </thead>
            <tbody>
            {userlist}

            </tbody>
        </table>
        <p id="error_code"></p>

        </div>
    )

}


export default StudentParentMarkList