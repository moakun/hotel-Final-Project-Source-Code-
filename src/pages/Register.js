import React, {useState} from "react";
import Axios from 'axios';

const Register = () =>{
  return (
    <>
       <div className="register">
            <h1>Register</h1>
            <button className="regButton">Register</button>
        </div>
    </>
  );
}


/*const Register = () => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const addUser = () => {
      Axios.post('http://localhost:3001/create', 
      {fullname: fullname, 
        username: username, 
        email: email, 
        password: password}).then(() => {
          console.log("Success!");
        });
    };

  return (
    <>
       <div className="register">
            <h1>Register</h1>
            <label>Full Name</label>
            <input type="text" onChange={(event) => {setFullname(event.target.value);}} className="regInput"/>
            <label>User Name</label>
            <input type="text" onChange={(event) => {setUsername(event.target.value);}} className="regInput"/>
            <label>E-Mail Address</label>
            <input type="text" onChange={(event) => {setEmail(event.target.value);}} className="regInput"/>
            <label>Password</label>
            <input type="text" onChange={(event) => {setPassword(event.target.value);}} className="regInput"/>
            <button onClick={addUser} className="regButton">Register</button>
        </div>
    </>
  );
};
*/
export default Register;
