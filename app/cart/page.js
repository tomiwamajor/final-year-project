// "use client"

// import { SimpleGrid, Text} from "@chakra-ui/react"
// import { useCart } from "@/context/CartContext";

// export default function Cart() {
//   const {cart} = useCart();

//   return (
//     <SimpleGrid minChildWidth={350} margin={30}>
//         {cart.length === 0 ? (
//           <Text>Your cart is empty.</Text>
//         ) : (
//           cart.map((product, index) => (
//             <div key={index}>
//               <Text>{product.Title}</Text>
//               <Text>{product.description}</Text>
//               <Text>${product.price}</Text>
//             </div>
//           ))
//         )}
//       </SimpleGrid>
//   );
// }
