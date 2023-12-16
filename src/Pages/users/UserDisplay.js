import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEye } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan,faPenToSquare } from "@fortawesome/free-solid-svg-icons"


function UserDisplay(props){

    const navigate=useNavigate()

    const handleView=()=>{
        navigate('/user/view-user',{state:{_id:props._id}})
    }

    const handleEdit=()=>{
        navigate('/user/edit-user',{state:{_id:props._id}})
    }

    const handleDelete=()=>{
        navigate('/user/delete-user',{state:{_id:props._id}})
    }



    return(
        <tr>
            <td style={{textAlign:"center", width:"20px"}}>{props.sno}</td>
            <td style={{textAlign:"center"}}>{props.username}</td>
            <td style={{textAlign:"center"}}>{props.user_type}</td>
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

export default UserDisplay