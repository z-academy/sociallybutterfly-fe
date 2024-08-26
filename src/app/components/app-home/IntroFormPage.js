import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MobileStepper,
  Container,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Logo from "app/components/layout/Logo";

const steps = 3;

const IntroFormPage = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep < steps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      navigate("/match");
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } else {
      navigate("/app");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ px: 0}}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        p={3}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box sx={{ mt: 4 }}>
          {activeStep === 1 && (
            <>
              <Typography variant="h2" fontWeight={600} gutterBottom>
                How should we call you?
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Your name"
                InputProps={{
                  style: {
                    backgroundColor: "#f5f5f5",
                    borderRadius: 12,
                    padding: "10px 12px",
                  },
                }}
                sx={{ mt: 2, mb: 6 }}
              />
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography variant="h2" fontWeight={600} gutterBottom>
                Introduce yourself
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={2}>
                Your answer will be used to generate interesting ice breaking
                questions
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                placeholder="You can talk about your work, area of study, or passion"
                InputProps={{
                  style: {
                    backgroundColor: "#f5f5f5",
                    borderRadius: 12,
                    padding: "10px 12px",
                  },
                }}
                sx={{ mt: 2, mb: 6 }}
              />
            </>
          )}
        </Box>

        {/* Stepper */}
        <MobileStepper
          variant="progress"
          steps={steps}
          position="static"
          color="secondary"
          activeStep={activeStep}
          sx={{
            mt: 2,
            justifyContent: "space-between",
            bgcolor: "transparent",
            ".MuiMobileStepper-progress": {
              width: { xs: "50%", sm: "85%" },
              bgcolor: "#e0e0e0",
              height: 4,
              borderRadius: 2,
            },
          }}
          backButton={
            <Button
              size="large"
              onClick={handleBack}
              color="secondary"
              variant="contained"
              sx={{ mr: 2 }}
              startIcon={
                <Icon icon="akar-icons:arrow-left" width={20} height={20} />
              }
            >
              Back
            </Button>
          }
          nextButton={
            <Button
              size="large"
              variant="contained"
              onClick={handleNext}
              color="secondary"
              disabled={activeStep === steps - 1 && activeStep === 0}
              sx={{ ml: 1 }}
              endIcon={
                <Icon icon="akar-icons:arrow-right" width={20} height={20} />
              }
            >
              Next
            </Button>
          }
        />
      </Box>
    </Container>
  );
};

export default IntroFormPage;
