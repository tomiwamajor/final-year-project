"use client"
import { Box, Text, Stack, Heading, Button, Flex, Container, border } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, getFirestore, deleteDoc } from 'firebase/firestore';
import app from "@/firebase.config"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavSection from '../homepage/navigation/page';

const formatNumber = (num) => {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const Cart = () => {
    const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
       const auth = getAuth(app);
       const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user);
         setLoading(false);
       });

       return () => unsubscribe();
    }, []);

    useEffect(() => {
       async function fetchCart() {
        if (user) {
          const db = getFirestore(app);
          const cartCollection = collection(db, "Cart");
          const q = query(cartCollection, where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          setCart(querySnapshot.docs.map((doc) => doc.data()));
        } else {
          setCart([]);
        }
       }

       fetchCart();
    }, [user]);

    const removeFromCart = async (productId) => {
        if (!user) return;
        
        const db = getFirestore(app);
        const cartCollection = collection(db, "Cart");
        const q = query(cartCollection, where("userId", "==", user.uid), where("cartId", "==", productId));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const docToDelete = querySnapshot.docs[0];
            await deleteDoc(docToDelete.ref);
            
            // Update the local state
            setCart(prevCart => prevCart.filter(item => item.productId !== productId));
        }
    }

    const total = cart.reduce((acc, item) => {
      const amount = Number(item.amount.replace(/,/g, ''));
      return acc + amount * Number(item.quantity);
    }, 0);

    const formattedTotal = formatNumber(total);

  return (
   <>
    {/* <NavSection /> */}
    <Container mt={5}
      mb={10}
      ml={10}
      mr={10}>
      <Heading textAlign={'center'} fontSize={'20'}>My Cart</Heading>
      {cart.length === 0 ? (
        <Heading textAlign={'center'}>No items in the cart.</Heading>
      ) : (
        <Stack spacing={4}>
          {cart.map((item, index) => (
            <Box
              key={item.id} 
              p={4} 
              borderWidth='1px' 
              borderRadius='lg' 
              boxShadow="md" 
              bg="white"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size='md'>{item.Title}</Heading>
                <Button
                backgroundColor={'green'}
                cursor={'pointer'}
                pt={10}
                pb={10}
                pl={20}
                pr={20}
                color={'white'}
                borderRadius={10}
                border={'none'}
                fontSize={14} 
                onClick={() => removeFromCart(item.cartId)}
                >
                  Remove
                </Button>
              </Flex>
              <Stack mt={2} spacing={1}>
                <Text fontSize={14} color={'black'}>Quantity: {item.quantity}</Text>
                <Text fontSize={14} color={'black'}>Price: {item.amount}</Text>
                <Text fontWeight="bold">
                  {/* Total: ${formatNumber(Number(item.amount.replace(/,/g, '')) * Number(item.quantity))} */}
                </Text>
              </Stack>
          </Box>
          ))}
          <Text fontWeight={'bold'} fontSize={20}  >Total: #{formattedTotal}</Text>
          <Button
          display={'flex'}
          width={'20%'}
          backgroundColor={'green'}
          cursor={'pointer'}
          pt={10}
          pb={10}
          pl={20}
          pr={20}
          color={'white'}
          borderRadius={10}
          border={'none'}
          fontSize={14}>Proceed to checkout</Button>
        </Stack>
   
      )}   
      </Container>
    </>
  );
};

export default Cart;
