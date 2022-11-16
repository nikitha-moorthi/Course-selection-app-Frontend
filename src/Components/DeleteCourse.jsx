import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import CoursesService from "../Services/CoursesService";
import Menu from "./Menu";



const DeleteCourse = () => {
    const { courseid } = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        CoursesService.deleteCourse(courseid).then(response => {
            console.log(response);
            if (response.status === 204) {
                console.log("Deleted Course Successfully. Course ID :: " + courseid);
                setMessage("Deleted Course  Successfully. Course Id::" + courseid);
            }
        }).catch(e => setMessage(e.response.data.CourseId))
    }, []);

    return (
        <div>
            <div className='container'>
                <Menu name="Home" />
            </div>
            <div className="container w-25 p-5 login-title">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success" href="/view-all-courses">Go Back</a>
            </div>
        </div>
    )
}

export default DeleteCourse;