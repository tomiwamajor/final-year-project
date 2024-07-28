// // components/PageContent.js
// import { Box, Text, Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, SimpleGrid } from '@chakra-ui/react';
// import React from 'react';
// import { useCart } from '@/context/CartContext';

// const products = [
//   { id: 'product-1', title: 'Chair 1', description: 'A comfortable chair', price: 50 },
//   { id: 'product-2', title: 'Chair 2', description: 'An ergonomic chair', price: 75 },
// ];

// const PageContent = () => {
//   const { addToCart } = useCart();

//   return (
//     <SimpleGrid spacing={9} minChildWidth={350}>
//       {products.map((product) => (
//         <Card key={product.id}>
//           <CardBody>
//             <Stack mt='6' spacing='1'>
//               <Heading size='md'>{product.title}</Heading>
//               <Text>{product.description}</Text>
//               <Text color='green' fontSize='2xl'>
//                 ${product.price}
//               </Text>
//             </Stack>
//           </CardBody>
//           <Divider />
//           <CardFooter>
//             <ButtonGroup spacing='2'>
//               <Button variant='solid' colorScheme='green'>
//                 Buy now
//               </Button>
//               <Button
//                 variant='ghost'
//                 colorScheme='green'
//                 onClick={() => addToCart(product)}
//               >
//                 Add to cart
//               </Button>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       ))}
//     </SimpleGrid>
//   );
// };

// export default PageContent;
