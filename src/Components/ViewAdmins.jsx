import { useEffect, useState } from "react";
import AdminService from "../Services/AdminService";
import Menu from "./Menu";


const ViewAdmins = () => {
    const [Admin, setAdmin] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    useEffect(() => {
        AdminService.getAllAdmin().then(response => {
            //console.log(response);
            setAdmin(response.data);
        }).catch(error => [
            console.log("Error while fetching Admin info " + error)
        ])
    }, []);

    const search = (e) => {
        const searchText = e.target.value;
        setSearchStr(searchText);
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
                            <th>Admin Id</th>
                            <th>Admin Name</th>
                            <th>Password</th>
                            <th>Phone Number</th>
                            <th>Action(s)</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            Admin.filter(admin => (admin.adminName.toLowerCase().includes(searchStr.toLowerCase()) || admin.adminId == searchStr)).map(admin => (
                                <tr>
                                    <td>{admin.adminId}</td>
                                    <td>{admin.adminName}</td>
                                    <td>{admin.password}</td>
                                    <td>{admin.adminContact}</td>
                                    <td>
                                        <a className="btn btn-primary m-1" href={"/update-admin/" + admin.adminId}>Update</a>
                                        <a className="btn btn-danger m-1" href={"/delete-admin/" + admin.adminId}>Delete</a>
                                        <a className="btn btn-success m-1" href={"/view-admin/" + admin.adminId}>Show</a>
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


export default ViewAdmins;