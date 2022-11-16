import { useEffect, useState } from "react";
import Menu from "./Menu";

import CoursesService from "../Services/CoursesService";
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";

const ViewCourses = () => {

    const [courses, setCourses] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [gridLayout, setGridLayout] = useState(true);
    
    useEffect(() => {
        CoursesService.getAllCourses().then(response => {
            console.log(response);
            setCourses(response.data);
        }).catch( error => [
            console.log("Error while fetching courses info "+error)
        ])
    },[]);

    const search = (e) =>{
        const searchText = e.target.value;
        setSearchStr(searchText);
        if(searchText.toLowerCase() === 'active'){
            setSearchStr("true");
        }
        if(searchText.toLowerCase() === 'in-active'){
            setSearchStr("false");
        }        
    }
    return (
        <div className="container">
            <Menu />            
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} placeholder="Search...."/>       
                    <button type="text" className="btn btn-secondary m-1 mb-2" onClick={() => setGridLayout(false)}>Grid</button>
                    <button type="text" className="btn btn-secondary m-1 mb-2" onClick={() => setGridLayout(true)}>Table</button>
                </div>
                { gridLayout === false && <CourseGrid courses={courses} searchStr={searchStr}/> }
                { gridLayout === true && <CourseTable courses={courses} searchStr={searchStr}/> }
            </div>
        </div>
    );
}

export default ViewCourses;