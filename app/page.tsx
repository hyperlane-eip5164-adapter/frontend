"use client";
import { Flex, Image } from "@chakra-ui/react";
import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        inset={0}
        pos="relative"
        minH={"650"}
        as="main"
        bgGradient={"linear(to-r,#000,brand.400)"}
      >
        <Flex
          wrap={"wrap"}
          gap={6}
          pt={"100px"}
          pb={6}
          // overflowY={"auto"}
          h={"full"}
          // minH={'full'}
          bg={"whiteAlpha.400"}
          backdropFilter={"blur(30px)"}
          
        >
          <Box maxW={600} pl={{lg:10,base:6,sm:4}} pr={{lg:6,base:4}} minW={250} py={4} borderRadius={"md"}>
            <Heading
              py={4}
              className="clip-text"
              bgGradient={"linear(to-r,brand.400,yellow)"}
              bgClip={"text"}
              size={"2xl"}
              fontFamily={"inherit"}
            >
              Bridge, Swap & Mint
            </Heading>
            <Text fontSize={"4xl"} color={"white"}>
              Your NFTs.
            </Text>
            <Text fontSize={"lg"} lineHeight={"tall"} py={4} color={"gray.200"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officia obcaecati dolor placeat dolorum non id nobis adipisci,
              iure, similique iusto porro consectetur distinctio sapiente ad
              alias veniam, iste voluptatum! Dolorum natus sint quisquam.
              Recusandae commodi cumque labore unde in!
            </Text>
          </Box>

          <Box maxW={700} flex={1} pos={"relative"} minW={300}>
            <Image  hideBelow={'md'}
              top={"-6"}
              right={"-2"}
              pos={"absolute"}
              maxW={{lg:180,base:120}}
              alt=""
              src={"/images/nft2.png"}
            />
            <Image maxW={600} w={'full'} alt="" src={"/images/nft1.png"} />
            <Image hideBelow={'md'}
              bottom={"-7"}
              left={"-8"}
              pos={"absolute"}
              maxW={{lg:180,base:120}}
              alt=""
              src={"/images/nft3.png"}
            />
          </Box>
        </Flex>
      </Box>

      <Footer/>
    </>
  );
}
