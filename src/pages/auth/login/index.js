import React, { useCallback } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import { LOG_IN } from "../../../common/redux/actions/types";

const LoginPage = () => {
  const isAuthenticated = useSelector(state => !!state.auth.user);
  const dispatch = useDispatch();
  const login = useCallback(() => 
      dispatch({ type: LOG_IN, payload: {
        email: "test@test.com", password: "password"
      }}),
      [dispatch]
  );
      
  const renderLoginPage = () => {
    return <Button variant="contained" color="primary" onClick={login}>
        Login Page
      </Button>;
  }

  const redirectToHomePage = () => {
    return <Redirect to="/customer/home"/>;
  };

  if (isAuthenticated) {
    return redirectToHomePage();
  } else {
    return renderLoginPage();
  }
}

export default LoginPage;
