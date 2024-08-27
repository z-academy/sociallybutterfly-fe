import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "app/components/layout/Logo";

const IcebreakingPage = () => {
  const navigate = useNavigate();

  const handleNewPartnerClick = () => {
    navigate("/match");
  };

  const questions = [
    {
      question: "How did you come up with your username?",
      explanation:
        "Both profiles have similar usernames, which can be a fun topic to discuss.",
    },
    {
      question: "What kind of offers are you most interested in?",
      explanation:
        "Both profiles mention 'offer', so discussing their interests in offers can be engaging.",
    },
    {
      question:
        "What are you currently looking for in your professional journey?",
      explanation:
        "Both profiles are looking for something, so discussing their current professional goals can be insightful.",
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ px: 0 }}>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          p: 3,
        }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Logo />
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleNewPartnerClick}
            sx={{ borderRadius: 8, px: 2, py: 1 }}
          >
            New Partner
          </Button>
        </Box>

        {/* Content */}
        <Box sx={{ margin: { xs: "20px 0", sm: "auto" } }}>
          <Typography variant="h2" fontWeight={700}>
            Meet Rebecca,
          </Typography>
          <Typography variant="h6" color="#3A3A3A" mt={2} fontWeight={400}>
            Discuss shared project goals{" "}
            <Typography variant="span" color="#969696" mt={1}>
              and show genuine interest in each other's expertise.
            </Typography>
          </Typography>
          <List sx={{ mt: 3 }}>
            {questions.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 2,
                  mb: 2,
                  bgcolor: "#f5f5f5",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  alignItems: "flex-start",
                }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: 400, mb: 1 }}>
                  {item.question}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 300, color: "#969696" }}
                >
                  {item.explanation}
                </Typography>
              </ListItem>
            ))}
          </List>
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
        >
          Generate more
        </Button>
      </Box>
    </Container>
  );
};

export default IcebreakingPage;
