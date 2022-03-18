import React, { useContext } from "react";
import { Route, useNavigate, Navigate } from 'react-router-dom'
import Context from "../Context/Context";

const PrivateRoute = ({ children, redirectTo }) => {
  const { auth } = useContext(Context)
  const navigate = useNavigate()

  return auth === true ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute