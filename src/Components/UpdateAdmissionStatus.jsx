import Menu from "./Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdminService from "../Services/AdminService";
import AdmissionService from "../Services/AdmissionService";

const UpdateAdmissionStatus = () => {
    const { id } = useParams();   
    const [message , setMessage] = useState(""); 
    const [admission, setAdmission] = useState({admissionId:"", applicant: {} , course: {},admissionDate:"", status:""});
    
    /*const [ admissionId, setAdmissionId] = useState("");
    const [ applicant, setApplicant] = useState("");
    const [ course, setCourse] = useState("");
    const [ admissionDate, setAdmissionDate] = useState("");
    const [ status, setStatus] = useState("");  */

    const {register, handleSubmit, formState: {errors}} = useForm();

    const updateAdmissionStatus = (admissionInfo) => {
        admissionInfo.course = admission.course ;
        admissionInfo.applicant = admission.applicant;
        console.log(admission);
        AdminService.updateAdmissionStatus(admission.applicant.applicantId, admissionInfo).then(response => {
            if(response.status === 200){
                setMessage("Status Updated Successfully");
            }
        }).catch(e =>setMessage(e.response.data.AdmissionId));
    }
    useEffect(() => {
        AdmissionService.getAdmission(id).then(response => {
            setAdmission(response.data);
            document.getElementById('admissionId').value = response.data.admissionId;
            document.getElementById('applicantId').value = response.data.applicant.applicantId;
            document.getElementById('courseId').value = response.data.course.courseId;
            document.getElementById('admissionDate').value = response.data.admissionDate;
            document.getElementById('status').value = response.data.status; 
            //setAdmissionId(response.data.admissionId);
            //setApplicant(response.data.applicant.applicantId);
            //setCourse(response.data.course.courseId);
            //setAdmissionDate(response.data.admissionDate);
            //setStatus(response.data.status);
            console.log(response.data);

        }).catch(e => console.log("Exception while updating Status info "+e));
    },[]);



    return (
        <div>
            <Menu/>
            <div className="container w-25 bg-primary form rounded p-5">
                <h4><b>Update Admission Status</b></h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateAdmissionStatus)}> 
                    <div className="row">
                        <div className="col">
                            <label>Admission ID: </label>
                            <input 
                                className="form-control" 
                                type="number" readOnly
                                id="admissionId" 
                                { ...register("admissionId" ) }
                            />
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Applicant ID: </label>
                            <input 
                                className="form-control" 
                                type="number" readOnly
                                id="applicantId" 
                                { ...register("applicantId") }
                            />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Course ID: </label>
                            <input 
                                className="form-control" 
                                type="number"  readOnly
                                id="courseId"  
                                { ...register("courseId") }    
                            />
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Admission Date: </label>
                            <input 
                                className="form-control" 
                                type="date" readOnly
                                id="admissionDate"  
                                { ...register("admissionDate") }    
                            />
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Admission Status: </label>
                            <select 
                            className="form-control" { ...register("status", {required: true }) } >
                                <option value="">----Select----</option>
                                <option value="PENDING">PENDING</option>
                                <option value="CONFIRMED">CONFIRMED</option>
                                <option value="REJECTED">REJECTED</option>
                            </select>
                            
                            {errors.status && errors.status.type === "required" && <span className='error'>Admission Status is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-dark m-4">Save</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = "/view-all-admissions">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default UpdateAdmissionStatus;