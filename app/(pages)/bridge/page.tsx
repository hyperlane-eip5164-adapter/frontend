
'use client'
import CollectionCards from '@/app/components/CollectionCards'
import Navbar from '@/app/components/Navbar'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const BridgePage = () => {
  return (
    <Box>
    <Navbar/>
  <Flex  mt={'90px'}  >
    <Flex gap={6} mx={'auto'}>

    <Box maxW={900} mb={6} boxShadow={'base'} pb={6} borderRadius={'lg'} bg={'whiteAlpha.600'}>
<Flex bg={'white'} p={4} borderTopRadius={'lg'} mb={4}>
<Text as='strong'>Your NFTs on &lt;chain?&gt; </Text>
</Flex>
<CollectionCards/>
    </Box>
    

    <Box  minW={250} boxShadow={'base'} borderRadius={'lg'} bg={'white'} p={6}>
      right side
    </Box>
    </Flex>
  </Flex>
    </Box>
  )
}

export default BridgePage