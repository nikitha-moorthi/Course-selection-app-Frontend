import { useContext, useState } from "react";

const AdminTable = (props) => {
    const admins = props.admins;
    const searchStr = props.searchStr;
   
    return (
        <table className="table table-striped table-hover bg-danger rounded">
            <thead className="table-gray text-white">
                <tr>
                    <th>Admin Id</th>
                    <th>Admin Name</th>
                    <th>Admin Contact</th>
                    <th>Password</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody className="table-light">
            {
                admins.filter(admin => (admin.adminName.toLowerCase().includes(searchStr.toLowerCase()) || admin.adminId == searchStr)).map(admin => (
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
    )
}
export default AdminTable;