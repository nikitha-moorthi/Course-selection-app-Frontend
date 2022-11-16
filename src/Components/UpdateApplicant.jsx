import Menu from "./Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ApplicantService from "../Services/ApplicantService";

const UpdateApplicant= () => {
    const { id } = useParams();  
    
    const [message , setMessage] = useState(""); 
    const [applicant, setApplicant] = useState({applicantId: "",applicantName:"",mobileNumber:"",applicantDegree:"",applicantGraduationPercent:"", password: ""});
   
    const [ role, setRole] = useState("");
    const [ applicantId, setApplicantId] = useState("");
    const [ applicantName, setApplicantName] = useState("");
    const [ mobileNumber, setMobileNumber] = useState("");
    const [ applicantDegree, setApplicantDegree] = useState("");
    const [ applicantGraduationPercent, setApplicantGraduationPercent] = useState("");
    const [ password, setPassword] = useState("");

    const {register, handleSubmit, formState: {errors}} = useForm();

    const updateApplicant = (applicant) => {   
        ApplicantService.updateApplicant(id, applicant).then(response => {
            if(response.status === 200){
                setMessage("Details Updated Successfully");
            }
        })
    }
    useEffect(() => {
        ApplicantService.getApplicant(id).then(response => {
           // console.log(response.data + "============");
            setApplicant(response.data);
            document.getElementById('applicantId').value = response.data.applicantId;
            document.getElementById('applicantName').value = response.data.applicantName;
            document.getElementById('mobileNumber').value = response.data.mobileNumber;
            document.getElementById('applicantDegree').value = response.data.applicantDegree;
            document.getElementById('applicantGraduationPercent').value = response.data.applicantGraduationPercent;
            document.getElementById('password').value = response.data.password;
        }).catch(e => console.log("Exception while updating Applicantinfo "+e));
    },[]);



    return (
        <div>
            <Menu/>
            <div className="container w-25 bg-primary form rounded p-5">
                <h4>Update Applicant</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateApplicant)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Applicant ID: </label>
                            <input 
                                className="form-control" 
                                type="number"
                                defaultValue=""
                                id="applicantId"
                                onChange={(e) => setApplicantId(e.target.value)}
                                { ...register("applicantId", {required: true} ) }
                            />
                            {errors.applicantId && errors.applicantId.type === "required" && <span className='error'>Applicant ID is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Applicant Name: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="applicantName"
                                onChange={(e) => setApplicantName(e.target.value)}
                                { ...register("applicantName", {required: true}) }
                            />
                            {errors.applicantName && errors.applicantName.type === "required" && <span className='error'>Applicant Name is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Mobile Number: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="mobileNumber"
                                onChange={(e) => setMobileNumber(e.target.value)}
                                { ...register("mobileNumber", {required: true}) }
                            />
                            {errors.mobileNumber && errors.mobileNumber.type === "required" && <span className='error'>Mobile Number is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Applicant Degree: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="applicantDegree"
                                onChange={(e) => setApplicantDegree(e.target.value)}
                                { ...register("applicantDegree", {required: true}) }
                            />
                            {errors.applicantDegree && errors.applicantDegree.type === "required" && <span className='error'>Applicant Degree is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Applicant GraduationPercent: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="applicantGraduationPercent"
                                onChange={(e) => setApplicantGraduationPercent(e.target.value)}
                                { ...register("applicantGraduationPercent", {required: true}) }
                            />
                            {errors.applicantGraduationPercent && errors.applicantGraduationPercent.type === "required" && <span className='error'>Applicant GraduationPercentis required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Applicant password: </label>
                            <input 
                                className="form-control" 
                                type="password" 
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                { ...register("password", {required: true}) }
                            />
                            {errors.password && errors.password.type === "required" && <span className='error'>password is required</span>}
                        </div>
                    </div>
                  
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-dark m-4">Update</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = {"/view-all-applicants" }>Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default UpdateApplicant;