import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-regular-svg-icons"

function StudentClassDisplay(props){

    const navigate=useNavigate()


    const handleView=()=>{
        navigate('/student/view-student',{state:{_id:props._id}})
    }

    return(
        <tr>
            <td>{props.sno}</td>
            <td>{props.student_id}</td>
            <td>{props.name}</td>
            <td>{props.class_id.class+" - "+props.class_id.section}</td>
            <td className="text-center">
                <button type="button" className="btn btn-sm btn-primary" onClick={handleView}>View <FontAwesomeIcon className="ms-2" 
                icon={faEye} size="sm"/></button> </td>
        </tr>
    )
}

export default StudentClassDisplay