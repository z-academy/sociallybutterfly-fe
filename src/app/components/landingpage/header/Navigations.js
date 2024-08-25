import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Navigations = () => {

	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/app');
  };


	// demos
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// pages

	const [open2, setOpen2] = useState(false);

	const handleOpen2 = () => {
		setOpen2(true);
	};

	const handleClose2 = () => {
		setOpen2(false);
	};



	return (
		<>
			<Button color="primary" variant="outlined" size='medium' onClick={handleClick}>
				Try now for free
			</Button>
		</>
	);
};

export default Navigations;
