"use client"

import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./homepage/page";

export default function Home() {
  return (
    <ChakraProvider>
        <HomePage />
     </ChakraProvider>
  );
}
