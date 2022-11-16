import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLogin from './Components/MainLogin';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import StaffLogin from './Components/StaffLogin';
import AdminLogin from './Components/AdminLogin';
import Home from './Components/Home';
import Menu from './Components/Menu';
import ViewCourses from './Components/ViewCourses';
import ViewCourse from './Components/ViewCourse';
import UpdateCourse from './Components/UpdateCourse';
import DeleteCourse from './Components/DeleteCourse';
import AddCourse from './Components/AddCourse';
import AddStaff from './Components/AddStaff';
import StaffTable from './Components/StaffTable';
import ViewStaff from './Components/ViewStaff';
import UpdateStaff from './Components/UpdateStaff';
import DeleteStaff from './Components/DeleteStaff ';
import AddAdmin from './Components/AddAdmin';
import ViewAdmins from './Components/ViewAdmins';
import UpdateAdmin from './Components/UpdateAdmin';
import DeleteAdmin from './Components/DeleteAdmin';
import ViewAdmin from './Components/ViewAdmin';
import ApplicantLogin from './Components/ApplicantLogin';
import ApplicantRegister from './Components/ApplicantRegister';
import ViewApplicants from './Components/ViewApplicants';
import ViewApplicant from './Components/ViewApplicant';
import UpdateApplicant from './Components/UpdateApplicant';
import Logout from './Components/Logout';
import AddAdmission from './Components/AddAdmission';
import ViewAdmissions from './Components/ViewAdmissions';
import UpdateAdmissionStatus from './Components/UpdateAdmissionStatus';
import ViewAdmission from './Components/ViewAdmission';
import AppliedCourse from './Components/AppliedCourse';
import DropCourseByApplicant from './Components/DropCourseByApplicant';
import ViewStaffs from './Components/ViewStaffs';

function App() {
  return (
    <div className="App">
     <Banner /> 
     
     <BrowserRouter>
     <Routes>
       <Route path='' element={<MainLogin/>}></Route>
       <Route path='/login' element={<MainLogin/>}></Route>
       <Route path='/staff-login' element={<StaffLogin/>}></Route> 
       <Route path='/admin-login' element={<AdminLogin/>}></Route> 

       <Route path='/home' element={<Home/>}></Route>
       
       <Route path='/view-all-courses' element={<ViewCourses/>}></Route>
       <Route path='/add-course' element={<AddCourse/>}></Route>  
       <Route path='/view-course/:courseid' element={<ViewCourse/>}></Route>  
       <Route path='/update-course/:id' element={<UpdateCourse/>}></Route> 
       <Route path='/delete-course/:courseid' element={<DeleteCourse/>}></Route>    

       <Route path='/add-staff' element={<AddStaff/>}></Route>  
       <Route path='/delete-staff/:id' element={<DeleteStaff/>}></Route>  
       <Route path='/update-staff/:id' element={<UpdateStaff/>}></Route>  
       <Route path='/view-all-staffs' element={<ViewStaffs/>}></Route>  
       <Route path='/view-staff/:id' element={<ViewStaff/>}></Route>

       <Route path='/add-admin' element={<AddAdmin/>}></Route>  
       <Route path='/view-all-admins' element={<ViewAdmins/>}></Route>  
       <Route path='/update-admin/:id' element={<UpdateAdmin/>}></Route>  
       <Route path='/delete-admin/:id' element={<DeleteAdmin/>}></Route>  
       <Route path='/view-admin/:id' element={<ViewAdmin/>}></Route>  

       <Route path='/applicant-login' element={<ApplicantLogin/>}></Route> 
       <Route path='/applicant-register' element={<ApplicantRegister/>}></Route> 
       <Route path='/view-all-applicants' element={<ViewApplicants/>}></Route>
       <Route path='/view-applicant/:id' element={<ViewApplicant/>}></Route>
       <Route path='/update-applicant/:id' element={<UpdateApplicant/>}></Route> 

       <Route path='/add-admission' element={<AddAdmission/>}></Route>  
       <Route path='/view-all-admissions' element={<ViewAdmissions/>}></Route>
       <Route path='/view-admission/:id' element={<ViewAdmission/>}></Route>
       <Route path='/view-applied-courses/:id' element={<AppliedCourse/>}></Route>
       <Route path='/drop-applied-courses/:id' element={<DropCourseByApplicant/>}></Route>
       

       <Route path='/update-admission-status/:id' element={<UpdateAdmissionStatus/>}></Route> 

       

       <Route path='/logout' element={<Logout/>}></Route> 

       



           
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
