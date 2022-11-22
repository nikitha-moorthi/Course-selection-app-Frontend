import Menu from "./Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdminService from "../Services/AdminService";

const UpdateAdmin= () => {
    const { id } = useParams();  
    
    const [message , setMessage] = useState(""); 
    const [admin, setAdmin] = useState({adminId: "", adminName:"", password: "", adminContact:""});
   
    const [ adminId, setAdminId] = useState("");
    const [ adminName, setAdminName] = useState("");
    const [ password, setPassword] = useState("");
    const [ adminContact, setAdminContact] = useState("");

    const {register, handleSubmit, formState: {errors}} = useForm();

    const updateAdmin = (admin) => {   
        AdminService.updateAdmin(id, admin).then(response => {
            if(response.status === 200){
                setMessage("Admin Updated Successfully");
            }
        })
    }
    useEffect(() => {
        AdminService.getAdmin(id).then(response => {
            console.log(response.data + "============");
            setAdmin(response.data);
            document.getElementById('adminId').value = response.data.adminId;
            document.getElementById('adminName').value = response.data.adminName;
            document.getElementById('password').value = response.data.password;
            document.getElementById('adminContact').value = response.data.adminContact;
        }).catch(e => console.log("Exception while fetching Admin info "+e));
    },[]);



    return (
        <div>
            <Menu/>
            <div className="container w-25 bg-primary form rounded p-5">
                <h4><b>Update Admin</b></h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateAdmin)}> 
                    <div className="row">
                        <div className="col">
                            <label>Admin ID: </label>
                            <input 
                                className="form-control" 
                                type="number"
                                id="adminId"
                                onChange={(e) => setAdminId(e.target.value)}
                                { ...register("adminId", {required: true} ) }
                            />
                            {errors.adminId && errors.adminId.type === "required" && <span className='error'>Admin ID is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Admin Name: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="adminName"
                                onChange={(e) => setAdminName(e.target.value)}
                                { ...register("adminName", {required: true}) }
                            />
                            {errors.adminName && errors.adminName.type === "required" && <span className='error'>Admin Name is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password: </label>
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
                        <div className="col">
                            <label htmlFor="">Phone Number: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="adminContact"
                                onChange={(e) => setAdminContact(e.target.value)}
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
                            <button type="submit" className="btn btn-lg btn-dark m-4">Update Admin</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = "/view-all-admins">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default UpdateAdmin;