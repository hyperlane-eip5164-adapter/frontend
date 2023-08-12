'use client'
import {Flex, Image}from '@chakra-ui/react'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import { Box, Heading, Text } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Navbar/>
      <Box inset={0} p={1} pos='fixed' minH={'600'} bg={'var(--gradient-bg)'}>
<Flex gap={6} pt={'120px'} overflowY={'auto'}  h={'full'} bg={'whiteAlpha.400'} backdropFilter={'auto'} backdropBlur={'20px'}  borderRadius={'lg'}>
<Box  pl={10} minW={250}>

<Heading size={'2xl'} color={'white'}>
  Bridge, Swap & Mint
</Heading>
<Text fontSize={'5xl'}>
  your NFTs.
</Text>
<Text maxW={600} py={4}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officia obcaecati dolor placeat dolorum non id nobis adipisci, iure, similique iusto porro consectetur distinctio sapiente ad alias veniam, iste voluptatum! Dolorum natus sint quisquam. Recusandae commodi cumque labore unde in!
</Text>
</Box>

<Box>
  <Image mixBlendMode={'darken'} maxW={600} alt='' src={'/images/nft.jpg'}/>
</Box>
</Flex>
</Box>
           </>
  )
}
