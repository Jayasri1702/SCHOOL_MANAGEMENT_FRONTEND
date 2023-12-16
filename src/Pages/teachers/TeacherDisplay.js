import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEye } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan,faPenToSquare } from "@fortawesome/free-solid-svg-icons"

function TeacherDisplay(props){

    const navigate=useNavigate()
    const handleView=()=>{
        navigate('/teacher/view-teacher',{state:{_id:props._id}})
    }

    const handleEdit=()=>{
        navigate('/teacher/edit-teacher',{state:{_id:props._id}})
    }

    const handleDelete=()=>{
        navigate('/teacher/delete-teacher',{state:{_id:props._id}})
    }



    return(
        <tr>

            <td style={{textAlign:"center", width:"20px"}}>{props.sno}</td>
            <td style={{textAlign:"center"}}>{props.teacher_id}</td>
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

export default TeacherDisplay