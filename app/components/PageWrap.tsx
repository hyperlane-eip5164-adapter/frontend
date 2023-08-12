import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
const PageWrap = ({children,mw,...props}:{children:ReactNode,mw?:number|string}) => {
  return (
    
    <Box mx={'auto'} {...props} mb={{base:6,lg:8,xs:3}} maxW={mw} borderRadius={{base:'md',lg:'lg'}} mt={'90px'} minH={'400'} bg={'var(--body-bg)'} >
{children}
    </Box>
  )
}

export default PageWrap