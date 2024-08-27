import { Grid, Box, Typography } from '@mui/material';
import Logo from '@/app/dashboard/layout/shared/logo/Logo';
import PageContainer from '@/app/components/container/PageContainer';
import AuthResetPassword from '../authForms/AuthResetPassword';

export default function ResetPassword() {
  return (
    <PageContainer title="Reset Password Page" description="Reset your password">
      <Grid container justifyContent="center" spacing={0} sx={{ overflowX: 'hidden' }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={7}
          xl={8}
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: '0.3',
            },
          }}
        >
          <Box position="relative">
            <Box px={3}>
              <Logo />
            </Box>
            
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={5}
          xl={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box p={4} width={400}>
            <Typography variant="h4" fontWeight="700">
              Reset your password
            </Typography>
            <Typography color="textSecondary" variant="subtitle2" fontWeight="400" mt={2}>
              Please enter your new password below.
            </Typography>
            <AuthResetPassword />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
