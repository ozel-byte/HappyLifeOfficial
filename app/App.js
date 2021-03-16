import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import Dashboard from "./dashboard";
import BaulRecuerdos from "./BaulRecuerdos";
import AboutUs from "./AboutUs";
import SignUp2 from "./SignUp2";
import DiarioEmocional from "./DiarioEmocional";


function App() {
    return(
        <Router>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/SignIn">
                <SignIn/>
            </Route>
            <Route path="/SignUp">
                <SignUp/>
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
            <Route exact path="/diario">
                <DiarioEmocional/>
            </Route>
            <Route path="/prueba2">
                <SignUp2/>
            </Route>
        </Router>
    )
}
export default App;