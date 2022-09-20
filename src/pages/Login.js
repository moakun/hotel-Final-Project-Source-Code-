import React, {useState} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const Login = ()=>{
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    !isAuthenticated && (
    <>
       <div className="register">
            <h1>Login/Register</h1>
            <button className="regButton" onClick={() =>loginWithRedirect()}>Login</button>
        </div>
    </>
    )
  );
}

/*const Login = () => {

    const {loginWithRedirect} = useAuth0();

    const [usernameL, setUsernameL] = useState("");
    const [passwordL, setPasswordL] = useState("");

    const {loginStatus, setLoginStatus} = useState("");
    
    Axios.defaults.withCredentials = true;

    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: usernameL,
        password: passwordL,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
    };
    
  return (
    <>
       <div className="register">
            <h1>Login</h1>
            <label>UserName</label>
            <input type="text" onChange={(e) => {setUsernameL(e.target.value)}} className="regInput"/>
            <label>Password</label>
            <input type="password" onChange={(e) => {setPasswordL(e.target.value)}} className="regInput"/>
            <button className="regButton" onClick={login} onClick={() =>loginWithRedirect()}>Login</button>
            <p>Forgot Account?</p>
            <span>
                <Link to="/register">Register Here!</Link>
            </span>
            
        </div>
    </>
  );
};*/

export default Login;
