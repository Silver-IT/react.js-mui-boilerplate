import React from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

const CustomerHomePage = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Button variant="contained" color="primary">
      Customer Home Page. Email is {user.email}
    </Button>
  );
}

export default CustomerHomePage;
