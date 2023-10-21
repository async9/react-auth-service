import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Theme } from '@radix-ui/themes';

import Header from '../Header/Header';
import { Content, Overlay } from './styled';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Toaster position='top-right' />
      <Theme appearance='dark'>
        <Overlay>
          <Content>
            <Header />
            {children}
          </Content>
        </Overlay>
      </Theme>
    </>
  );
};

export default Layout;
