import { useEffect } from "react"
import Axios from "axios";

function StudentMark(){


    useEffect(()=>{
        const id=location.state._id
        const url = "https://orange-ring-cello.glitch.me/class/update-class/"+id;

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

    return(
        <table>
            <tr>
            <th>Student Id</th>
            {subjects}
            </tr>
        </table>
    )
}


export default StudentMark