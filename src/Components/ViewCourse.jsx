import photo from '../Pictures/banner.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Menu from './Menu';
import CoursesService from '../Services/CoursesService';
const ViewCourse = () => {
    const {courseid} = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        CoursesService.getCourse(courseid).then(response => {
            setCourse(response.data);
        }).catch(e => console.log("Exception while fetching employee info "+e));
    });

    return (
     <div>
        <Menu />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>{course.courseName}</h4>
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
                  <a className='btn btn-danger' href="/view-all-courses">Go Back</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ViewCourse;