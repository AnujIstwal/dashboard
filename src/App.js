import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Navigation from "./components/Navigation";
import Customer from "./components/Customer";
import Solution from "./components/Solution";
import Setting from "./components/Setting";

//global css file
import "./styles/style.css";

const App = () => {
    return (
        <div className="main-container">
            <Navigation />
            <div className="container">
                <Routes>
                    <Route path="/*" element={<Home />}></Route>
                    <Route
                        exact
                        path="/customer"
                        element={<Customer />}
                    ></Route>
                    <Route
                        exact
                        path="/solution"
                        element={<Solution />}
                    ></Route>
                    <Route exact path="/setting" element={<Setting />}></Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;
