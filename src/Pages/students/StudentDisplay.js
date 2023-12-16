import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEye } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan,faPenToSquare } from "@fortawesome/free-solid-svg-icons"

function StudentDisplay(props){

    const navigate=useNavigate()


    const handleView=()=>{
        navigate('/student/view-student',{state:{_id:props._id}})
    }

    const handleEdit=()=>{
        navigate('/student/edit-student',{state:{_id:props._id}})
    }

    const handleDelete=()=>{
        navigate('/student/delete-student',{state:{_id:props._id}})
    }



    return(
        <tr>
           
            <td style={{textAlign:"center", width:"20px"}}>{props.sno}</td>
            <td style={{textAlign:"center"}}>{props.student_id}</td>
            <td style={{textAlign:"center"}}>{props.name}</td>
            <td style={{textAlign:"center"}}>{props.class_id.class+" - "+props.class_id.section}</td>


            <td style={{textAlign:"center"}}>
                <button type="button" className="btn btn-sm btn-primary" onClick={handleView}>View <FontAwesomeIcon className="ms-2" icon={faEye} size="sm"/></button>
            </td>
            <td style={{textAlign:"center"}}>
                <button type="button" className="btn btn-sm btn-success" onClick={handleEdit}>Edit<FontAwesomeIcon className="ms-2" icon={faPenToSquare} size="sm"/></button>
            </td>
            <td style={{textAlign:"center"}}>
                <button type="button" className="btn btn-sm btn-danger" onClick={handleDelete}>Delete<FontAwesomeIcon className="ms-2" icon={faTrashCan} size="sm"/></button>
            </td>
        </tr>
    )
}

export default StudentDisplay