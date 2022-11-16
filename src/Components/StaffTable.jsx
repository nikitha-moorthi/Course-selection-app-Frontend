import { useContext, useState } from "react";

const StaffTable = (props) => {
    const staff = props.staff;
    const searchStr = props.searchStr;
    return (
        <table className="table table-striped table-hover bg-info rounded">
            <thead className="table-gray text-danger">
                <tr>
                    <th>Staff Id</th>
                    <th>Staff Role</th>
                    <th>Staff Password</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {
                    staff.filter(staff => (staff.staffRole.toLowerCase().includes(searchStr.toLowerCase()) || staff.staffId == searchStr )).map(staff => (
                        <tr>
                            <td>{staff.staffId}</td>
                            <td>{staff.password}</td>
                            <td>{staff.role}</td>
                            <td>
                                <a className="btn btn-primary m-1" href={"/update-staff/"+staff.staffId}>Update</a>
                                <a className="btn btn-danger m-1" href={"/delete-staff/"+staff.staffId}>Delete</a>
                                <a className="btn btn-success m-1" href={"/view-staff/"+staff.staffId}>Show</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default StaffTable;