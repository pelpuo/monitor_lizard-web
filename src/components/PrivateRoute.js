import React from "react"
import { Route, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Login from "../pages/Login";
import SignUp1 from "../pages/SignUp1";

function PrivateRoute() {
  const {currentUser} = useAuth();
  return currentUser ? <Outlet/>: <Login/>;
}

export default PrivateRoute
