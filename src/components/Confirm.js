import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";

const Confirm = () =>{

    const {isAuthenticated} = useAuth0();

    return isAuthenticated &&(
        <>
         <Link to="/pay"><button className="getRoomButton" >Get This Room</button></Link>
        </>
    )

}

export default Confirm;