import { useState } from "react";
import photo from '../Pictures/profile-picture.jpg';

const AdminGrid = (props) => {
    const admins = props.admins;
    const searchStr = props.searchStr;
    
    return (
        <div className="row border rounded bg-warning pb-5">
        {
            admins.filter(admin => (admin.adminName.toLowerCase().includes(searchStr.toLowerCase()) || admin.adminId == searchStr)).map(admin => (
                <div className="col col-lg-4 w-25 pt-5">
                    <div className="card">
                    <div className="card-header">
                    <h4>{admin.adminName}</h4>
                    </div>
                    <div className="card-body">
                    <img src={photo} alt="photo" className="card-img-top rounded-circle border border-warning employee-photo" />
                    <div className="card-title">
                        <h4>Details</h4>
                    </div>
                    <div className="card-text">
                        <table>
                            <tr>
                                <td>
                                    <table>
                                        <tr>
                                            <th>Admin ID:</th>
                                        </tr>
                                        <tr>
                                            <th>Admin Name:</th>
                                        </tr>
                                        <tr>
                                            <th>Admin Contact:</th>
                                        </tr>
                                        <tr>
                                            <th>Password:</th>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{admin.adminId}</td>
                                        </tr>
                                        <tr>
                                            <td>{admin.adminName}</td>
                                        </tr>
                                        <tr>
                                            <td>{admin.adminContact}</td>
                                        </tr>
                                        <tr>
                                            <td>{admin.password}</td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                    </table>
                    </div>
                    </div>
                    <div className="card-footer p-2">
                        <a className="btn btn-primary m-1" href={"/update-admin/" + admin.adminId}>Update</a>
                        <a className="btn btn-danger m-1" href={"/delete-admin/" + admin.adminId}>Delete</a>
                        <a className="btn btn-success m-1" href={"/view-admin/" + admin.adminId}>Show</a>
                    </div>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
export default AdminGrid;