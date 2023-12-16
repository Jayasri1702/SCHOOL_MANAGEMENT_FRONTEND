import { useEffect,useState } from "react";
import UserDisplay from "./UserDisplay";
import Axios from "axios";
import CloseButton from "../../Components/CloseButton";

function UserList(){

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const fields='username user_type'
        const url = "https://orange-ring-cello.glitch.me/user/restricted-user-list/"+fields;

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
        userlist.push(<UserDisplay sno={i+1} username={resData[i]['username']} user_type={resData[i]['user_type']} _id={resData[i]['_id']} />)
    }

    return(
        <div style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton />
            <table id="list-view-tables"  className="table col-sm mt-5" style={{border:"1px solid black" }}>
                
                <thead className="thead-dark">
                <tr className="table-header">
                    <th>S.No</th>
                    <th>User Name</th>
                    <th>User Type</th>
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


export default UserList