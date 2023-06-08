import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './components/AccountMenu.js';
import BasicForm from './components/BasicForm.js'

import { useNavigate } from 'react-router-dom';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const navigate = useNavigate();

	const handleOnClick = (page) => {
		navigate('/todo');
	};
  return (
    <Container maxWidth="sm">
	<AccountMenu onClick={handleOnClick} />
	{openForm && <BasicForm />}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
    </Container>
  );
}
