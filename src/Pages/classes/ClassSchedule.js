import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import CloseButton from "../../Components/CloseButton";

function ClassSchedule(){
    const navigate=useNavigate()
    const location=useLocation()

    const [resData,setResData]=useState([])
    const [loading,setLoading]=useState(false)
    var schedule=[] 
    const obj={class_id:location.state.class_id}
    useEffect(()=>{
        const url = "https://orange-ring-cello.glitch.me/class/class-list";
        
        
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

    if(loading){
        
        let class_data=-1
        for(let i=0;i<Object.keys(resData).length;i++)
        {
            if(resData[i].class_id.class===obj.class_id.class && resData[i].class_id.section===obj.class_id.section){
                
                class_data=resData[i]
                break;
            }
        }
       

        let days=Object.keys(class_data.schedule)
        var day_names=["Monday","Tuesday","Wednesday","Thursday","Saturday"]


        for(let i=0;i<days.length;i++)
        {
            schedule.push(
                <tr>
                    <td className="text-center" style={{fontWeight:"bold"}}>{ day_names[i]}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._8_to_9_am}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._9_to_10_am}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._10_to_11_am}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._11_to_12_pm}</td>
                    <td style={{backgroundColor:"rgb(232, 232, 232)"}} className="text-center ">{class_data.schedule[days[i]]._12_to_1_pm}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._1_to_2_pm}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._2_to_3_pm}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._3_to_4_pm}</td>
                    <td className="text-center">{class_data.schedule[days[i]]._4_to_5_pm}</td>
                </tr>
            )
        }
        
       
    }

    return(
        <div  style={{width:"85%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton />
        <h3 class="text-center mb-4 mt-5 text-decoration-underline">TIME TABLE</h3>
        <div className="tt">
        
            <table className="table table-responsive text-center" style={{marginLeft:"auto",marginRight:"auto",border:"1px solid black"}}>
            <tr >
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
        </div>
    )
}


export default ClassSchedule