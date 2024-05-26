import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const ExploreAllFlat = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        padding: "50px 0",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Explore All Flats
        </Typography>
        <Typography variant="body1" paragraph>
          Discover a wide range of flats available for sharing in your preferred
          locations. Find the perfect fit for your lifestyle and budget.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <FlatCard />
          <FlatCard />
          <FlatCard />
          <FlatCard />
        </Box>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ marginTop: "30px" }}
        >
          View All Flats
        </Button>
      </Container>
    </Box>
  );
};

const FlatCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Flat Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of the flat.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: $XXXX
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExploreAllFlat;
