"use client";

import { useCart } from "@/context/CartContext";
import { Box, Text, Stack, Heading, Divider } from "@chakra-ui/react";

export default function Cart() {
  const { cart } = useCart();

  return (
    <Box>
      <Heading>Your Cart</Heading>
      {cart.length === 0 ? (
        <Text>No items in the cart.</Text>
      ) : (
        <Stack spacing={4}>
          {cart.map((product, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Heading size="md">{product.Title}</Heading>
              <Text>{product.description}</Text>
              <Text color="green" fontSize="2xl">
                ${product.price}
              </Text>
              <Divider />
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}
