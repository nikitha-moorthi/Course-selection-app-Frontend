import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useEffect,useState } from 'react';
import StaffService from '../Services/StaffService';

function StaffLogin () {
    
    let [ errorMessage, setErrorMessage ] = useState("");

    let { register, handleSubmit, formState: {errors}} = useForm();
    let navigate = useNavigate();

    
    let [loginFormData,setLoginFormData]=useState(null);
    
    useEffect(() => {
       if(loginFormData!=null)
        {
        StaffService.getStaff(loginFormData.staffId).then(response => {
            const staff=response.data;
            if( loginFormData.password === staff.password){
                localStorage.setItem("userName", JSON.stringify({staffId: staff.staffId, role: 'staff'}));
                localStorage.setItem("staffID" , staff.staffId);
                navigate('/home');
            }else{
                setErrorMessage("Invalid Staff ID/ Password");
            }
        }).catch(e => {setErrorMessage(e.response.data.StaffId);
        console.log("Exception while fetching staff info "+e.response.data.StaffId)});
        
        
    }
    },[loginFormData]);

    function SubmitForm  (loginInfo) {
       

        setLoginFormData(loginInfo);


    }
    
    return (
        <div className='page'>

            <div className="container w-25 login-title" > <h3>Login</h3>
            </div>
            

            <div className="container w-25 border rounded border-dark bg-primary p-5" >
                <span className='error'>{errorMessage}</span>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <label >Staff Id: </label>
                    <input 
                        className="form-control" 
                        type="text"  
                        { ...register("staffId", {required: true})}
                     />
                     { errors.staffId && errors.staffId.type === 'required' && <span className='error'>Staff ID is required</span>}
                    <br></br>
                    <label> Password: </label>
                    <input 
                        className="form-control" 
                        type="password" 
                        { ...register("password", {required: true})}
                    />
                     { errors.password && errors.password.type === 'required' && <span className='error'>Password is required</span>}
                     <br></br>
                    <button type="submit" className="btn btn-lg w-10 btn-dark">Login</button>
                </form>
            </div>
        </div>
     
        

    );


}

export default StaffLogin;