import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faClose} from '@fortawesome/free-solid-svg-icons'



function CloseButton(){
    const navigate=useNavigate()

    const goBack=()=>{
        navigate(-1)
    }
    return(
       
        <div  className="me-3" id = "closebutton" onClick={goBack}>
            <FontAwesomeIcon style={{color:"red"}} icon={faClose} size="2x"  />
        </div>
   
    )

}

export default CloseButton