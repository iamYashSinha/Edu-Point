
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';

export default function Header() {

const {isOpen, onOpen, onClose} = useDisclosure();

  return (
 
    <>
     <Button zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme='orange' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}> <BiMenuAltLeft size={'20'} /> </Button>

     <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>  EDU HUB</DrawerHeader>
        <DrawerBody>

   <VStack alignItems={'flex-start'} justifyContent={'space-evenly'}> 

      <Button onClick={onClose} variant={'ghost'} colorScheme='orange'>
        <Link to={'/'}>Home</Link>
      </Button>

      <Button onClick={onClose} variant={'ghost'} colorScheme='orange'>
        <Link to={'/videos'}>Videos</Link>
      </Button>

      <Button onClick={onClose} variant={'ghost'} colorScheme='orange'>
        <Link to={'/videos?category=free'}>Free Videos</Link>
      </Button>

      <Button onClick={onClose} variant={'ghost'} colorScheme='orange'>
        <Link to={'/upload'}>Upload</Link>
      </Button>

   </VStack>

   <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
    
    <Button onClick={onClose} colorScheme='orange'>
        <Link to={'/login'}> Log In</Link>
    </Button>

    <Button onClick={onClose} variant={'outline'} colorScheme='orange'>
        <Link to={'/signup'}> Sign Up</Link>
    </Button>

   </HStack>
          

        </DrawerBody>
      </DrawerContent>
     </Drawer>
    </>
  )
}
