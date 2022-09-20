import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LNA = ()=>{
  
    const {loginWithRedirect,logout, isAuthenticated} = useAuth0();

    return !isAuthenticated && (
        <ul>
        <li onClick={() =>loginWithRedirect()} className="bano">Login/Register</li>
        </ul>
    );
}
export default LNA;