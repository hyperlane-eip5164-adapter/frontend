
import { Flex,Box,Button} from '@chakra-ui/react'
import NextLink from 'next/link';
import {  usePathname} from 'next/navigation'

import { ConnectButton } from '@rainbow-me/rainbowkit';
const navbarLinks=[{
    title:'Home',url:'/'
},{title:'Bridge',url:'/bridge'},{title:'Mint',url:'/mint'},{
title:'History',url:'/history'
}]
const Navbar = () => {
    const pathname=usePathname();

  return (
    <Flex zIndex={12} left={0} top={0} bg={'none'} align={'center'} width={'100%'} pos={'fixed'} justify={'space-between'} px={{base:4,lg:'7'}} py={4}>
        <Box>App logo</Box>
        <Flex gap={8}>

{navbarLinks.map((lnk,i)=><Button key={'nav-link'+i}  pos={'relative'} px={2} _hover={{_before:{w:'60%'}}}  _before={{content:`''`,pos:'absolute',bottom:0,transition:'0.4s ease-out', left:'50%',transform:'translateX(-50%)',w:pathname===lnk.url?'60%':'0',h:'0.25em',bg:'purple.600',borderRadius:'4'}} fontWeight={'medium'} letterSpacing={'wider'} color={'white'} bg={'transparent!important'} borderRadius={'full'} colorScheme={'purple'} as={NextLink} href={lnk.url}>{lnk.title}</Button>)}
          
            
        </Flex>
        <Box>
          {/* <ConnectButton/> */}
          <Box className='connect-btn-wrap'>

            <Button  as={ConnectButton} />
          </Box>
        </Box>
    </Flex>
  )
}

export default Navbar