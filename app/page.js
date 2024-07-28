"use client"

import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./homepage/page";
// import { CartProvider } from "@/context/CartContext";

export default function Home() {
  return (
    <ChakraProvider>
      {/* <CartProvider> */}
        <HomePage />
      {/* </CartProvider> */}
     </ChakraProvider>
  );
}
