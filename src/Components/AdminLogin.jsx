import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useEffect,useState } from 'react';
import AdminService from '../Services/AdminService';

function AdminLogin () {
    let [ errorMessage, setErrorMessage ] = useState("");

    let { register, handleSubmit, formState: {errors}} = useForm();
    let navigate = useNavigate();

    
    let [loginFormData,setLoginFormData]=useState(null);
    
    useEffect(() => {
       if(loginFormData!=null)
        {
        AdminService.getAdmin(loginFormData.adminId).then(response => {
            const admin =response.data;
            if( loginFormData.password === admin.password){
                localStorage.setItem("userName", JSON.stringify({name: admin.adminName, role: 'admin'}));
                localStorage.setItem("adminID", admin.adminId);
                navigate('/home');
            }else{
                setErrorMessage("Invalid Admin ID/ Password");
            }
        }).catch(e => {setErrorMessage(e.response.data.AdminId);
            console.log("Exception while fetching staff info "+e.response.data.AdminId)});
        
        
    }
    },[loginFormData]);

    function SubmitForm  (loginInfo) {
       

        setLoginFormData(loginInfo);


    }
    return (
        <div>
            <div className="container w-25 login-title" > <h3>Login as Admin</h3>
            </div>
            

            <div className="container w-25 border rounded border-dark bg-primary p-5" >
                <span className='error'>{errorMessage}</span>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <label >Admin Id: </label>
                    <input 
                        className="form-control" 
                        type="text"  
                        { ...register("adminId", {required: true})}
                     />
                     { errors.adminId && errors.adminId.type === 'required' && <span className='error'>Admin Id is required</span>}
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

export default AdminLogin;