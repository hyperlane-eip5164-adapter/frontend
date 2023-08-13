"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,useToast,Menu,MenuItem,MenuButton,MenuList
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar";
import ImageDropArea from "@/app/components/ImageDropArea";
import Footer from "@/app/components/Footer";
import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  MouseEvent,
} from "react";
import PageWrap from "@/app/components/PageWrap";
import { pushImgToStorage, putJSONandGetHash } from "@/app/lib/utils";

import isEmpty from "just-is-empty";
import { useNetwork } from "wagmi";

const MintPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const toast=useToast({duration:3000,position:'top'})

  const initialData = {
    image: "",
    name: "",
    description: "",
    chain: "",
  };
  const [data, setData] = useState(initialData);
  const { chain,chains } = useNetwork();
  const onUploadChange = (hasImage: boolean, files: File[]) => {
    setHasImage(hasImage);
    setFiles(files);
  };
  async function handleFormSubmit(evt: FormEvent<HTMLDivElement>) {
    evt.preventDefault();

    try {
      setIsSubmitting(true);
      // upload the image first and get it's CID
      const imageCid = await pushImgToStorage(files[0]);
      const newData = { ...data, image: `https://${imageCid}.ipfs.w3s.link` };
      console.log({ imageCid, newData });

      const cid = await putJSONandGetHash(newData);
      console.log({ details: cid });
      setData(initialData);
      setIsSubmitting(false);
      // toast({})
    } catch (error) {
      setIsSubmitting(false);
      console.log("error", error);
    }
  }
  function handleInputChange(
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >| MouseEvent<HTMLButtonElement>,
  ) {
    const target = evt.target;
    //@ts-ignore
    const { name, value } = target;

    setData((prev) => ({ ...prev, [name]: name==='chain'?+value: value }));
    console.log(data);
  }

  useEffect(() => {
    if (isEmpty(data["chain"]) || isEmpty(data["name"]) || !hasImage) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [data.chain, data.name, hasImage]);

  return (
    <>
      <Navbar />
      <PageWrap>
        <Box
          mx={"auto"}
          boxShadow={"md"}
          mb={{ base: 6, lg: 8 }}
          maxW={950}
          borderRadius={{ base: "md", lg: "lg" }}
          mt={"90px"}
          minH={"400"}
          bg={"blackAlpha.800"}
        >
          <Box
            mt={"calc(2rem + var(--navbar-height))"}
            maxW={800}
            mx={"auto"}
            py={8}
            px={4}
          >
            <Heading textAlign={"center"} mt={8} mb={8}>
              Create
            </Heading>
            <FormControl onSubmit={(evt) => handleFormSubmit(evt)} as={"form"}>
              <FormLabel fontSize={"lg"} htmlFor="image-select">
                Image
                <Text as={"span"} color={"red.500"}>
                  *
                </Text>
              </FormLabel>
              <Text fontSize={"smaller"} mb={2}>
                Drag or choose your file to upload
              </Text>
              <Box minH={"180px"}>
                <ImageDropArea onUploadChange={onUploadChange} />
              </Box>
              <FormLabel mt={4} htmlFor="name-inp">
                Name
                <Text as={"span"} color={"red.500"}>
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
                placeholder="Item name"
                autoComplete="off"
                mb={4}
                //   _focus={{ borderColor: 'brand.600',outlineColor:'brand.600' }}
              />
              <FormLabel mt={4} htmlFor="desc">
                Description
              </FormLabel>
              <Text fontSize={"smaller"} mb={2}>
                The description will be included on the item's detail page
                underneath its image.
              </Text>
              <Textarea
                my={4}
                onChange={handleInputChange}
                placeholder="Provide a detailed description of your item"
                minH={36}
                maxH={"400px"}
                name="description"
                id="desc"
                resize={"none"}
                // _focusVisible={{ borderColor: 'teal.600' }}
                //   _focus={{ borderColor: 'brand.600' }}
              />
              <FormLabel mt={4} htmlFor="blockchain-inp">
                BlockChain
                {/* <Text as={'span'} color={'red.500'}>
                          *
                        </Text> */}
              </FormLabel>
              <Menu >
    <MenuButton w={'full'} px={3} border={'1px'} borderColor='gray.800' borderRadius={'base'}>Select Chain</MenuButton>
    <MenuList>
      {chains.map((c)=>
      
        <MenuItem onClick={handleInputChange} name="chain" value={c?.id}>{c?.name}</MenuItem>
      )}
        
    </MenuList>
</Menu>
              {/*<Select
                onChange={handleInputChange}
                name="chain"
                minH={12}
                _focus={{ borderColor: "brand.700" }}
                id="blockchain-inp"
                defaultValue={data.chain}
              >
                <option value="" disabled>
                  Select Chain
                </option>
                <option value={"opt 1"}>opt 1</option>
                <option value={"opt 2"}>opt 2</option>
              </Select>*/}
              <Button
                type="submit"
              
                size={"lg"}
                minW={160}
                mt={6}
                isDisabled={!isValid}
                borderRadius={50}
                isLoading={isSubmitting}
                variant={'outline'}
                loadingText="Creating your nft..."
                //   _hover={{ bg: 'purple.300', color: 'purple.700' }}
                //   bg={'purple.700'}
              >
                Create
              </Button>
            </FormControl>
          </Box>
        </Box>
      </PageWrap>
        <Footer />
    </>
  );
};


export default MintPage;
