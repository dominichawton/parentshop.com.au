import { Flex } from '@chakra-ui/react';
import Helmet from 'react-helmet';
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

function Layout({ children }) {
  return (
    <Flex minH="100vh" flexDir="column">
      <Flex
        flexDir="column"
        maxW="1280px"
        mx="auto"
        flexGrow={1}
        w={{ base: '100%', lg: '90%' }}
        color="gray.800"
      >
        <Flex flexDir="column">
          <Header />
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="start"
            w={{ base: '95%', lg: '100%' }}
            mx={{ base: 'auto', lg: 0 }}
            pt={{ base: '90px', md: '110px', lg: '0' }}
            minH="100vh"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Layout;
