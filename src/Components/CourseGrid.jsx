import { useState } from "react";
import photo from '../Pictures/banner.jpg';

const CourseGrid = (props) => {
    const courses = props.courses;
    const searchStr = props.searchStr;
    let user =localStorage.getItem('userName');
    user = JSON.parse(user);
    let role = user.role;
    return (
        <div className="row border rounded bg-warning pb-5">
        {
            courses.filter(course => (course.courseName.toLowerCase().includes(searchStr.toLowerCase()) || course.courseId == searchStr )).map(course => (
                <div className="col col-lg-4 w-25 pt-5">
                    <div className="card">
                    <div className="card-header">
                    <h4>{course.courseName}</h4>
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
                                            <th>Course ID:</th>
                                        </tr>
                                        <tr>
                                            <th>Course Name:</th>
                                        </tr>
                                        <tr>
                                            <th>Course Duration:</th>
                                        </tr>
                                        <tr>
                                            <th>Course Start-date:</th>
                                        </tr>
                                        <tr>
                                            <th>Course End-date:</th>
                                        </tr>
                                        <tr>
                                            <th>Course Fees:</th>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{course.courseId}</td>
                                        </tr>
                                        <tr>
                                            <td>{course.courseName}</td>
                                        </tr>
                                        <tr>
                                            <td>{course.courseDuration}</td>
                                        </tr>
                                        <tr>
                                            <td>{course.courseStartDate}</td>
                                        </tr>
                                        <tr>
                                            <td>{course.courseEndDate}</td>
                                        </tr>
                                        <tr>
                                            <td>{course.courseFees}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                    </table>
                    </div>
                    </div>
                    <div className="card-footer p-2">
                    {role == 'staff'? <td> <a className="btn btn-success m-1" href={"/view-course/"+course.courseId}>Show</a> <a className="btn btn-primary m-1" href={"/update-course/"+course.courseId}>Update</a> <a className="btn btn-danger m-1" href={"/delete-Course/"+course.courseId}>Delete</a> </td>:null }
                            {role == 'applicant'? <td> <a className="btn btn-success m-1" href={"/view-course/"+course.courseId}>Show</a> <a className="btn btn-primary m-1" href={"/add-admission/"}>Apply For Course</a></td> :null }
                            {role == 'admin'? <td> <a className="btn btn-success m-1" href={"/view-course/"+course.courseId}>Show</a> </td>:null }
                    </div>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
export default CourseGrid;