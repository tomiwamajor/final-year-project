"use client"

import { Text, Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button,SimpleGrid } from "@chakra-ui/react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import React, {useState, useEffect} from "react"
import ChakraNextImage from "@/components/chakra-nextimage";
import app from "@/firebase.config"
// import { useCart } from "@/context/CartContext";


export default function PageContent() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const db = getFirestore(app);
  // const {addToCart} = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "Products");
        const q = query(colRef); 
        const querySnapshot = await getDocs(q);
    
        const productData = []
        querySnapshot.forEach((doc) => 
          productData.push({
          id: doc.id,
          ...doc.data(),
        })
      );
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading products...</Text>;
  }

  return (
    <>
      <SimpleGrid spacing={9} minChildWidth={350}>
        {products.map((product) => (
          <Card key={product.id}>
            <CardBody>
              <Heading w={'100%'}>
                <ChakraNextImage
                  src={product.image} // Use product image if available
                  quality={100}
                  alt={product.name || "Product Image"}
                  aspectRatio={'1/1'}
                />
              </Heading>
              <Stack mt='6' spacing='1'>
                <Heading size='md'>{product.Title || "Product Name"}</Heading>
                <Text>{product.description || "Product Description"}</Text>
                <Text color='green' fontSize='2xl'>
                  ${product.price || "0.00"}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='green'>
                  Buy now
                </Button>
                <Button variant='ghost' 
                colorScheme='green' 
                // onClick={() => { addToCart(product)}}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
