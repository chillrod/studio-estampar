import { Container, Box, chakra, Link, Flex, Stack, Heading, Grid, GridItem, Text, Img, Button } from "@chakra-ui/react"
import Image from "next/image"
import { ArrowRightCircle, Instagram, Phone } from 'react-feather'

export const HomePage = () => {

    const ChakraImage = chakra(Image)

    const aboutUs = [
        {
            title: "Print House",
        },
        {
            title: "Sobre",
        },
    ]

    const shirtImages = [
        {
            src: "/camiseta-regular.jpeg",
            title: "Camiseta regular",
        },
        {
            src: "/camiseta-regular.jpeg",
            title: "Camiseta regata",
        },
        {
            src: "/camiseta-regular.jpeg",
            title: "Camiseta regata",
        },
        {
            src: "/camiseta-regular.jpeg",
            title: "Camiseta regata",
        },
    ]

    return (
        <Grid gap={5} bg="gray.900">
            <GridItem justifySelf="fill">
                <Box bg="gray.100" p={5}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Image
                            src="/studio logo.webp"
                            width="150px" height="150px"
                            objectFit="contain"
                        />
                        <Flex>
                            <Link mr={4} href="https://www.instagram.com/studioestampar/">
                                <Instagram />
                            </Link>
                            <Link href="https://www.instagram.com/studioestampar/">
                                <Phone />
                            </Link>
                        </Flex>
                    </Flex>
                    <Box bg="gray.800" color="gray.100">
                        <Flex p={4}>
                            {aboutUs.map((item, index) => (
                                <Link mr={4} key={index}>{item.title}</Link>
                            ))}
                        </Flex>
                    </Box>
                </Box>
            </GridItem>
            <GridItem justifySelf="start" p={7} color="gray.100">
                <Heading fontSize="3.2em" lineHeight={1.2} maxW={700} fontWeight={700}>
                    Meu tamanho de camiseta
                </Heading>
                <Text mt={3} fontSize="2xl">
                    Escolha qual desses modelos combina com você.
                </Text>
            </GridItem>
            <GridItem bg="gray.100" p={4}>

                <Flex
                    overflow="auto"
                    maxW='100vw'
                >
                    {shirtImages.map((item, index) => (
                        <Button
                            bg="none"
                            mr={5}
                            key={index}
                            size="2xl"
                            boxShadow="2xl"
                            p={3}
                        >
                            <Flex
                                w="250px"
                                direction="column"
                            >
                                <Flex
                                    mb={4}
                                    alignItems="center" justifyContent="space-between"

                                >
                                    <Text fontSize="2xl">
                                        Camiseta Regular
                                    </Text>
                                    <ArrowRightCircle />
                                </Flex>
                                <Img
                                    src="/camiseta-regular.jpeg"
                                    borderRadius="xl"
                                    objectFit="cover"
                                />
                            </Flex>
                        </Button>
                    ))}
                </Flex>
            </GridItem>
        </Grid>
    )
}
