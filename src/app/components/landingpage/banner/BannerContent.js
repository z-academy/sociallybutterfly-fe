import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)({
  padding: "13px 48px",
  fontSize: "16px",
});

const BannerContent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/app');
  };

  return (
    <Box mt={8} alignItems={"center"}>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            fontSize: {
              xs: "32px",
              md: "54px",
            },
            lineHeight: {
              xs: "38px",
              md: "60px",
            },
            textAlign: "center",
          }}
        >
          <Typography
            component={"span"}
            variant="inherit"
            color="primary"
            sx={{
              display: "block",
              fontWeight: 800,
              marginBottom: "8px", 
            }}
          >
            Z Academy
          </Typography>
          Revolutionizing Networking and Collaboration
        </Typography>
      </motion.div>
      <Box pt={4} pb={3}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
            delay: 0.2,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={500}
            textAlign="center"
            color="text.secondary"
            sx={{
              mx: { lg: 25, md: 10, xs: 2 },
            }}
          >
            We offers an AI-powered networking platform designed to
            foster inclusive, personalized, and efficient interactions. Perfect
            for educational institutions like universities and training centers,
            as well as corporate HR and L&D departments.
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
          delay: 0.4,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mt={3}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <StyledButton
            variant="contained"
            color="secondary"
            href="mailto:chenyu@z.academy"
            size="medium"
          >
            Contact Us
          </StyledButton>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default BannerContent;
