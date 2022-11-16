import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ApplicantService from '../Services/ApplicantService';
import Menu from './Menu';


const ApplicantRegister = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: { errors } } = useForm();

    const saveApplicant = (applicant) => {
        ApplicantService.saveApplicant(applicant).then(response => {
            if (response.status === 201) {
                setMessage("You have Registered Successfully");
                
            }
        })
    }


    return (
        <div className='container'>
            
            <div className="container w-50 border-dark bg-primary form">
                <h4>Registration Form</h4>
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(saveApplicant)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("applicantName", { required: true })}
                            />
                            {errors.applicantName && errors.applicantName.type === "required" && <span className='error'>Name is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password: </label>
                            <input
                                className="form-control"
                                type="password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && errors.password.type === "required" && <span className='error'>Password is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Degree: </label>
                            <input
                                className="form-control"
                                type="text"
                                {...register("applicantDegree", { required: true })}
                            />
                            {errors.applicantDegree && errors.applicantDegree.type === "required" && <span className='error'>Degree is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Phone Number: </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("mobileNumber", { required: true, minLength: 10, maxLength: 10 })}
                            />
                            {errors.mobileNumber && errors.mobileNumber.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.mobileNumber && errors.mobileNumber.type === "minLength" && <span className='error'>Phone Number must contains 10 digits</span>}
                            {errors.mobileNumber && errors.mobileNumber.type === "maxLength" && <span className='error'>Phone Number must contais maximum 10 digits</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Graduation percentage: </label>
                            <input
                                className="form-control"
                                type="number"
                                {...register("applicantGraduationPercent", { required: true })}
                            />
                            {errors.applicantGraduationPercent && errors.applicantGraduationPercent.type === "required" && <span className='error'>Percentage is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex jutify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-dark">Register</button>
                            <br></br>
                            <a class="text-white" href="/applicant-login">Login</a> Already have a login?
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ApplicantRegister;

