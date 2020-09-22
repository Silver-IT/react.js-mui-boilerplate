import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Button } from "@material-ui/core";

const LandingPage = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Link to="/auth/login">Login</Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/auth/register">Register</Link>
      </Grid>

      <Grid item xs={12}>
        <Box display="inline" mr={2}>
          <Button variant="contained" color="primary" mr={1}>
            Landing Page 1
          </Button>
        </Box>
        <Box display="inline" mr={2}>
          <Button variant="outlined" color="primary" mr={1}>
            Landing Page 2
          </Button>
        </Box>
        <Box display="inline">
          <Button variant="contained" color="secondary">
            Landing Page 3
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
