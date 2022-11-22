import { useContext, useState } from "react";

const CourseTable = (props) => {
    const courses = props.courses;
    const searchStr = props.searchStr;
    
    let user =localStorage.getItem('userName');
    user = JSON.parse(user);
    let role = user.role;
    return (
        <table className="table table-striped table-hover bg-danger rounded">
            <thead className="table-gray text-white">
                <tr>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    <th>Course Start-date</th>
                    <th>Course End-date</th>
                    <th>Course Fees</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {
                    courses.filter(course => (course.courseName.toLowerCase().includes(searchStr.toLowerCase()) || course.courseId == searchStr )).map(course => (
                        <tr>
                            <td>{course.courseId}</td>
                            <td>{course.courseName}</td>
                            <td>{course.courseDuration}</td>
                            <td>{course.courseStartDate}</td>
                            <td>{course.courseEndDate}</td>
                            <td>{course.courseFees}</td>
                            {role == 'staff'? <td> <a className="btn btn-success m-1" href={"/view-course/"+course.courseId}>Show</a> <a className="btn btn-primary m-1" href={"/update-course/"+course.courseId}>Update</a> <a className="btn btn-danger m-1" href={"/delete-Course/"+course.courseId}>Delete</a> </td>:null }
                            {role == 'applicant'? <td> <a className="btn btn-success m-1" href={"/view-course/"+course.courseId}>Show</a> <a className="btn btn-primary m-1" href={"/add-admission/"}>Apply For Course</a></td> :null }
                            {role == 'admin'? <td> <a className="btn btn-success m-1" href={"/view-course/"+course.courseId}>Show</a> </td>:null }
                           </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default CourseTable;