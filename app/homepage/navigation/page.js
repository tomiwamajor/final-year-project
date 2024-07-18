"use client";

import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/icons/icon-144.png";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function NavSection() {
  const [display, changeDisplay]=useState('none')
  return (
    <Flex>
      <Flex>
        <Flex  w={'90vw'} ml={'auto'} mr={'auto'} mt={'0'} mb={'0'} display={['none', 'none', 'flex', 'flex']} alignItems={'center'} justifyContent={'right'}>
          <NextLink href="/" passHref>
            <Button as="a" variant='ghost' aria-label='Home' my={5} w='100%'>
              Home
            </Button>
          </NextLink>
          <NextLink href="/cart" passHref>
            <Button as="a" variant='ghost' aria-label='cart' my={5} w='100%'>
              Cart
            </Button>
          </NextLink>
          <NextLink href="/auth/login" passHref>
            <Button as="a" variant='ghost' aria-label='Home' my={5} w='100%'>
              Auth
            </Button>
          </NextLink>
        </Flex>

        <IconButton aria-label='Open Menu' size='lg' mr={2} icon={<HamburgerIcon/>} display={['flex', 'flex', 'none', 'none']} onClick={()=>changeDisplay('flex')}/>

        <Flex w={'100vw'} bgColor="gray.50" zIndex={20} h={'100vh'} pos={'fixed'} top={0} left={0} overflow={'auto'} flexDir={'column'} display={display}>
          <Flex justify={'flex-end'}>
            <IconButton mt={2} mr={2} aria-label="Close Menu" size={'lg'} icon={<CloseIcon/>} onClick={()=>changeDisplay('none')}/> 
          </Flex>
        <Flex flexDir={'column'} alignItems={'center'}>
          <NextLink href="/" passHref>
              <Button as="a" variant='ghost' aria-label='Home' my={5} w='100%'>
                Home
              </Button>
            </NextLink>
            <NextLink href="/cart" passHref>
              <Button as="a" variant='ghost' aria-label='cart' my={5} w='100%'>
                Cart
              </Button>
            </NextLink>
            <NextLink href="/auth/login" passHref>
              <Button as="a" variant='ghost' aria-label='Home' my={5} w='100%'>
                Auth
              </Button>
            </NextLink>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
   );
}