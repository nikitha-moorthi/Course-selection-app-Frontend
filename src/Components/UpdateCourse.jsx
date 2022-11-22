import Menu from "./Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CoursesService from "../Services/CoursesService";

const UpdateCourse = () => {
    const { id } = useParams();   
    const [message , setMessage] = useState(""); 
    const [course, setCourse] = useState({courseName: "", courseDuration:"", courseStartDate: "", courseEndDate: "",courseFees:""});
    const [ courseName, setCourseName] = useState("");
    const [ courseDuration, setCourseDuration] = useState("");
    const [ courseStartDate, setCourseStartDate] = useState("");
    const [ coucourseEndDate, setCourseEndDate] = useState("");
    const [ courseFees, setCourseFees] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();

    const updateCourse = (course) => {
        CoursesService.updateCourse(id, course).then(response => {
            if(response.status === 200){
                setMessage("Course Updated Successfully");
            }
        }).catch(e=> setMessage(e.response.data.CourseId));
    }
    useEffect(() => {
        CoursesService.getCourse(id).then(response => {
            setCourse(response.data);
            document.getElementById('courseName').value = response.data.courseName;
            document.getElementById('courseDuration').value = response.data.courseDuration;
            document.getElementById('courseStartDate').value = response.data.courseStartDate;
            document.getElementById('courseEndDate').value = response.data.courseEndDate;
            document.getElementById('courseFees').value = response.data.courseFees;
        }).catch(e => console.log("Exception while updating Course info "+e));
    },[]);



    return (
        <div>
            <Menu/>
            <div className="container w-25 bg-primary form rounded p-5">
                <h4>Update Course</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateCourse)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Course Name: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                defaultValue=""
                                id="courseName"
                                onChange={(e) => setCourseName(e.target.value)}
                                { ...register("courseName", {required: true} ) }
                            />
                            {errors.courseName && errors.courseName.type === "required" && <span className='error'>Course Name is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Course Duration: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="courseDuration"
                                { ...register("courseDuration", {required: true}) }
                            />
                            {errors.courseDuration && errors.courseDuration.type === "required" && <span className='error'>Course Duration is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Course Start-date: </label>
                            <input 
                                className="form-control" 
                                type="date" 
                                id="courseStartDate"
                                { ...register("courseStartDate", {required: true }) }    
                            />
                            {errors.courseStartDate && errors.courseStartDate.type === "required" && <span className='error'>Course Start Date is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Course End-date: </label>
                            <input 
                                className="form-control" 
                                type="date" 
                                id="courseEndDate"
                                { ...register("courseEndDate", {required: true }) }    
                            />
                            {errors.courseEndDate && errors.courseEndDate.type === "required" && <span className='error'>Course End Date is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Course Fees: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="courseFees"
                                { ...register("courseFees", {required: true }) }    
                            />
                            {errors.courseFees && errors.courseFees.type === "required" && <span className='error'>Course Fees is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-dark m-4">Save</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = "/view-all-courses">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default UpdateCourse;