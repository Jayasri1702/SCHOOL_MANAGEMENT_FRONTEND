import DataDisplay from "../../Components/DataDisplay";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import Axios from "axios";


function ClassDelete(){

    const location=useLocation()

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const id=location.state._id
        const url = "https://orange-ring-cello.glitch.me/class/update-class/"+id;

        Axios.get(url)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])

    const getState=(obj)=>{
       
        const delete_url="https://orange-ring-cello.glitch.me/class/delete-class/"+obj["_id"]
        Axios.delete(delete_url)
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
    

        alert("Data Deleted Successfully")
    }

    return(
        <div>
            <h1 className="text-center">Class Data</h1>
            <DataDisplay data={resData} option={"delete"} disable={"true"} getState={getState}/>

            
        </div>
    )

}

export default ClassDelete