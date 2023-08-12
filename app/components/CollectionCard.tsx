import { Box, Flex, Heading, Text } from "@chakra-ui/react"

const CollectionCard = () => {
  return (
    <Flex direction={'column'} p={3} boxShadow={'md'} borderRadius={'2xl'} bg={'white'}>
<Box bg={'red.400'} h={200} borderRadius={'inherit'} w={250}>

</Box>
<Box mt={4}>
    <Box>

<Text as={'strong'}>Tin tin NFT</Text>
    </Box>
</Box>
    </Flex>
  )
}

export default CollectionCard