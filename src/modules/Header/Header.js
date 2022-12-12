import { Link } from 'react-router-dom';
import {
  AppBar, Box,
  Container,
} from '@mui/material';
import SelectLanguage from './SelectLanguage/SelectLanguage';
import useAuth from "../../hooks/useAuth";
import CustomButton from '../../components/CustomButton/CustomButton';
import { t } from 'i18next';

const Header = () => {
  const { isAuthenticated, resetAuth } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px',
      }}
    >
      <Container>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          gap: '15px', padding: '5px'
        }}>
          <SelectLanguage />

          {isAuthenticated ? (
            <CustomButton
              title={t('signOut')}
              onClick={() => {
                localStorage.removeItem('token');
                resetAuth();
              }}
            >
            </CustomButton>
          )
            : (
              <Box
                component="div"
                display="flex"
                justifyContent="end"
              >
                <CustomButton
                  toBeWrapped={Link}
                  to='/sign-in'
                  title='signIn'
                />

                <CustomButton
                  toBeWrapped={Link}
                  to='/sign-up'
                  title='signUp'
                />
              </Box>
            )
          }
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
