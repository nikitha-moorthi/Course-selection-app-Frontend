import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdmissionService from "../Services/AdmissionService";
import Menu from "./Menu";

const AppliedCourse = () =>{
    const {id} = useParams();
    const [admissions, setAdmissions] = useState([]);
    let user =localStorage.getItem('userName');
    user = JSON.parse(user);
    let role = user.role;
   
    useEffect(() => {
         AdmissionService.getAdmissionByApplicantID(id).then(response => {
            setAdmissions(response.data);
        }).catch(e => console.log("Exception while fetching Admission info "+e));
    },[]);

    return (
        <div>
        <Menu name="Home" />
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
                            <td>{admission.status}</td>

                            {role == 'applicant'? <td> <a className="btn btn-success m-1" href={"/drop-applied-courses/" + admission.admissionId }>Drop the Course</a> </td> :null }
                            
                           </tr>
                    
                        ))
                        
                }
            </tbody>
        </table>
        </div>
    )
}
export default AppliedCourse;

