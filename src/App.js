import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from './pages/Logout';
import Navbar from "./components/Navbar";
import Pay from "./pages/Pay";
import Ty from "./pages/Ty";
import { Switch, Route } from "react-router-dom";


function App() {
  return(
      <>
      <Navbar />
      <Switch>
        <Route exact path="/ty" component={Ty}/>
        <Route exact path="/pay" component={Pay}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
    )
}

export default App;