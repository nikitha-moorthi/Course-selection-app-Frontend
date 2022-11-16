import { useEffect, useState } from "react";
import ApplicantService from "../Services/ApplicantService";
import Menu from "./Menu";


const ViewApplicants = () => {
    const [Applicant, setApplicant] = useState([]);
    const [searchStr, setSearchStr] = useState("");

    let user =localStorage.getItem('userName');
    user = JSON.parse(user);
    let role = user.role;
    
    useEffect(() => {
        ApplicantService.getAllApplicant().then(response => {
            //console.log(response);
            setApplicant(response.data);
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
                            <th>Applicant Id</th>
                            <th>Applicant Name</th>
                            <th>Phone Number</th>
                            <th>Applicant Degree</th>
                            <th>Graduation Percent</th>
                            <th>Password</th> 
                            <th>Action(s)</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            Applicant.filter(applicant => (applicant.applicantName.toLowerCase().includes(searchStr.toLowerCase()) || applicant.applicantId == searchStr)).map(applicant => (
                                <tr>
                                    <td>{applicant.applicantId}</td>
                                    <td>{applicant.applicantName}</td>
                                    <td>{applicant.mobileNumber}</td>
                                    <td>{applicant.applicantDegree}</td>
                                    <td>{applicant.applicantGraduationPercent}</td>
                                    <td>{applicant.password}</td>
                                    <td>
                                    {role == 'applicant'? <td>  
                                        <a className="btn btn-primary m-1" href={"/update-applicant/" + applicant.applicantId}>Update</a>
                                        <a className="btn btn-success m-1" href={"/view-applicant/" + applicant.applicantId}>Show</a>
                                        </td>:null }

                                        {role == 'admin'? <td>  
                                        <a className="btn btn-success m-1" href={"/view-applicant/" + applicant.applicantId}>Show</a>
                                        </td>:null }
                                        
                                        
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


export default ViewApplicants;