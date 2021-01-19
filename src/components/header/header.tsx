import {
  Flex,
  Box,
  UnorderedList,
  Text,
  ListItem,
  chakra,
  useDisclosure,
  Fade,
  Button,
} from "@chakra-ui/react";
import Img from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import MobileNavItem from "./mobileNavItem";

import NavItem from "./desktopNavItem";
// @ts-ignore
import CloseIcon from "./../../assets/close-outline.svg";
// @ts-ignore
import MenuIcon from "./../../assets/menu-outline.svg";

function Header() {
  const { isOpen, onToggle } = useDisclosure();

  const handleOnClick = () => onToggle();

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "parentshop-logo-simple-small.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <>
      <chakra.nav
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="start"
        boxShadow={{ base: "lg", lg: "none" }}
        position={{ base: "fixed", lg: "relative" }}
        zIndex="0"
        w="100%"
        bg="white"
      >
        <Flex
          w={{ base: "95%", lg: "100%" }}
          mx={{ base: "auto", lg: "0" }}
          alignItems="center"
          justifyContent="space-between"
          py={3}
          display={{ base: "none", lg: "flex" }}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Box>
            <Text color="primary.500" fontWeight="600" fontSize="md">
              Just released: No Scaredy Cats for the Classroom. Click here to
              enroll.
            </Text>
          </Box>

          <UnorderedList
            styleType="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="md"
          >
            <Button
              colorScheme="gray"
              variant="link"
              size="md"
              mr={8}
              _hover={{ textDecoration: "none", color: "primary.500" }}
            >
              <Link to="#">Sign in</Link>
            </Button>
            <Button colorScheme="secondary" size="md" mb={0}>
              <Link to="#">Sign up</Link>
            </Button>
          </UnorderedList>
        </Flex>
        <Flex
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          w={{ base: "90%", lg: "100%" }}
          mx={{ base: "auto", lg: "0" }}
          py={{ base: 1, md: 4, lg: 8 }}
        >
          <Flex my={{ base: 4, md: 0 }} cursor="pointer">
            <Link to="/">
              <Box w="130px">
                <Img
                  fluid={data.logo.childImageSharp.fluid}
                  alt="parentshop logo"
                />
              </Box>
            </Link>
          </Flex>
          <UnorderedList
            display={{ base: "none", lg: "flex" }}
            alignItems="center"
            justifyContent="space-between"
            styleType="none"
          >
            <NavItem name="courses" />
            <NavItem name="professionals" />
            <NavItem name="parents" />
            <NavItem name="shop" />
            <NavItem name="about" />
            <NavItem name="contact" />
          </UnorderedList>

          <chakra.button
            display={{ base: "flex", lg: "none" }}
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w={9}
            h={9}
            border="1px solid"
            borderRadius="8px"
            borderColor="gray.200"
            onClick={handleOnClick}
          >
            <MenuIcon />
          </chakra.button>
        </Flex>
      </chakra.nav>
      <Fade in={isOpen}>
        <Box
          position="fixed"
          bgColor="#00000050"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="99"
          display={{ base: "block", lg: "none" }}
        >
          <Flex
            display={{ base: "flex", lg: "none" }}
            alignItems="center"
            justifyContent="space-between"
            styleType="none"
            flexDir="column"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bgColor="white"
            boxShadow="lg"
            py={{ base: 3, md: 6 }}
            m={3}
            borderRadius="lg"
            textAlign="center"
            zIndex="999"
          >
            <UnorderedList styleType="none" ml={0} w="100%" px={6} pb={6}>
              <ListItem mb={6}>
                <Flex my={{ base: 4, md: 0 }} cursor="pointer">
                  <Link to="/">
                    <Box w="125px">
                      <Img
                        fluid={data.logo.childImageSharp.fluid}
                        alt="parentshop logo"
                      />
                    </Box>
                  </Link>
                </Flex>
              </ListItem>
              <MobileNavItem
                isOpen={isOpen}
                onToggle={onToggle}
                name="courses"
              />
              <MobileNavItem
                isOpen={isOpen}
                onToggle={onToggle}
                name="professionals"
              />
              <MobileNavItem
                isOpen={isOpen}
                onToggle={onToggle}
                name="parents"
              />
              <MobileNavItem isOpen={isOpen} onToggle={onToggle} name="shop" />
              <MobileNavItem isOpen={isOpen} onToggle={onToggle} name="about" />
              <MobileNavItem
                isOpen={isOpen}
                onToggle={onToggle}
                name="contact"
              />
              <Box borderTop="1px solid" borderColor="gray.200" />
              <MobileNavItem
                isOpen={isOpen}
                onToggle={onToggle}
                name="sign up"
                color="secondary.500"
              />
              <MobileNavItem
                isOpen={isOpen}
                onToggle={onToggle}
                name="log in"
              />
            </UnorderedList>
            <chakra.button
              display={{ base: "flex", lg: "none" }}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              onClick={handleOnClick}
              position="absolute"
              right="0"
              top="0"
              mr={5}
              mt={5}
              w={9}
              h={9}
            >
              <CloseIcon />
            </chakra.button>
          </Flex>
        </Box>
      </Fade>
    </>
  );
}

export default Header;
