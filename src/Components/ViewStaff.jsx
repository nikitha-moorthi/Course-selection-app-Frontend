import photo from '../Pictures/banner.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Menu from './Menu';
import StaffService from '../Services/StaffService';
const ViewStaff = () => {
    const {id} = useParams();
    const [staff , setStaff ] = useState({});

    useEffect(() => {
        StaffService.getStaff (id).then(response => {
            setStaff (response.data);
        }).catch(e => console.log("Exception while fetching Staff info "+e));
    });

    return (
     <div>
        <Menu />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>Staff ID: {staff.staffId}</h4>
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
                                            <th>Staff  Id:</th>
                                        </tr>
                                        <tr>
                                             <th>Staff Role:</th>
                                        </tr>
                                        <tr>
                                            <th>Password:</th>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{staff.staffId}</td>
                                        </tr>
                                        <tr>
                                            <td>{staff.role}</td>
                                        </tr>
                                        <tr>
                                            <td>{staff.password}</td>
                                        </tr>
                                       
                                    </table>
                                </td>
                            </tr>
                    </table>
                </div>
            </div>
            <div className="card-footer p-2">
                  <a className='btn btn-danger' href="/home">Go Back</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ViewStaff;