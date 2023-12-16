import DataDisplay from "../../Components/DataDisplay";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import Axios from "axios";


function StudentView(){

    const location=useLocation()

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const id=location.state._id
        const url = "https://orange-ring-cello.glitch.me/student/update-student/"+id;

        Axios.get(url)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
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



    const getState=(obj)=>{
        const id=location.state._id
        const url = "https://orange-ring-cello.glitch.me/student/update-student/"+id;
      
        Axios.put(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
            }
            else if(res.status===204){
                alert("Error"+res.data[1])
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
        
    alert("Data updated Successfully")
    }

    return(
        <div style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
        <h3 class="text-center mb-4 mt-2 text-decoration-underline">STUDENT PROFILE</h3>
            <DataDisplay data={resData} option={"view"} disable={"true"} getState={getState}/>

        </div>
    )

}

export default StudentView