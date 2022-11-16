import { useEffect, useState } from "react";
import Menu from "./Menu";

import StaffService from "../Services/StaffService";

const ViewStaffs = () => {
    const [staff, setStaff] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    let user =localStorage.getItem('userName');
    user = JSON.parse(user);
    let role = user.role;

    useEffect(() => {
        StaffService.getAllStaff().then(response => {
            //console.log(response);
            setStaff(response.data);
        }).catch(error => [
            console.log("Error while fetching Staff info " + error)
        ])
    }, []);

    const search = (event) => {
        setSearchStr(event.target.value);
    }


    return (
        <div className="container">
            <Menu name="Home" />
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} placeholder="Search...."/>
                </div>
                <table className="table table-striped table-bordered table-hover bg-danger">
                    <thead className="table-gray text-white">
                        <tr>
                            <th>Staff Id</th>
                            <th>Staff Role</th>
                            <th>Password</th>
                            <th>Action(s)</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            staff.filter(staff => (staff.role.toLowerCase().includes(searchStr.toLowerCase()) || staff.staffId === searchStr)).map(staff => (
                                <tr>
                                    <td>{staff.staffId}</td>
                                    <td>{staff.role}</td>
                                    <td>{staff.password}</td>
                                    <td>
                                        {role == 'staff'? <td>  
                                        <a className="btn btn-primary m-1" href={"/update-staff/" + staff.staffId}>Update</a>
                                        <a className="btn btn-danger m-1" href={"/delete-staff/" + staff.staffId}>Delete</a>
                                        <a className="btn btn-success m-1" href={"/view-staff/" + staff.staffId}>Show</a>
                                        </td>:null }

                                        {role == 'admin'? <td>  
                                        <a className="btn btn-danger m-1" href={"/delete-staff/" + staff.staffId}>Delete</a>
                                        <a className="btn btn-success m-1" href={"/view-staff/" + staff.staffId}>Show</a>
                                        </td>:null }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default ViewStaffs;