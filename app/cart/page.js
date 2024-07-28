// // components/Cart.js
// import { Box, Text, Stack, Heading, Divider, Button } from '@chakra-ui/react';
// import { useCart } from '@/context/CartContext';

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <Box>
//       <Heading>Your Cart</Heading>
//       {cart.length === 0 ? (
//         <Text>No items in the cart.</Text>
//       ) : (
//         <Stack spacing={4}>
//           {cart.map((item) => (
//             <Box key={item.id} p={4} borderWidth='1px' borderRadius='lg'>
//               <Heading size='md'>{item.productId}</Heading>
//               <Text>Quantity: {item.quantity}</Text>
//               <Button colorScheme='red' onClick={() => removeFromCart(item.productId)}>
//                 Remove
//               </Button>
//               <Divider />
//             </Box>
//           ))}
//         </Stack>
//       )}
//     </Box>
//   );
// };

// export default Cart;

"use client"
import { Text } from "@chakra-ui/react"
import PageContent from "../homepage/page-content/page"
export default function CartPage() {
    return <Text>this is the cart</Text>
}