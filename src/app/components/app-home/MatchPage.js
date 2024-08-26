import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "app/components/layout/Logo";

const MatchPage = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleCodeChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      setErrorMessage("");

      if (value !== "" && index < code.length - 1) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleMatchMeClick = () => {
    if (code.every((digit) => digit !== "")) {
      navigate("/icebreaking");
    } else {
      setErrorMessage("Please complete the code before proceeding.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ px: 0 }}>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "flex-start",
          p: 3,
        }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Logo />
        </Box>

        {/* Content */}
        <Box
          sx={{
            my: 4,
            textAlign: "left",
            borderRadius: "11px",
            background: "#f5f5f5",
            margin: { xs: "0 2", sm: "auto" },
            height: "auto",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 4, px: { xs: 2, sm: 4 } }}
          >
            <Box sx={{ mr: { xs: 0, sm: 2 } }}>
              <Typography variant="h4" mb={1}>
                Your Match Code
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                fontWeight={400}
              >
                Share this with your partner
              </Typography>
            </Box>
            <Box sx={{ ml: { xs: 2, sm: 0 } }}>
              <Typography variant="h2" fontWeight={600}>
                <Typography variant="span" color="primary">
                  #
                </Typography>{" "}
                1324
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "3px",
              background: "#FFF",
              my: 2,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-36px",
                left: "25px",
                display: "flex",
                width: "43px",
                height: "43px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                borderRadius: "43px",
                background: "#FFF",
                my: 2,
              }}
            >
              <Icon
                icon="mi:switch"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "#C3C4D0",
                  transform: "rotate(90deg)",
                }}
              />
            </Box>
          </Box>

          <Box textAlign="left" sx={{ py: 4, px: { xs: 2, sm: 4 } }}>
            <Typography variant="h2" mb={2}>
              Enter Your Partner’s Match Code
            </Typography>
            <Typography variant="body2" color="textSecondary" fontWeight={400}>
              Ask your partner to share their code
            </Typography>
            {errorMessage && (
              <Typography variant="h6" color="error" sx={{ mt: 4, fontWeight: 400 }}>
                {errorMessage}
              </Typography>
            )}
            <Grid container spacing={2} justifyContent="center" my={2}>
              {code.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    id={`code-input-${index}`}
                    variant="outlined"
                    inputProps={{
                      maxLength: 1,
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      style: {
                        textAlign: "center",
                        fontSize: "1.5rem",
                      },
                    }}
                    sx={{ width: "3rem", height: "3rem", borderRadius: 2 }}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    autoFocus={index === 0}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Footer */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            mt: 3,
            borderRadius: 8,
            fontWeight: 600,
            py: 1.5,
            margin: { xs: 0, sm: "auto" },
          }}
          onClick={handleMatchMeClick}
        >
          Match Now
        </Button>
      </Box>
    </Container>
  );
};

export default MatchPage;
