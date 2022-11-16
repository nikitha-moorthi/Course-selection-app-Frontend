import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AdmissionService from "../Services/AdmissionService";
import CoursesService from "../Services/CoursesService";
import Menu from "./Menu";


const AddAdmission =()=>{

    let [message, setMessage] = useState("");
    const [courses, setCourses] = useState([]);
    let { register, handleSubmit, formState: {errors}} = useForm();
    let [c, setC] = useState("");

    
    useEffect(() => {
        CoursesService.getAllCourses().then(response => {
           console.log(response.data);
            setCourses(response.data);
            setC(response.data[0].courseId);
            
        }).catch( error => [
            console.log("Error while fetching courses info "+error)
        ])
    
    },[]);
        
    const SubmitForm=(admission)=>{
       /* const courseObj = courses.filter(course => course.courseId == admission.course);
        admission.course = courseObj[0];
        console.log(admission);
        */
        AdmissionService.saveAdmission(admission).then(response => {
            if(response.status === 201){
                setMessage("Applied Successfully");
            }
            else{
                setMessage("Something went wrong");
            }
        }).catch(e => console.log("Exception while fetching admin info "+e));
    }

    return(
        
        <div>
        <Menu name="Home"/>
             <div className="container w-25 login-title" > <h3>Apply for a course</h3>
            </div>
            <div className="container w-25 border rounded border-primary bg-primary p-5" >
                <span className='error'>{message}</span>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <label >Applicant Id: </label>
                    <input 
                        className="form-control" 
                        type="number" 
                        value={localStorage.applicantId} readOnly
                        { ...register("applicant", {required: true})}
                     />
                     { errors.applicant && errors.applicant.type === 'required' && <span className='error'>Applicant Id is required</span>}
                    <br></br>
                    <label > Courses Available</label>
                    <select className="form-control" { ...register("course", {required: true})}>
                    <option value = "">---Select Course---</option>
                    {  
                        courses.map(course =>  <option  value = {course.courseId} >{course.courseName}</option>)
                        
                    }    
                    </select>
                    { errors.course && errors.course.type === 'required' && <span className='error'>Course Name is required</span>}
                    <br></br>
                   
                     <label> Admission Date: </label>
                    <input 
                        className="form-control" 
                        type="date" 
                        id="admissionDate"
                        { ...register("admissionDate", {required: true})}
                    />
                     { errors.admissionDate && errors.admissionDate.type === 'required' && <span className='error'>Admission Date is required</span>}
                     <br></br>
                    
                    <button type="submit" className="btn btn-lg w-10 btn-dark">Apply</button>
                    <a type="button" className="btn btn-lg btn-dark m-4" href = {"/view-applied-courses/"+localStorage.applicantId}>Go Back</a>
                </form>
            </div>
        </div>
    )
}
export default AddAdmission;
/*
   

 <label> Course Id: </label>
                    <input 
                        className="form-control" 
                        type="number" 
                        { ...register("course", {required: true})}
                    />
                     { errors.course && errors.course.type === 'required' && <span className='error'>Course Id is required</span>}
                     <br></br>
*/