"use client";

import { Flex, Button, IconButton, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "@/firebase.config"
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

export default function NavSection() {
  const [display, changeDisplay] = useState('none');
  const [user, setUser] = useState(null);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Set up listener for cart items when user logs in
        const db = getFirestore(app);
        const cartQuery = query(collection(db, "Cart"), where("userId", "==", user.uid));
        console.log({ cartQuery })
        const cartUnsubscribe = onSnapshot(cartQuery, (snapshot) => {
          setCartItemsCount(snapshot.docs.length);
        });
        return () => cartUnsubscribe();
      } else {
        setUser(null);
        setCartItemsCount(0);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <Flex>
      <Flex>
        <Flex w={'90vw'}
          ml={'auto'} 
          mr={'auto'} 
          mt={'0'} 
          mb={'0'} 
          display={['none', 'none', 'flex', 'flex']} 
          alignItems={'center'} 
          justifyContent={'right'}>
          <NextLink href="/" passHref>
            <Button as="a" 
              variant='ghost' 
              aria-label='Home' 
              my={5}
              w='100%'>
              Home
            </Button>
          </NextLink>
          <NextLink href="/cart" passHref>
            <Button as="a" 
              variant='ghost' 
              aria-label='cart' 
              my={5} 
              w='100%'>
              Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
            </Button>
          </NextLink>
          {user ? (
            <>
              <Text my={5} w='100%' textAlign='center'>{user.displayName || user.email}</Text>
              <Button variant='ghost' aria-label='Logout' my={5} w='100%' onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <NextLink href="/auth/login" passHref>
              <Button as="a" 
                variant='ghost' 
                aria-label='Login' 
                my={5} 
                w='100%'>
                Login
              </Button>
            </NextLink>
          )}
        </Flex>

        <IconButton aria-label='Open Menu' 
        size='lg' 
        ml={5}
        mt={3} 
        icon={<HamburgerIcon/>} 
        display={['flex', 'flex', 'none', 'none']} 
        onClick={()=>changeDisplay('flex')}/>

        <Flex w={'100vw'} 
          bgColor="gray.50" 
          zIndex={20} 
          h={'100vh'} 
          pos={'fixed'} 
          top={0} 
          left={0} 
          overflow={'auto'} 
          flexDir={'column'} 
          display={display}>
          <Flex justify={'flex-start'}>
            <IconButton mt={2} 
              mr={5}
              marginTop={3} 
              aria-label="Close Menu" 
              size={'lg'} 
              icon={<CloseIcon/>} 
              onClick={()=>changeDisplay('none')}/> 
          </Flex>
        <Flex flexDir={'column'} 
          alignItems={'center'}>
          <NextLink href="/" passHref>
              <Button as="a" 
                variant='ghost' 
                aria-label='Home'
                my={5} 
                w='100%'>
                Home
              </Button>
            </NextLink>
            <NextLink href="/cart" passHref>
              <Button as="a" 
                variant='ghost' 
                aria-label='cart' 
                my={5} 
                w='100%'>
                Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
              </Button>
            </NextLink>
            {user ? (
              <>
                <Text my={5} w='100%' textAlign='center'>
                  {user.displayName || user.email}
                </Text>
                <Button variant='ghost' aria-label='Logout' my={5} w='100%' onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <NextLink href="/auth/login" passHref>
                <Button as="a" 
                  variant='ghost' 
                  aria-label='Login' 
                  my={5} 
                  w='100%'>
                  Login
                </Button>
              </NextLink>
            )}
        </Flex>
        </Flex>
      </Flex>
    </Flex>
   );
}
