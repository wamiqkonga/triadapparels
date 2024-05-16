import { Grid, Typography, Box } from "@mui/material";
import React from "react";

import Button from "@mui/joy/Button";

const MainHeading = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/composition-summer-objects_23-2147809946.jpg?t=st=1715858951~exp=1715862551~hmac=ee0550d83ae36781f3ffbe90e8790d6b21861de5ff1617aa3701ab6c63f9eec2&w=740)'
        }}
      >
        <Grid item sx={{ alignContent: "center" }} xs={12} md={6}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ marginLeft: "45px", fontWeight: "300" ,textShadow: '5px 5px 10px rgba(255, 250, 250, 0.8)' }}
          >
            Triad Apparels
          </Typography>
          <Typography variant="h4" component="h2" sx={{ marginLeft: "45px" }}>
            Clothing Starting from ₹499
          </Typography>
          <Button
            sx={{
              backgroundColor: "black",
              marginLeft: "45px",
              marginTop: "15px",
            }}
          >
            Shop Products
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            style={{
              width: "650px",
              height: "464px",
              float: "right",
              borderRadius: "15px",
              marginTop: "10px",
              marginBottom: "20px",
              marginRight:"20px"
            }}
            src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448749.jpg?t=st=1715857956~exp=1715861556~hmac=30b0087a4c8108ed1e62e1a8311b06f65f54e8ccb238c645bc1d807542dbe980&w=740"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MainHeading;
