import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ConfirmN = () =>{

    const {isAuthenticated, loginWithRedirect} = useAuth0();

    return !isAuthenticated &&(
        <>
         <button className="getRoomButton" onClick={() =>loginWithRedirect()}>Get This Room</button>
        </>
    )

}

export default ConfirmN;