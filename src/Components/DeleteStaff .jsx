import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import StaffService from "../Services/StaffService";
import Menu from "./Menu";



const DeleteStaff = () => {
    const { id } = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        StaffService.deleteStaff(id).then(response => {
            console.log(response);
            if (response.status === 204) {
               // console.log("Deleted Staff Successfully. Staff ID :: " + id);
                setMessage("Deleted Staff Successfully. Staff Id::" + id);
            }
        }).catch(e => console.log("Exception while deleteing staff. Staff Id:: " + id))
    }, []);

    return (
        <div>
            <div className='container'>
                <Menu name="Home" />
            </div>
            <div className="container w-25 p-5 login-title">
            <div className="container w-100 pt-5 border rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                </div>
                <a className="btn btn-success" href="/view-all-staffs">Go Back</a>
            </div>
        </div>
    )
}

export default DeleteStaff;