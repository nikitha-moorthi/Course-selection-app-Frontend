import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import StaffService from '../Services/StaffService';
import Menu from './Menu';

const AddStaff = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();
    

    const saveStaff = (staff) => {
        StaffService.saveStaff(staff).then(response => {
            if(response.status === 201){
                setMessage("Staff Added Successfully!!!!");
                
            }
        })
    }

    return(
        <div className='conatiner'> 
            <Menu name="Home"/>
            <div className="container w-25 bg-primary form rounded p-5">
                <h4>Add Staff</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(saveStaff)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Role: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                { ...register("role", {required: true} ) }
                            />
                            {errors.role && errors.role.type === "required" && <span className='error'>Role required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password: </label>
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
                            <label htmlFor="">Phone Number: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                { ...register("staffContact", {required: true,minLength: 10,maxLength: 10}) }
                            />
                            {errors.staffContact && errors.staffContact.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.staffContact && errors.staffContact.type === "minLength" && <span className='error'>Phone Number contains minimum 10 digits</span>}
                            {errors.staffContact && errors.staffContact.type === "maxLength" && <span className='error'>Phone Number contains maximum 10 digits</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-dark m-4">Add Staff</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = "/view-all-staffs">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStaff;

