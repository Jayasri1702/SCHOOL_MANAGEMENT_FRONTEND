
import {useNavigate } from "react-router-dom"
import { FieldNames } from "./FieldNames"
import CryptoJS from "crypto-js"
import CloseButton from "./CloseButton"
function DataDisplay(props){
    const navigate=useNavigate()

   

   const handleSubmit=()=>{
      
        props.getState(props.data)
        navigate(-1)
   }

   const goBack=()=>{
    navigate(-1)
   }


    var content=[]
    var keys = Object.keys(props.data);
   

    for(let i=0;i<keys.length;i++){

        if(keys[i]==="_id")
        {
            continue
        }

        if(keys[i]==="__v"){
            continue
        }

        if(keys[i]==="schedule"){

            if(props.disable==="true"){
                let schedule=[]

            var days=["mon","tue","wed","thr","fri"]
            var day_names=["Monday","Tuesday","Wednesday","Thursday","Saturday"]

            for(let j=0;j<days.length;j++){
                schedule.push(
                    <tr >
                            <td><b>{day_names[j]}</b></td>
                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_8_to_9_am"} 
                                defaultValue={props.data[keys[i]][days[j]]["_8_to_9_am"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_8_to_9_am"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_9_to_10_am"} 
                                defaultValue={props.data[keys[i]][days[j]]["_9_to_10_am"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_9_to_10_am"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_10_to_11_am"} 
                                defaultValue={props.data[keys[i]][days[j]]["_10_to_11_am"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_10_to_11_am"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_11_to_12_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_11_to_12_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_11_to_12_pm"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_12_to_1_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_12_to_1_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_12_to_1_pm"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_1_to_2_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_1_to_2_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_1_to_2_pm"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_2_to_3_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_2_to_3_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_2_to_3_pm"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_3_to_4_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_3_to_4_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_3_to_4_pm"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_4_to_5_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_4_to_5_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_4_to_5_pm"]=e.target.value}} disabled/>}
                            </td>
                     
                        </tr>
                )
            }

            content.push(
                <div>
        <h3 class="text-center mb-4 mt-5 text-decoration-underline">Time Table</h3>
        <table className="table table-responsive text-center m-0" style={{marginLeft:"auto",marginRight:"auto",border:"1px solid black"}}>

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
            )
            }
            else{
                let schedule=[]

            var days=["mon","tue","wed","thr","fri"]
            var day_names=["Monday","Tuesday","Wednesday","Thursday","Saturday"]
            for(let j=0;j<days.length;j++){
                schedule.push(
                    <tr >
                            <td><b>{day_names[j]}</b></td>
                            <td>{<input  style={{width:"5.5em"}} type="text" id={days[j]+"_8_to_9_am"} 
                                defaultValue={props.data[keys[i]][days[j]]["_8_to_9_am"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_8_to_9_am"]=e.target.value}} />}
                            </td>

                            <td>{<input  style={{width:"5.5em"}} type="text" id={days[j]+"_9_to_10_am"} 
                                defaultValue={props.data[keys[i]][days[j]]["_9_to_10_am"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_9_to_10_am"]=e.target.value}} />}
                            </td>

                            <td>{<input  style={{width:"5.5em"}} type="text" id={days[j]+"_10_to_11_am"} 
                                defaultValue={props.data[keys[i]][days[j]]["_10_to_11_am"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_10_to_11_am"]=e.target.value}} />}
                            </td>

                            <td>{<input  style={{width:"5.5em"}} type="text" id={days[j]+"_11_to_12_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_11_to_12_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_11_to_12_pm"]=e.target.value}} />}
                            </td>

                            <td>{<input  style={{width:"5.5em", border:"none"}} type="text" id={days[j]+"_12_to_1_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_12_to_1_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_12_to_1_pm"]=e.target.value}} disabled/>}
                            </td>

                            <td>{<input style={{width:"5.5em"}} type="text" id={days[j]+"_1_to_2_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_1_to_2_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_1_to_2_pm"]=e.target.value}} />}
                            </td>

                            <td>{<input style={{width:"5.5em"}} type="text" id={days[j]+"_2_to_3_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_2_to_3_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_2_to_3_pm"]=e.target.value}} />}
                            </td>

                            <td>{<input  style={{width:"5.5em"}} type="text" id={days[j]+"_3_to_4_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_3_to_4_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_3_to_4_pm"]=e.target.value}} />}
                            </td>

                            <td>{<input  style={{width:"5.5em"}} type="text" id={days[j]+"_4_to_5_pm"} 
                                defaultValue={props.data[keys[i]][days[j]]["_4_to_5_pm"]}
                                onChange={(e)=>{props.data[keys[i]][days[j]]["_4_to_5_pm"]=e.target.value}} />}
                            </td>
                     
                        </tr>
                )
            }

            content.push(
                <div>
                <h3 class="text-center mb-4 mt-5 text-decoration-underline">Time Table</h3>
                <table className="table table-responsive text-center m-0" style={{marginLeft:"auto",marginRight:"auto",border:"1px solid black"}}>
        
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
            )
            }

            
        }

        else if(typeof(props.data[keys[i]])==='object' ||typeof(props.data[keys[i]])==='json'){
            content.push(<tr >
               
                <td  style={{width:"20px",fontWeight:"bold" }} colSpan="2" className="bg-secondary text-white text-uppercase pt-2">{FieldNames(keys[i])}</td>
                </tr>
               
                )
                content.push(
                    <tr >
                        
                        <DataDisplay data={props.data[keys[i]]} disable={props.disable}/>
                    </tr>
                )
        }
        /*else if(typeof(props.data[keys[i]]=='array')){
            


            content.push(
                <tr>
                    <td rowSpan={props.data[keys[i]].length}></td>
                </tr>
            )
        }*/
        else if(keys[i]==="password"){
            const iv = { words: [ 0, 0, 0, 0 ], sigBytes: 16 }
            if(props.disable==="true"){
                content.push(
                    <tr>
                        <td  style={{width:"20px",fontWeight:"bold" }}>{FieldNames(keys[i])}</td>
                        <td>
                        <input style={{border:"none"}} type="text" defaultValue=
                        {
                            CryptoJS.DES.decrypt(props.data[keys[i]], CryptoJS.enc.Utf8.parse('9uvjiowejiasdvd'), { iv }).toString(CryptoJS.enc.Utf8)
                        }
                        
                        onChange={(e)=>{
                            props.data[keys[i]]= CryptoJS.DES.encrypt(e.target.value, CryptoJS.enc.Utf8.parse('9uvjiowejiasdvd'), { iv }).toString()
                            
                            }} disabled/>
                        </td>
                    </tr>
                )
            }
            else{
                content.push(
                    <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>{FieldNames(keys[i])}</td>
                    <td>
                    <input style={{width:"100%"}} type="text" defaultValue=
                    {
                        CryptoJS.DES.decrypt(props.data[keys[i]], CryptoJS.enc.Utf8.parse('9uvjiowejiasdvd'), { iv }).toString(CryptoJS.enc.Utf8)
                    }
                    
                    onChange={(e)=>{
                        props.data[keys[i]]= CryptoJS.DES.encrypt(e.target.value, CryptoJS.enc.Utf8.parse('9uvjiowejiasdvd'), { iv }).toString()
                        
                        }} />
                    </td>
                </tr>
                )
            }
        }
        else{    
            
            let input_type=typeof(props.data[keys[i]])

            if(input_type==="string"){
                input_type="text"
            }
            else{
                input_type="number"
            }

            if(props.disable==="true"){
                content.push(
                    <tr>
                        <td style={{width:"32%",fontWeight:"bold" }}>{FieldNames(keys[i])}</td>
                        <td>
                        <input  style={{border:"none",width:"100%"}} type={input_type} defaultValue={props.data[keys[i]]} onChange={(e)=>{props.data[keys[i]]=e.target.value}} disabled/>
                        </td>
                    </tr>
                )
            }
            else{
                content.push(
                    <tr>
                        <td style={{width:"20px",fontWeight:"bold" }}>{FieldNames(keys[i])}</td>
                        <td>
                        <input style={{width:"100%"}} type={input_type} defaultValue={props.data[keys[i]]} onChange={(e)=>{props.data[keys[i]]=e.target.value}} />
                        </td>
                    </tr>
                )
            }
            
        }
    }

    var option=props.option
    var submitContent=[]
    if(option==="edit"){
        submitContent.push(
           <div>
                <p className="text-center" ><b>Update data?</b></p>
                <p className="text-center">
                    <button  type="button" className="btn  btn-success me-2" onClick={handleSubmit}>Yes</button>
                    <button  type="button" className="btn  btn-danger" onClick={goBack}>No</button>
                </p>
           </div>
        )
    }
    else if(option==="delete"){


        submitContent.push(
            <div>
            <p className="text-center" ><b>Delete data?</b></p>
                <p className="text-center">
                    <button  type="button" className="btn  btn-success me-2" onClick={handleSubmit}>Yes</button>
                    <button  type="button" className="btn  btn-danger" onClick={goBack}>No</button>
                </p>
       </div>
         )

       
    }
    else{
        submitContent=''
    }


    

    


   

    return(
        <div style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton />
        <table id="list-view-tables"  className="table col-sm my-4" style={{border:"1px solid black" }}>
            {content}
        </table>
        {submitContent}
        </div>
    )
}

export default DataDisplay