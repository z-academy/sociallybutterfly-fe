import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Logo from "components/layout/Logo";
import { Icon } from '@iconify/react';

import Navigations from "./Navigations";
import MobileSidebar from "./MobileSidebar";

const LpHeader = () => {
  const AppBarStyled = styled(AppBar)({
    justifyContent: "center",
    minHeight: "65px",
    backgroundColor: "#fff", 
    boxShadow: "none",
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    transition: 'min-height 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  });

  const ToolbarStyled = styled(Toolbar)({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: "#757575",
  });

  const lgUp = useMediaQuery("(min-width: 1280px)");
  const lgDown = useMediaQuery("(max-width: 1279px)");

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBarStyled position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <ToolbarStyled>
          <Logo />
          <Box flexGrow={1} />
          {lgDown ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <Icon icon="material-symbols:menu" />
            </IconButton>
          ) : null}
          {lgUp ? (
            <Stack spacing={1} direction="row" alignItems="center">
              <Navigations />
            </Stack>
          ) : null}
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "2px",
          },
        }}
      >
        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
};

export default LpHeader;
