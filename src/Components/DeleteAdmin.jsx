import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AdminService from "../Services/AdminService";
import Menu from "./Menu";

const DeleteAdmin = () => {
    const { id } = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        AdminService.deleteAdmin(id).then(response => {
            if (response.status === 204) {
                console.log("Deleted Admin Successfully. Admin ID :: " + id);
                setMessage("Deleted AdminId: "+ id +" Successfully.");
            }
        }).catch(e => console.log("Exception while deleteing Admin. Admin Id:: " + id))
    }, []);

    return (
        <div>
            <div className='container'>
                <Menu  />
            </div>
            <div className="container w-25 p-5 login-title">
            <div className="container w-100 pt-5 border rounded bg-warning p-5 mt-5">
                <span className="success" >{message}</span><br></br>
            </div>
                <a className="btn btn-success" href="/view-all-admins">Go Back</a>
            </div>
        </div>
    )
}

export default DeleteAdmin;