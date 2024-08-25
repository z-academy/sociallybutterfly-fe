import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const LinkStyled = styled(Link)({
  height: "60px", // Example height, adjust as needed
  width: "180px", // Example width, adjust as needed
  overflow: "hidden",
  display: "block",
});

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src="/images/logo.png"
          alt="logo"
          style={{ width: "180px", height: "auto" }}
        />
      </Box>
    </LinkStyled>
  );
};

export default Logo;
