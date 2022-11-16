import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AdmissionService from "../Services/AdmissionService";
import Menu from "./Menu";



const DropCourseByApplicant = () => {
    const { id } = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        AdmissionService.deleteAdmission(id).then(response => {
            console.log(response);
            if (response.status === 204) {
                console.log("Dropped Course Successfully. Admission ID :: " + id);
                setMessage("Dropped Course  Successfully. Admission Id::" + id);
            }
        }).catch(e => console.log("Exception while deleteing course. Admission Id:: " + id))
    }, []);
    return (
        <div>
        <Menu name="Home" />
            <div className='container'>

            </div>
            <div className="container w-100 pt-5 border rounded bg-warning p-5 mt-5">
         
                <h4 className="success">{message}</h4><br></br>
                <a className="btn btn-success" href={"/view-applied-courses/"+localStorage.applicantId}>Go Back</a>
            </div>
        </div>
    )
}

export default DropCourseByApplicant;