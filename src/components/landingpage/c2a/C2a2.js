import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledButton2 = styled(Button)({
  padding: "13px 34px",
  fontSize: "16px",
  borderColor: "#fff",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#008080", 
  },
});

const C2a2 = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "primary.main", 
          pt: "30px",
          pb: "30px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={12} lg={5}>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  mt: 4,
                }}
              >
                Sign up today to experience our networking app that fosters
                meaningful connections and collaboration.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={3} mt={3}>
                <StyledButton2
                  variant="outlined"
                  color="inherit"
                  href='mailto:contact@chenyuzhang.com'
                >
                  contact us
                </StyledButton2>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default C2a2;
