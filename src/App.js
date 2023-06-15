import React from "react";
import Home from "./component/pages/Home.js";
import About from "./component/pages/About.js";
import Contact from "./component/pages/Contact.js";
import ErrorPage from "./component/pages/ErrorPage.js";
import Navbar from "./component/layout/Navbar.js";
import Adduser from "./component/users/Adduser.js";
import Edituser from "./component/users/Edituser.js";
import User from "./component/users/User.js";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/user/add" Component={Adduser}></Route>
        <Route path="/user/edit/:id" Component={Edituser}></Route>
        <Route path="/user/:id" Component={User}></Route>
        <Route path="*" Component={ErrorPage}></Route>
      </Routes>
    </>
  );
}
export default App;
