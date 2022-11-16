import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import ApplicantService from '../Services/ApplicantService';

function ApplicantLogin() {

    let [errorMessage, setErrorMessage] = useState("");

    let { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();


    let [loginFormData, setLoginFormData] = useState(null);

    useEffect(() => {
        if (loginFormData != null) {
            ApplicantService.getApplicant(loginFormData.applicantId).then(response => {
                const applicant = response.data;
                if (loginFormData.password === applicant.password) {
                    localStorage.setItem("userName", JSON.stringify({name: applicant.applicantName,  role: 'applicant'}));
                    localStorage.setItem("applicantId", applicant.applicantId);
                    navigate('/home');
                } else {
                    setErrorMessage("Invalid Applicant ID/ Password");
                }
            }).catch(e => {setErrorMessage(e.response.data.ApplicantId);
                console.log("Exception while fetching staff info "+e.response.data.ApplicantId)});


        }
    }, [loginFormData]);

    function SubmitForm(loginInfo) {


        setLoginFormData(loginInfo);


    }

    return (
        <div>
            <div className="container w-25 login-title" > <h3>Login</h3>
            </div>


            <div className="container w-25 border rounded border-dark bg-primary p-5" >
                <span className='error'>{errorMessage}</span>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <label >Applicant Id: </label>
                    <input
                        className="form-control"
                        type="text"
                        {...register("applicantId", { required: true })}
                    />
                    {errors.applicantId && errors.applicantId.type === 'required' && <span className='error'>Applicant ID is required</span>}
                    <br></br>
                    <label> Password: </label>
                    <input
                        className="form-control"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && errors.password.type === 'required' && <span className='error'>Password is required</span>}
                    <br></br>
                    <button type="submit" className="btn btn-lg w-10 btn-dark">Login</button><br></br>
                </form>
            </div>
        </div>



    );


}

export default ApplicantLogin;