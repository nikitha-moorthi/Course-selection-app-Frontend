import Menu from "./Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StaffService from "../Services/StaffService";

const UpdateStaff= () => {
    const { id } = useParams();  
    
   // console.log("IIIIIIIIIIIIIIII" + id);
    const [message , setMessage] = useState(""); 
    const [staff, setStaff] = useState({staffId: "", role:"", password: ""});
   
    const [ role, setRole] = useState("");
    const [ staffId, setStaffID] = useState("");
    const [ password, setPassword] = useState("");

    const {register, handleSubmit, formState: {errors}} = useForm();

    const updateStaff = (staff) => {   
        StaffService.updateStaff(id, staff).then(response => {
            if(response.status === 200){
                setMessage("Staff Updated Successfully");
            }
        })
    }
    useEffect(() => {
        StaffService.getStaff(id).then(response => {
           // console.log(response.data + "============");
            setStaff(response.data);
            document.getElementById('staffId').value = response.data.staffId;
            document.getElementById('role').value = response.data.role;
            document.getElementById('password').value = response.data.password;
        }).catch(e => console.log("Exception while updating Staff info "+e));
    },[]);



    return (
        <div>
            <Menu/>
            <div className="container w-25 bg-primary form rounded p-5">
                <h4>Update Staff</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateStaff)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Staff ID: </label>
                            <input 
                                className="form-control" 
                                type="number"
                                defaultValue=""
                                id="staffId"
                                onChange={(e) => setStaffID(e.target.value)}
                                { ...register("staffId", {required: true} ) }
                            />
                            {errors.staffId && errors.staffId.type === "required" && <span className='error'>Staff ID is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Staff Role: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="role"
                                onChange={(e) => setRole(e.target.value)}
                                { ...register("role", {required: true}) }
                            />
                            {errors.role && errors.role.type === "required" && <span className='error'>Role is required</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Staff password: </label>
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
                            <button type="submit" className="btn btn-lg btn-dark m-4">Update Staff</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = "/view-all-staffs">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default UpdateStaff;