import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useState } from 'react';


const MainLogin =() =>{
    return (
    <div className='mainLogin d-flex flex-column p-5'>
       <a href='/staff-login' className='btn btn-danger d-grid gap-2 col-6 mx-auto' >Login as Staff</a><br></br>
       <a href='/admin-login' className='btn btn-danger d-grid gap-2 col-6 mx-auto' >Login as Admin</a> <br></br>
       <a href='/applicant-register' className='btn btn-danger d-grid gap-2 col-6 mx-auto' >Register as Applicant</a><br></br>
    </div>)
}

export default MainLogin;