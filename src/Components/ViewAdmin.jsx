import photo from '../Pictures/banner.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Menu from './Menu';
import AdminService from '../Services/AdminService';
const ViewAdmin = () => {
    const {id} = useParams();
    const [Admin, setAdmin] = useState({});

    useEffect(() => {
        AdminService.getAdmin(id).then(response => {
            setAdmin(response.data);
        }).catch(e => console.log("Exception while fetching Admin info "+e));
    });

    return (
     <div>
        <Menu />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>{Admin.adminId}</h4>
            </div>
            <div className="card-body">
                <img src={photo} alt="photo" className="card-img-top rounded-circle employee-photo" />
                <div className="card-title">
                    <h4>Details</h4>
                </div>
                <div className="card-text">
                <table>
                            <tr>
                                <td>
                                    <table>
                                        <tr>  
                                            <th>Admin Id:</th>
                                        </tr>
                                        <tr>
                                             <th>Admin Name:</th>
                                        </tr>
                                        <tr>
                                            <th>Password:</th>
                                        </tr>
                                        <tr>
                                        <th>Phone Number:</th>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{Admin.adminId}</td>
                                        </tr>
                                        <tr>
                                            <td>{Admin.adminName}</td>
                                        </tr>
                                        <tr>
                                            <td>{Admin.password}</td>
                                        </tr>
                                        <tr>
                                            <td>{Admin.adminContact}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                    </table>
                </div>
            </div>
            <div className="card-footer p-2">
                  <a className='btn btn-danger' href="/view-all-admins">Go Back</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ViewAdmin;