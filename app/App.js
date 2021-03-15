import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./dashboard";
import BaulRecuerdos from "./BaulRecuerdos";
import AboutUs from "./AboutUs";
import NavBar from "../componenentes/NavBar";
import DiarioEmocional from "./DiarioEmocional";


function App() {
    return(
        <Router>
            <Route exact path="/">
                <SignIn/>
            </Route>
            <Route path="/SignUp">
                <SignUp/>
            </Route>
            <Route path="/home">
                <NavBar/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/BaulRecuerdos">
                <BaulRecuerdos/>
            </Route>
            <Route path="/aboutUs">
                <AboutUs/>
            </Route>
            <Route exact path="/DiarioEmocional">
                <DiarioEmocional/>
            </Route>
        </Router>
    )
}
export default App;