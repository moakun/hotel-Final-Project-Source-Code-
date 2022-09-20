import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserAlt } from "react-icons/fa";

const LA = ()=>{
  
    const {user,logout, isAuthenticated} = useAuth0();

    return isAuthenticated && (
        <ul>
             <li onClick={logout} className="bano">Logout</li>
             <li className="bano">{user.nickname}</li>
             <FaUserAlt className="userIcon"/>
        </ul>
    );
}
export default LA;