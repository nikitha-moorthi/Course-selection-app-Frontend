import { useEffect, useState } from "react";
import Menu from "./Menu";

import AdminService from "../Services/AdminService";
import AdminTable from "./AdminTable";
import AdminGrid from "./AdminGrid";

const ViewAdmins = () => {

    const [admins, setAdmins] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [gridLayout, setGridLayout] = useState(true);
    
    useEffect(() => {
        AdminService.getAllAdmin().then(response => {
            console.log(response);
            setAdmins(response.data);
        }).catch( error => [
            console.log("Error while fetching courses info "+error)
        ])
    },[]);

    const search = (e) =>{
        const searchText = e.target.value;
        setSearchStr(searchText);
             
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
                { gridLayout === false && <AdminGrid admins={admins} searchStr={searchStr}/> }
                { gridLayout === true && <AdminTable admins={admins} searchStr={searchStr}/> }
            </div>
        </div>
    );
}

export default ViewAdmins;