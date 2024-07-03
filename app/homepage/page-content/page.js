import { Box, 
  Text, 
  Card, 
  CardBody, 
  CardFooter, 
  Stack, 
  Heading, 
  Divider, 
  ButtonGroup, 
  Button,
  SimpleGrid } from "@chakra-ui/react";
import ChakraNextImage from "@/components/chakra-nextimage";
import chair1 from '@/public/images/chair-1.jpg'
import chair2 from '@/public/images/chair-2.jpg'
import chair3 from '@/public/images/chair-3.jpg'

export default function PageContent() {
  return (
    <>
      <SimpleGrid spacing={9} minChildWidth={350}>
          <Card>
            <CardBody>
              <Heading w={'100%'}>
                <ChakraNextImage
                  src={chair1}
                  quality={100}
                  alt="chair 1 image"
                  aspectRatio={'1/1'}
                />
              </Heading>
              <Stack mt='6' spacing='1'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                <Text color='green' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='green'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='green'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card>
          <CardBody>
            <Heading w={'100%'}>
              <ChakraNextImage
                src={chair2}
                quality={100}
                alt="chair 1 image"
                aspectRatio={'1/1'}
              />
            </Heading>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='green' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='green'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='green'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
          </Card>

          <Card>
          <CardBody>
            <Heading w={'100%'}>
              <ChakraNextImage
                src={chair3}
                quality={100}
                alt="chair 1 image"
                aspectRatio={'1/1'}
              />
            </Heading>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='green' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='green'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='green'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
          </Card>

          <Card>
            <CardBody>
              <Heading w={'100%'}>
                <ChakraNextImage
                  src={chair1}
                  quality={100}
                  alt="chair 1 image"
                  aspectRatio={'1/1'}
                />
              </Heading>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                <Text color='green' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='green'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='green'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card>
          <CardBody>
            <Heading w={'100%'}>
              <ChakraNextImage
                src={chair2}
                quality={100}
                alt="chair 1 image"
                aspectRatio={'1/1'}
              />
            </Heading>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='green' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='green'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='green'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
          </Card>

          <Card>
          <CardBody>
            <Heading w={'100%'}>
              <ChakraNextImage
                src={chair3}
                quality={100}
                alt="chair 1 image"
                aspectRatio={'1/1'}
              />
            </Heading>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='green' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='green'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='green'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
          </Card>

          <Card>
            <CardBody>
              <Heading w={'100%'}>
                <ChakraNextImage
                  src={chair1}
                  quality={100}
                  alt="chair 1 image"
                  aspectRatio={'1/1'}
                />
              </Heading>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                <Text color='green' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='green'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='green'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card>
          <CardBody>
            <Heading w={'100%'}>
              <ChakraNextImage
                src={chair2}
                quality={100}
                alt="chair 1 image"
                aspectRatio={'1/1'}
              />
            </Heading>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='green' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='green'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='green'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
          </Card>

          <Card>
          <CardBody>
            <Heading w={'100%'}>
              <ChakraNextImage
                src={chair3}
                quality={100}
                alt="chair 1 image"
                aspectRatio={'1/1'}
              />
            </Heading>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='green' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='green'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='green'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
          </Card>
      </SimpleGrid>
    </>
  );
}
