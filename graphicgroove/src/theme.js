// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,    // Extra small devices (phones)
      sm: 600,  // Small devices (tablets)
      md: 900,  // Medium devices (small laptops)
      lg: 1200, // Large devices (desktops)
      xl: 1536, // Extra large devices (large desktops)
      xxs: 320, // Extra extra small devices (very small phones)
    },
  },
});

export default theme;