import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Cart = ()=>{

    const {loginWithRedirect,logout, isAuthenticated} = useAuth0();

    return isAuthenticated && (
        <ul>
            <Link to="/pay" ><BsFillCartFill className="cartIcon"/></Link>
        </ul>
    );

}

export default Cart;