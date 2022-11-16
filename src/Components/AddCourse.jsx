import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CoursesService from '../Services/CoursesService';
import Menu from './Menu';

const AddCourse = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();
    let navigate=useNavigate();

    const saveCourse = (course) => {
        CoursesService.saveCourse(course).then(response => {
            if(response.status === 201){
                setMessage("Course Added Successfully. Course ID : "+response.data.courseId);
                
            }
        })
    }

    return(
        <div className='conatiner'> 
            <Menu name="Home"/>
            <div className="container w-25 bg-primary form rounded p-5">
                <h4>Add Course</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(saveCourse)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Course Name: </label>
                            <input 
                                className="form-control" 
                                type="text"
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
                                { ...register("courseFees", {required: true }) }    
                            />
                            {errors.courseFees && errors.courseFees.type === "required" && <span className='error'>Course Fees is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-dark m-4">Add Course</button>
                            <a type="button" className="btn btn-lg btn-dark m-4" href = "/view-all-courses">Go Back</a>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCourse;

