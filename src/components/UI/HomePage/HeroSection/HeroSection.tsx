import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#333", // Change to your preferred background color
        textAlign: "center",
        color: "#fff",
        padding: "0 20px",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Find Your Perfect Flat-mate Today!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "1.5rem",
            marginBottom: "40px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Easily search, share, and find flats tailored to your needs.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Button variant="contained" color="secondary" size="large">
            Share Your Flat
          </Button>
          <Button variant="contained" color="primary" size="large">
            See More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
