import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from 'components/layout/Logo';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const MobileSidebar = () => {
	const [toggle, setToggle] = useState(false)
	const [toggle2, setToggle2] = useState(false)

	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/app');
  };

	return (
		<>
			<Box px={3}>
				<Logo />
			</Box>
			<Box p={3}>

				<Stack direction="column" spacing={2} >
					<Button color="primary" variant="contained" onClick={handleClick}>Try now for free</Button>
				</Stack>
			</Box>
		</>


	);
};

export default MobileSidebar;
