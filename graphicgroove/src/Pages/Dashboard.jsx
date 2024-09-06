// src/pages/Dashboard.jsx

import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "../components/Header";
import CategoriesOffer from "../components/CategoriesOffer"; // Import CategoriesOffer

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px', // Set a maximum width for the container
        margin: '0 auto', // Center the container
        padding: '1rem', // Add padding for better spacing
        overflow: 'hidden', // Ensure no overflow outside the container
      }}
    >
      {/* Header Section */}
      <Header />

      {/* Content Section */}
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <CategoriesOffer />
        </Grid>
        <Grid item>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
