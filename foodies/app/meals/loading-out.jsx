import React from "react";
import classes from "./Loading.module.css";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import Grid from '@mui/material/Grid';


export default function Loading() {
  return (
    <>
      <p className={classes.loading}>Fetching meals...</p>
      <Grid container wrap="nowrap" sx={{marginTop:'1.5rem',display:'flex',justifyContent:'center',marginBottom:'1.5rem'}}>
      {[...Array(3)].map((_, index) => (
        <Box key={index} sx={{ width: '25%' }}>
          <Skeleton variant="rectangular" width={300} height={240} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton width={300}  />
            <Skeleton width={300}  />
          </Box>
        </Box>
      ))}
      </Grid>
    </>
  );
}
