import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from '@radix-ui/themes';
import Cookies from 'universal-cookie';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import { useAuthStore } from '../../store/authStore';
import { postData } from '../../api/postData';

const cookies = new Cookies();

const AuthForm: FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const navigate = useNavigate();
  const location = useLocation();

  const authPath = location.pathname.slice(1);
  const signupFormType = authPath === 'signup';
  const formTitle = authPath.charAt(0).toUpperCase() + authPath.slice(1);

  const { username, firstName, lastName, email, password } = formData || {};

  const mutation = useMutation(postData, {
    onSuccess: (data) => {
      const accessToken = data.accessToken;
      cookies.set('accessToken', accessToken, { path: '/' });
      setAccessToken(accessToken);
      navigate('/', { replace: true });
      toast.success('Successfully logged in');
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response) {
        const errorMessage =
          error.response.data.error || error.response.data.message;
        toast.error(`${errorMessage}`);
      } else {
        toast.error('Error: please try again later');
      }
      console.error(error);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = signupFormType ? { ...formData } : { email, password };
    mutation.mutate({
      url: `${import.meta.env.VITE_DOMAIN}/${authPath}`,
      body: data,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: 'username' | 'firstName' | 'lastName' | 'email' | 'password'
  ) => {
    const eventValue = event.target.value;
    switch (type) {
      case 'username':
        setFormData((prevState) => {
          return {
            ...prevState,
            username: eventValue,
          };
        });
        break;
      case 'firstName':
        setFormData((prevState) => {
          return {
            ...prevState,
            firstName: eventValue,
          };
        });
        break;
      case 'lastName':
        setFormData((prevState) => {
          return {
            ...prevState,
            lastName: eventValue,
          };
        });
        break;
      case 'email':
        setFormData((prevState) => {
          return {
            ...prevState,
            email: eventValue,
          };
        });
        break;
      case 'password':
        setFormData((prevState) => {
          return {
            ...prevState,
            password: eventValue,
          };
        });
        break;
    }
  };

  return (
    <Card size='3'>
      <Flex direction='column' gap='4'>
        <Heading align='center'>Welcome</Heading>
        <form onSubmit={handleSubmit}>
          <Flex direction='column' gap='4'>
            {signupFormType ? (
              <>
                <TextField.Input
                  onChange={(event) => handleChange(event, 'username')}
                  value={username}
                  variant='surface'
                  placeholder='Username'
                />
                <TextField.Input
                  onChange={(event) => handleChange(event, 'firstName')}
                  value={firstName}
                  variant='surface'
                  placeholder='First name'
                />
                <TextField.Input
                  onChange={(event) => handleChange(event, 'lastName')}
                  value={lastName}
                  variant='surface'
                  placeholder='Last name'
                />
              </>
            ) : null}
            <TextField.Input
              onChange={(event) => handleChange(event, 'email')}
              value={email}
              variant='surface'
              placeholder='Email'
            />
            <TextField.Input
              onChange={(event) => handleChange(event, 'password')}
              value={password}
              variant='surface'
              placeholder='Password'
            />
            <Button color='indigo'>{formTitle}</Button>
            {signupFormType ? (
              <Text>
                Already have an account? <Link href='/login'>Login</Link>
              </Text>
            ) : (
              <Text>
                Don't have an account? <Link href='/signup'>Signup</Link>
              </Text>
            )}
          </Flex>
        </form>
      </Flex>
    </Card>
  );
};

export default AuthForm;
