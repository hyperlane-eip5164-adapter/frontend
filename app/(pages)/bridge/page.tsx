"use client";
import CollectionCards from "@/app/components/CollectionCards";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import PageWrap from "@/app/components/PageWrap";
import { removeCollection } from "@/app/state/slices";
import { RootState } from "@/app/state/store";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useChainModal } from "@rainbow-me/rainbowkit";
import isEmpty from "just-is-empty";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector} from 'react-redux'
import { useAccount, useNetwork,useSwitchNetwork } from "wagmi";



const BridgePage = () => {
  const { openChainModal } = useChainModal();
  const { chain,chains } = useNetwork();
  const { address,isConnected } = useAccount();
  
const dispatch=useDispatch()
  const selectedCollections=useSelector<RootState,any[]>((state)=>state.bridgeCollection.data)
  const handleOpenChainModal=(collection:any)=>{
  }
  console.log({address,isConnected,chains,chain});
  
  return (
    <>
      <Navbar />
      <PageWrap>
        <Box mx={"auto"} mt={"90px"} maxW={"1350px"} mb={6}>
          <Flex px={{ base: 4, lg: 6 }} wrap={"wrap"} gap={6} mx={"auto"}>
            <Box
              maxW={910}
              mb={6}
              boxShadow={"base"}
              pb={6}
              borderRadius={"lg"}
              bg={"blackAlpha.500"}
            >
              <Flex
                gap={6}
                bg={"brand.900"}
                p={4}
                borderTopRadius={"lg"}
                mb={4}
                align={"center"}
              >
                <Text fontSize={"xl"} as="strong" letterSpacing={"wider"}>
                  Your NFTs on{" "}
                </Text>
                <Menu>
                  <MenuButton
                    border={"1px"}
                    fontWeight={"medium"}
                    borderColor={"gray.500"}
                    borderRadius={"full"}
                    minW={"120px"}
                    px={6}
                    py={2}
                    bg={"gray.800"}
                  >
                    Chain
                  </MenuButton>
                  <MenuList>
                    <MenuItem name="departure-chain"> Polygon</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <CollectionCards collections={[0,1,2,3]} />
            </Box>

            <Box
              flex={1}
              minW={280}
              boxShadow={"base"}
              borderRadius={"lg"}
              bg={"black"}
              maxW={450}
            >
              <Flex
                gap={6}
                bg={"brand.900"}
                p={4}
                borderTopRadius={"lg"}
                mb={4}
                align={"center"}
              >
                <Text fontSize={"xl"} as="strong" letterSpacing={"wider"}>
                  Destination Chain{" "}
                </Text>
                <Menu>
                  <MenuButton
                    border={"1px"}
                    fontWeight={"medium"}
                    borderColor={"gray.500"}
                    borderRadius={"full"}
                    minW={"120px"}
                    px={6}
                    py={2}
                    bg={"gray.800"}
                  >
                    Chain
                  </MenuButton>
                  <MenuList>
                    <MenuItem name="destination-chain"> Polygon</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Box 
              p={4}
              >
{!isEmpty(selectedCollections) ?
              <Stack my={4} minH={200} rounded={"lg"}>
                {selectedCollections.map((coll)=>{
                  
              return  <Flex key={crypto.randomUUID()}
                justify={"space-between"}
                  align={"center"}
                  p={3}
                  rounded={"xl"}
                  bg={"gray.800"}
                >
                  <Text
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                   collection {coll}
                  </Text>
                  {/* <IconButton onClick={()=>handleCollectionDelete(coll)}
                    variant={"ghost"}
                    icon={<MdDeleteOutline />}
                    aria-label="delete"
                  /> */}
                </Flex>
              })}
               
                    </Stack>
              :
              <Flex
              justify={"center"}
              align={"center"}
              px={3}
              py={6}
              minH={200}
              my={4}
              rounded={"xl"}
              bg={"gray.800"}
            >
              <Text color={'gray.400'} textAlign={'center'}
fontSize={'xl'}
>
                No selected collections
              </Text>
             
            </Flex>
              }
              <Flex w={"full"}>
                <Button
                  w={"full"}
                  mx={"auto"}
                  maxW={350}
                  size={"lg"}
                  rounded={"full"}
                  variant={"outline"}
                  letterSpacing={"widest"}
                >
                  Continue Bridge
                </Button>
              </Flex>
            </Box>
            </Box>

          </Flex>
        </Box>
      </PageWrap>
      <Footer/>
    </>
  );
};

export default BridgePage;
