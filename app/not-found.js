'use client'

import { Center, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Center height={"100vh"}>
      <Text fontSize={30}
      textAlign={'center'}
      >Unfortunately, page does not exist</Text>
    </Center>
  );
}
