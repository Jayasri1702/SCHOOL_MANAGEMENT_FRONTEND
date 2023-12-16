import { useEffect,useState } from "react";
import ClassDisplay from "./ClassDisplay";
import Axios from "axios";
import CloseButton from "../../Components/CloseButton";

function ClassList(){

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const fields='class_id'
        const url = "https://orange-ring-cello.glitch.me/class/restricted-class-list/"+fields;

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


    var userlist=[]
    for (let i=0;i<resData.length;i++){
        userlist.push(<ClassDisplay sno={i+1} class_id={resData[i]['class_id']} _id={resData[i]['_id']} />)
    }

    return(
        <div style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton/>
            <table id="list-view-tables" className="table col-sm mt-5" style={{border:"1px solid black" }}>
                <thead>
                <tr className="text-center">
                    <th>S.No</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th colspan="3">Actions</th>
                </tr>
                </thead>
                <tbody>
                {userlist}

                </tbody>
            </table>
        </div>
    )

}


export default ClassList