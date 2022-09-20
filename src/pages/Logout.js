import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    
    const {logout, isAuthenticated} = useAuth0();

  return (
      isAuthenticated && (
    <>
       <div className="register">
           <h1>Are you Sure You Want To Logout?</h1>
           <button onClick={logout} className="regButton">Logout</button>
        </div>
    </>
      )
  );
};

export default Logout;
