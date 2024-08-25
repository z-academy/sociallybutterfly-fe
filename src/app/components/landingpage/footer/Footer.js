import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'center'}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}>
        <Box display="flex" justifyContent="center" alignItems={'center'}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            mt: { xs: 6, sm: 0 },
          }}>
          <Typography fontSize="16" color="primary" sx={{
            m: { xs: 2, sm: 6 },
          }}>
            © 2024. All rights reserved.
            <br />A product of {' '}
            <Link target="_blank" href="https://loong.academy/" color="#757575">
              <Typography component="span" display="inline">
                Z.Academy
              </Typography>
            </Link>
            .
          </Typography>
        </Box>
        <Box
          sx={{
            mb: { xs: 4, sm: 0 },
          }}>
          <IconButton id="basic-button" href='mailto:contact@chenyuzhang.com'>
            <Icon icon="mdi:email-outline" width={32} color="#008080" />
          </IconButton>
          <IconButton id="basic-button" target='_blank' href='https://www.linkedin.com/company/loong-academy/'>
            <Icon icon="mdi:linkedin" width={32} color="#008080" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
