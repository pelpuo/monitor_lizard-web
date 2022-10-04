import React from "react"
import { Route, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Login from "../pages/Login";
import SignUp1 from "../pages/SignUp1";
import Loading from "../pages/Loading";

function PrivateRoute() {
  const {currentUser, isLoading} = useAuth();
  return currentUser ? <Outlet/>: isLoading?<Loading/>: <Login/>;
}

export default PrivateRoute
