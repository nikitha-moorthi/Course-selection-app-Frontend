import { useState } from 'react';
import {useForm} from 'react-hook-form';
import AdminService from '../Services/AdminService';
import Menu from './Menu';

const AddAdmin = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();
    

    const saveAdmin = (Admin) => {
        AdminService.saveAdmin(Admin).then(response => {
            if(response.status === 201){
                setMessage("Admin Added Successfully!!!!");
                
            }
        })
    }

    return(
        <div className='container'> 
            <Menu />
            <div className="container w-25 bg-primary form rounded p-5">
                <h4><b>Add Admin</b></h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(saveAdmin)}> 
                    <div className="row">
                        <div className="col">
                            <label >Admin Name: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                { ...register("adminName", {required: true} ) }
                            />
                            {errors.adminName && errors.adminName.type === "required" && <span className='error'>Admin Name required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label >Password: </label>
                            <input 
                                className="form-control" 
                                type="password" 
                                { ...register("password", {required: true}) }
                            />
                            {errors.password && errors.password.type === "required" && <span className='error'>Password is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Phone Number: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                { ...register("adminContact", {required: true,minLength: 10,maxLength: 10}) }
                            />
                            {errors.adminContact && errors.adminContact.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.adminContact && errors.adminContact.type === "minLength" && <span className='error'>Phone Number contains minimum 10 digits</span>}
                            {errors.adminContact && errors.adminContact.type === "maxLength" && <span className='error'>Phone Number contains maximum 10 digits</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-dark m-4">Add Admin</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = "/view-all-admins">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddAdmin;
