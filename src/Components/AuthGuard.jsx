import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = () => {
    
    const navigate = useNavigate();
   
  
    useEffect(() => {
        const user = localStorage.getItem("userName");
        if(user == null){
            navigate("/login");
        }
    });

    return (<div></div>)
}

export default AuthGuard; 