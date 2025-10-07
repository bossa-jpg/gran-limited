import React from "react";
import { Box, Typography } from "@mui/material";

export const Sidebar: React.FC = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "#f5f7fa",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        p: 2,
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{
          color: "text.secondary",
          fontSize: "14px",
          textAlign: "center",
          mb: 2,
          fontWeight: 600,
        }}
      >
        Navigation Bar
      </Typography>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="text.disabled" fontStyle="italic">
          Sidebar content
        </Typography>
      </Box>
    </Box>
  );
};
