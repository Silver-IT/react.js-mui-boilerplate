import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const LandingPage = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Link to='/auth/login'>Login</Link>
      </Grid>
      <Grid item xs={6}>
        <Link to='/auth/register'>Register</Link>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Landing Page
        </Button>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
