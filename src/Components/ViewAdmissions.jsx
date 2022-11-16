import { useEffect, useState } from "react";
import AdmissionService from "../Services/AdmissionService";
import Menu from "./Menu";


const ViewAdmissions = () => {
    const [admissions, setAdmissions] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    useEffect(() => {
        AdmissionService.getAllAdmissions().then(response => {
            console.log(response);
            setAdmissions(response.data);
        }).catch(error => [
            console.log("Error while fetching Admissions info " + error)
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
                            <th>Admission Id</th>
                            <th>Applicant Id</th>
                            <th>Applicant Name</th>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Admission Date</th>
                            <th>Applicant Percentage</th>
                            <th>Admission Status</th>
                            <th>Action(s)</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            admissions.filter(admission => (admission.course.courseId == searchStr || admission.status.toLowerCase().includes(searchStr.toLowerCase()) || admission.admissionDate.includes(searchStr))).map(admission => (
                                <tr>
                                    <td>{admission.admissionId}</td>
                                    <td>{admission.applicant.applicantId}</td>
                                    <td>{admission.applicant.applicantName}</td>
                                    <td>{admission.course.courseId}</td>    
                                    <td>{admission.course.courseName}</td>                                 
                                    <td>{admission.admissionDate}</td>
                                    <td>{admission.applicant.applicantGraduationPercent+"%"}</td>
                                    <td>{admission.status}</td>
                                    <td><a className="btn btn-primary m-1" href={"/update-admission-status/"+admission.admissionId}>Update Admission Status</a>
                                    <a className="btn btn-success m-1" href={"/view-admission/"+admission.admissionId}>Show Admission</a></td>

                                   
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default ViewAdmissions;


