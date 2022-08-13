import { Container, Box, chakra, Link, Flex, Stack, Heading, Grid, Text, Img, Button, CloseButton, GridItem, FormControl, Input, FormLabel, Stat } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ArrowRightCircle, Instagram, Phone } from 'react-feather'
export const HomePage = () => {

    const [isShirtVisible, setIsShirtVisible] = useState({ title: '', show: false, src: '' });
    const [sizeCalculator, setSizeCalculator] = useState([
        {
            label: 'Digite sua altura (cm)',
            id: 0,
            value: 0,
        },
        {
            label: 'Digite seu peso (kg)',
            id: 1,
            value: 0,
        },
        {
            label: 'Digite sua circunferência abdominal (cm)',
            id: 2,
            value: 0,
        },

    ])

    const [generateSize, setGenerateSize] = useState<{ state: string, size?: string, loading: boolean }>({
        state: '',
        size: "",
        loading: false,
    })

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
            src: "/camiseta-regata.jpeg",
            title: "Camiseta regata",
        },
        {
            src: "/moletom-preto.jpeg",
            title: "Moletom preto",
        },
    ]

    const updateSizeCalculator = ({ value, id }: { value: any, id: number }) => {
        const update = [...sizeCalculator];

        update[id].value = value;

        setSizeCalculator(update);

    }

    const generateSizeCalculator = async () => {
        setGenerateSize({
            state: 'Gerando tamanho...',
            size: '',
            loading: true,
        })

        await new Promise(resolve => setTimeout(resolve, 1000));

        setGenerateSize({
            state: 'Consultando estilistas...',
            size: '',
            loading: true,
        })

        await new Promise(resolve => setTimeout(resolve, 1000));

        const getNumbers = sizeCalculator.map(({ value }) => {
            const number = parseInt(value.toString());

            return number;
        });


        const sum = getNumbers.reduce((acc, curr) => acc + curr, 0);
        console.log("🚀 ~ file: _home.tsx ~ line 92 ~ generateSizeCalculator ~ sum", sum)


        const tShirtSizes = [
            {
                size: 'P',
                range: 40,
            },
            {
                size: 'M',
                range: 50,
            },
            {
                size: 'G',
                range: 60,
            },
            {
                size: 'GG',
                range: 70,
            },
            {
                size: 'XG',
                range: 80,
            }
        ]

        const average = sum / 3;

        const closest = [...tShirtSizes.map(size => size.range)].reduce((prev: any, curr: any) => {
            return (Math.abs(curr - average) < Math.abs(prev - average) ? curr : prev);
        });

        setGenerateSize({
            state: 'Seu tamanho é...',
            size: tShirtSizes.find(size => size.range === closest)?.size,
            loading: false,
        })
    }

    return (
        <Flex gap={5} bg="gray.900" direction="column">
            <Box justifySelf="fill">
                <Box bg="gray.100" p={5}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Image
                            src="/studio logo.webp"
                            width="100px" height="100px"
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
            </Box>
            <Box justifySelf="start" p={7} color="gray.100">
                <Heading fontSize="3.2em" lineHeight={1.2} maxW={700} fontWeight={700}>
                    Meu tamanho de camiseta
                </Heading>
                <Text mt={3} fontSize="2xl">
                    Escolha qual desses modelos combina com você.
                </Text>
            </Box>
            <Box bg="gray.100" p={4}>

                <Flex
                    overflow="auto"
                    maxW='100vh'
                >
                    {shirtImages.map((item, index) => (
                        <Button
                            onClick={() => [setIsShirtVisible({ title: item.title, src: item.src, show: isShirtVisible.show ? false : true }),
                            window?.scrollTo({ top: 0, behavior: 'smooth' })
                            ]}
                            bg="none"
                            mr={5}
                            key={index}
                            size="2xl"
                            boxShadow="2xl"
                            p={2}
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
                                        {item.title}
                                    </Text>
                                    <ArrowRightCircle />
                                </Flex>
                                <Img
                                    src={item.src}
                                    borderRadius="xl"
                                    objectFit="cover"
                                />
                            </Flex>
                        </Button>
                    ))}
                </Flex>
            </Box >
            <AnimatePresence>
                {isShirtVisible.show && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <Box bg="gray.200" h="200vh"
                            position="absolute"
                            top={0}
                            zIndex={3}
                            w="100%"
                        >
                            <Grid p={4}>
                                <GridItem justifySelf="end">
                                    <CloseButton onClick={() => setIsShirtVisible({ title: '', show: false, src: '' })} />
                                </GridItem>
                                <GridItem>
                                    <Text>Voce está visualizando:</Text>
                                    <Heading>
                                        {isShirtVisible.title}
                                    </Heading>
                                    <Img
                                        mt={3}
                                        borderRadius="xl"
                                        w="100%"
                                        h="250px"
                                        objectFit="cover"
                                        objectPosition="center"
                                        src={isShirtVisible.src}></Img>
                                </GridItem>
                                <GridItem w="100%" mt={8} >
                                    <FormControl>
                                        <Stack spacing={4}>
                                            {sizeCalculator.map((item) => (
                                                <div key={item.id}>
                                                    <FormLabel>{item.label}</FormLabel>
                                                    <Input
                                                        onChange={event => updateSizeCalculator({ id: item.id, value: event.target.value })}
                                                        type="number"
                                                        bg="gray.400"
                                                        size="lg"
                                                    />
                                                </div>
                                            ))}
                                            <Button
                                                _hover={{ bg: 'gray.700' }}
                                                isLoading={generateSize.loading}
                                                onClick={() => generateSizeCalculator()} color="gray.100" bg="blue.600" size="lg">Gerar</Button>
                                        </Stack>
                                    </FormControl>
                                </GridItem>
                                {generateSize.state.length ? (
                                    <GridItem mt={8}>
                                        <Text>{generateSize.state}</Text>
                                        {generateSize.size && (
                                            <Heading>Camiseta {generateSize.size}</Heading>
                                        )}
                                    </GridItem>
                                ) : ''}
                            </Grid>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Flex >
    )
}
