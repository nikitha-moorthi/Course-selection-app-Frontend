import photo from '../Pictures/banner.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Menu from './Menu';
import AdmissionService from "../Services/AdmissionService";
const ViewAdmission = () => {
    const {id} = useParams();
    const [admissions, setAdmissions] = useState([]);
    
    useEffect(() => {
         AdmissionService.getAdmissionById(id).then(response => {
            console.log(typeof(response.data))
            setAdmissions(response.data);
          //  console.log(response.data + " "+admission.admissionId + " "+admission.applicant.applicantId);
        }).catch(e => console.log("Exception while fetching Admission info "+e))
    },[]);

    return (
     <div>
        <Menu />
        <table className="table table-striped table-hover bg-danger rounded">
            <thead className="table-gray text-white">
                <tr>
                    <th>Admission ID</th>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    <th>Course Start-date</th>
                    <th>Course End-date</th>
                    <th>Course Fees</th>
                    <th>Applicant Percentage</th>
                    <th>Admission Status</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {
                        admissions.map(admission => (
                            <tr>
                        <td>{admission.admissionId}</td>
                            <td>{admission.course.courseId}</td>
                            <td>{admission.course.courseName}</td>
                            <td>{admission.course.courseDuration}</td>
                            <td>{admission.course.courseStartDate}</td>
                            <td>{admission.course.courseEndDate}</td>
                            <td>{admission.course.courseFees}</td>   
                            <td>{admission.applicant.applicantGraduationPercent+"%"}</td>                         
                            <td>{admission.status}</td>

                            
                           </tr>
                    
                        ))
                        
                }
            </tbody>
        </table>
        <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <a type="button" className="btn btn-lg btn-success m-4" href = "/view-all-admissions">Go Back</a>
                        </div>
                    </div>
        </div>
  );
}
export default ViewAdmission;
/*                                 <tr>
                                            <td>{admission.applicant.applicantId}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.applicant.applicantName}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.applicant.applicantDegree}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.applicant.applicantGraduationPercent}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.course.courseId}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.course.courseName}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.course.courseDuration}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.course.courseStateDate}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.course.courseEndDate}</td>
                                    </tr>
                                    <tr>
                                            <td>{admission.course.courseFees}</td>
                                    </tr>
                                    
                                
                                       
*/