import { FC } from 'react';
import { Container } from '@radix-ui/themes';

import AuthForm from '../../AuthForm/AuthForm';
import { Page } from './styled';

const Auth: FC = () => {
  return (
    <Page>
      <Container size='1'>
        <AuthForm />
      </Container>
    </Page>
  );
};

export default Auth;
