import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
// import Logo from "@/app/dashboard/layout/shared/logo/Logo"

const MobileSidebar = () => {
	const [toggle, setToggle] = useState(false)
	const [toggle2, setToggle2] = useState(false)

	return (
		<>
			<Box px={3}>
				{/* <Logo /> */}
			</Box>
			<Box p={3}>

				<Stack direction="column" spacing={2} >
					<Button color="primary" variant="contained" href="/auth/login">Sign in</Button>
				</Stack>
			</Box>
		</>


	);
};

export default MobileSidebar;
