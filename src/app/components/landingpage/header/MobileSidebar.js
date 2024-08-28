import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from "app/components/layout/Logo";
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const MobileSidebar = () => {
	const { logout } = useAuth();

	const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/app');
  };


  const handleLogoutClick = async () => {
    try {
      await logout();
      navigate('/auth/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

	return (
		<>
			<Box px={3}>
				<Logo />
			</Box>
			<Box p={3}>

				<Stack direction="column" spacing={2} mb={2} >
					<Button color="secondary" variant="contained" href="mailto:chenyu@z.academy">Contact Us</Button>
				</Stack>
			</Box>
		</>


	);
};

export default MobileSidebar;
