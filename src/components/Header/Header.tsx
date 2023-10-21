import { FC } from 'react';
import { Button } from '@radix-ui/themes';
import Cookies from 'universal-cookie';

import { Root } from './styled';
import { useAuthStore } from '../../store/authStore';
import ReactIcon from '../Icons/ReactIcon';

const cookies = new Cookies();

const Header: FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const removeAccessToken = useAuthStore((state) => state.removeAccessToken);

  const handleLogout = () => {
    cookies.remove('accessToken', { path: '/' });
    removeAccessToken();
  };

  return (
    <Root>
      <ReactIcon />
      {accessToken ? (
        <Button onClick={handleLogout} color='indigo'>
          Logout
        </Button>
      ) : null}
    </Root>
  );
};

export default Header;
