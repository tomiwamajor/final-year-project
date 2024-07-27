import React from 'react';
import { signInWithPopup } from '../lib/firebaseConfig';
import { auth, provider } from '../lib/firebaseConfig';
import { Container, Button } from '@chakra-ui/react';
import ChakraNextImage from './chakra-nextimage';
import { Box } from '@chakra-ui/react';
import google from "@/public/icons/google.png"

const GoogleSignIn = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <Container textAlign={'center'}>
      <Button onClick={handleSignIn}
      border={'none'}
      fontSize={20}
      pt={3}
      pb={3}
      pr={6}
      pl={6}
      cursor={'pointer'}
      borderRadius={3}
      backgroundColor={'green'}
      >Sign In with Google</Button>
    </Container>
  );
};

export default GoogleSignIn;
