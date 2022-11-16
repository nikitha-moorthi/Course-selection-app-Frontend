import photo from '../Pictures/banner.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import ApplicantService from '../Services/ApplicantService';

const ViewApplicant = () => {
    const {id} = useParams();
    const [Applicant, setApplicant] = useState({});

    let user =localStorage.getItem('userName');
    user = JSON.parse(user);
    let role = user.role;

    useEffect(() => {
        ApplicantService.getApplicant(id).then(response => {
            setApplicant(response.data);
        }).catch(e => console.log("Exception while fetching Applicant info "+e));
    });

    return (
     <div>
        <Menu />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>{Applicant.applicantName}</h4>
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
                                            <th>Applicant Id:</th>
                                        </tr>
                                        <tr>
                                             <th>Applicant Name:</th>
                                        </tr>
                                        <tr>
                                             <th>Phone Number:</th>
                                        </tr>
                                        <tr>
                                             <th>Applicant Degree:</th>
                                        </tr>
                                        <tr>
                                             <th>Graduation Percent:</th>
                                        </tr>
                                        <tr>
                                            <th>Password:</th>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{Applicant.applicantId}</td>
                                        </tr>
                                        <tr>
                                            <td>{Applicant.applicantName}</td>
                                        </tr>
                                        <tr>
                                            <td>{Applicant.mobileNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>{Applicant.applicantDegree}</td>
                                        </tr>
                                        <tr>
                                            <td>{Applicant.applicantGraduationPercent}</td>
                                        </tr>
                                        <tr>
                                            <td>{Applicant.password}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                    </table>
                </div>
            </div>
            <div className="card-footer p-2">

            {role == 'applicant'? <td>  
            <a className='btn btn-danger' href= "/home">Go Back</a>
                <a  className="btn btn-success" href = {"/update-applicant/"+id} >Update</a>
                
           
            </td>:null }

            {role == 'admin'? <td>  
                <a className='btn btn-danger' href= "/view-all-applicants">Go Back</a>
             </td>:null }
             </div>      
        </div>
      </div>
    </div>
  );
}
export default ViewApplicant;