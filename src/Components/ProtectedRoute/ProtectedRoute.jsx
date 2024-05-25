import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

//to wrap its children   msg
const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  //we only need user from the state
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      //after signed in it should redirect it to whhere he was before
      navigate("/auth", { state: { msg, redirect } });
    }
    //on every user change
  }, [user]);

  return children;
};

// pyament ---> /auth (/)

export default ProtectedRoute;
