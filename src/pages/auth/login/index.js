import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { LOGIN_REQUEST } from "../../../common/redux/actions/types";

const LoginPage = () => {
  const dispatch = useDispatch();
  const login = useCallback(() => 
      dispatch({ type: LOGIN_REQUEST, payload: {
        email: "test@test.com", password: "password"
      }}),
      [dispatch]
  );
      
  const renderLoginPage = () => {
    return <Box>
      <Link to="/auth/register">Create Account</Link>
      <Button variant="contained" color="primary" onClick={login}>
        Login
      </Button>;
    </Box>
    
  }

  return renderLoginPage();
}

export default LoginPage;
