import React from "react";
import { Link } from "react-router-dom";

const Ty = () =>{

    return(
        <>
        <div className="midlane">
         <h4 className="midtext">
             Thank you for trusting us with your reservation!
         </h4>
         <Link to="/"><button className="btn-primaryC">Click Here to go back to the main page</button></Link>
        </div>
        </>
    )

}

export default Ty;