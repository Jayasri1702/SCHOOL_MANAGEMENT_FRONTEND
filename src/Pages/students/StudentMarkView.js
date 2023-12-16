
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import Axios from "axios";
import CloseButton from "../../Components/CloseButton";


function StudentMarkView(){

    const location=useLocation()

    const [resData,setResData] = useState([]);
    const [loading,setLoading]=useState(false)

    var MarkData=[]

    useEffect(()=>{
        const id=location.state._id
     
        const url = "https://orange-ring-cello.glitch.me/student/update-student/"+id;

        Axios.get(url)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
                setLoading(true)
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


    if(loading)
    {
       
       
    var subjects=Object.keys(resData.marks);

    for(let i=0;i<subjects.length;i++){
        MarkData.push(
            <tr>
                <td style={{width:"20px",fontWeight:"bold" }}>{subjects[i]}</td>
                <td>{resData.marks[subjects[i]]}</td>
            </tr>
        )
    }

    MarkData.push(
        <tr style={{border:"2px solid black"}}>
            <td style={{width:"20px",fontWeight:"bold"}} className="bg-secondary-subtle">Grade</td>
            <td style={{fontWeight:"bold"}} className="bg-secondary-subtle">{resData.grade}</td>
        </tr>
    )
    }
    

    
    

    return(
        <div style={{width:"40%",marginLeft:"auto",marginRight:"auto"}}>
        <CloseButton/>
        <h3 class="text-center mb-4 mt-2 text-decoration-underline">STUDENT MARKS</h3>
            <table id="list-view-tables"  className="table col-sm mt-5" style={{border:"1px solid black" }}>
                {MarkData}
            </table>
        </div>
    )

}

export default StudentMarkView