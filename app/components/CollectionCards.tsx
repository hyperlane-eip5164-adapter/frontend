import { Flex } from "@chakra-ui/react"
import CollectionCard from "./CollectionCard"

const CollectionCards = () => {
    return (
        <Flex minH={450} py={4} px={4} gap={'4'} wrap={'wrap'} >
     <CollectionCard/>
     <CollectionCard/>
     <CollectionCard/>
     <CollectionCard/>
        </Flex>
    )
  }
  
  export default CollectionCards