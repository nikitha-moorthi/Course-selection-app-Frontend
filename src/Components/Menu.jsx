import React, { useState } from "react";
import { useEffect, useReducer } from "react";
import AuthGuard from "./AuthGuard";
import Home from "./Home";

let Menu = () => {
    const initialMenus = [ 
                {label:'Home', color:'btn btn-primary m-1', path:'/home', role:['admin','staff','applicant']},
                {label:'View Courses', color:'btn btn-primary m-1', path:'/view-all-courses',role:['staff', 'admin','applicant']},
                {label:'Add Course', color:'btn btn-primary m-1', path:'/add-course',role:['staff']},
                {label:'Add Staff', color:'btn btn-primary m-1', path:'/add-staff',role:['admin']},
                {label:'View Staffs', color:'btn btn-primary m-1', path:'/view-all-staffs',role:['admin']},
                {label:'View Staff', color:'btn btn-primary m-1', path:'/view-staff/'+localStorage.staffID,role:['staff']},
                {label:'View Admins', color:'btn btn-primary m-1', path:'/view-all-admins',role:['admin']},
                {label:'Add Admin', color:'btn btn-primary m-1', path:'/add-admin',role:['admin']},
                {label:'Add Admission', color:'btn btn-primary m-1', path:'/add-admission',role:['applicant']},
                {label:'View Applicants', color:'btn btn-primary m-1', path:'/view-all-applicants', role:['admin']},
                {label:'View Admissions', color:'btn btn-primary m-1', path:'/view-all-admissions', role:['admin']},
                {label:'View Applied Courses', color:'btn btn-primary m-1', path:'/view-applied-courses/'+localStorage.applicantId, role:['applicant']},
                {label:'View Applicant', color:'btn btn-primary m-1', path:'/view-applicant/'+localStorage.applicantId,role:['applicant']}];
    

    const [menus, setMenus] = useState(initialMenus);
    const [role , setRole] = useState(); 
   
    useEffect(() => {
        let userName = localStorage.getItem("userName");
        if(userName != null){
            userName = JSON.parse(userName);
            setRole(userName.role);
        }
    
        
              
    });

        return (<div >
                <AuthGuard />
                <div>
                        <a href='/logout' className='link rounded-circle text-primary justify-content-right'>Logout</a>
                </div>
                
                <div className="container pr-2 bg-dark d-flex justify-content-left">
                {
                    menus.filter(menu => menu.role.includes(role)).map( menu => (
                    
                        <a href={menu.path} className={menu.color}>{menu.label}</a>
                    
                    ))
                }
                </div>

                
               
              </div>);
    
}

export default Menu; 