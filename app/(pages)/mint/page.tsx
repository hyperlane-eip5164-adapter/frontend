'use client'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Navbar from '@/app/components/Navbar';
import ImageDropArea from '@/app/components/ImageDropArea';
import Footer from '@/app/components/Footer';
import { Web3Storage } from 'web3.storage'
import { ChangeEvent, ChangeEventHandler, FormEvent, useState,useEffect } from 'react';
import Head from 'next/head';
import type { Metadata } from 'next';
import PageWrap from '@/app/components/PageWrap';
import { pushImgToStorage, putJSONandGetHash } from '@/app/lib/utils';

import isEmpty from 'just-is-empty'
export const metadata: Metadata = {

    title:'X-NFT - Mint'
}
const MintPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting,setIsSubmitting]=useState(false);
  const [hasImage,setHasImage]=useState(false);
  const [isValid,setIsValid]=useState(false);
  const initialData={
    image:'',
      name: '',
      description: '',
      chain: '',
  }
  const [data, setData] = useState(initialData);
  
  const onUploadChange=(hasImage: boolean, files: File[])=> {
      setHasImage(hasImage)
      setFiles(files);
  }
  async function handleFormSubmit(evt: FormEvent<HTMLDivElement>) {
      evt.preventDefault();

      try {
        setIsSubmitting(true)
        // upload the image first and get it's CID
          const imageCid = await pushImgToStorage(files[0])
          const newData={...data,image:`https://${imageCid}.ipfs.w3s.link`};
          console.log({imageCid,newData})

        const cid=await putJSONandGetHash(newData)
        console.log({details: cid});
        setIsSubmitting(false)
        setData(initialData)
      } catch (error) {
        setIsSubmitting(false)
          console.log('error', error);
      }
  }
  function handleInputChange(
      evt: ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
  ) {
      const target = evt.target;
      const { name, value } = target;
      setData((prev) => ({ ...prev, [name]: value }));
      console.log(data);
  }


  useEffect(() => {
   
if(isEmpty(data['chain']) ||isEmpty(data['name'])|| !hasImage){
setIsValid(false)
}else{

    setIsValid(true)
}
   
   
  }, [data.chain,data.name,hasImage])
  
  return (
<>
<Box mx={'auto'} boxShadow={'md'} mb={{base:6,lg:8}} maxW={950} borderRadius={{base:'md',lg:'lg'}} mt={'90px'} minH={'400'} bg={'white'} >

         
          <Navbar />
          <Box
              mt={'calc(2rem + var(--navbar-height))'}
              maxW={800}
            
              mx={'auto'}
              py={8}
              px={4}
          >
              <Heading textAlign={'center'} mt={8} mb={8}>
                  Create
              </Heading>
              <FormControl
                  onSubmit={(evt) => handleFormSubmit(evt)}
                  as={'form'}
              >
                  <FormLabel htmlFor="image-select">
                      Image
                      <Text as={'span'} color={'red.500'}>
                          *
                      </Text>
                  </FormLabel>
                  <Text fontSize={14} mb={2}>
                      Drag or choose your file to upload
                  </Text>
                  <Box minH={'180px'}>
                      <ImageDropArea onUploadChange={onUploadChange} />
                  </Box>
                  <FormLabel mt={4} htmlFor="name-inp">
                      Name
                      <Text as={'span'} color={'red.500'}>
                          *
                      </Text>
                  </FormLabel>
                  <Input
                      required
                      value={data.name}
                      minH={12}
                      name="name"
                      onChange={handleInputChange}
                      id="name-inp"
                      placeholder="Item name" autoComplete='off' 
                      mb={4}
                      _focus={{ borderColor: 'purple.600' }}
                  />
                  <FormLabel mt={4} htmlFor="desc">
                      Description
                  </FormLabel>
                  <Text fontSize={14} mb={2}>
                      The description will be included on the item's detail
                      page underneath its image.
                  </Text>
                  <Textarea my={4}
                      onChange={handleInputChange}
                      placeholder="Provide a detailed description of your item"
                      minH={36}
maxH={'400px'}
                      name="description"
                      id="desc"
                      resize={'none'}
                      // _focusVisible={{ borderColor: 'teal.600' }}
                      _focus={{ borderColor: 'purple.600' }}
                  />
                  <FormLabel mt={4} htmlFor="blockchain-inp">
                      BlockChain
                      {/* <Text as={'span'} color={'red.500'}>
                          *
                      </Text> */}
                  </FormLabel>

                  <Select
                      onChange={handleInputChange}
                      name="chain"
                      minH={12}
                      _focus={{ borderColor: 'purple.700' }}
                      id="blockchain-inp" defaultValue={'0'}
                    
                  >
                      <option value='0' disabled>
                          Select Chain
                      </option>
                      <option value={'opt 1'}>opt 1</option>
                      <option value={'opt 2'}>opt 2</option>
                  </Select>
                  <Button
                      type="submit"
                      color={'white'}
                      size={'lg'}
                      minW={160}
                      mt={6}
                      isDisabled={!isValid}
                      borderRadius={50}
                      colorScheme='purple'
                      isLoading={isSubmitting}
                      loadingText='Creating your nft...'
                    //   _hover={{ bg: 'purple.300', color: 'purple.700' }}
                    //   bg={'purple.700'}
                  >
                      Create
                  </Button>
              </FormControl>
          </Box>
      </Box>
          <Footer />
    </>

  );
};

export default MintPage;
