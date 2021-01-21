import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import FooterAccordionList from './footerAccordionListItem';
import FooterNavColumn from './footerNavColumn';

function Footer() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "parentshop-logo-simple.png" }) {
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
    <chakra.footer py={{ base: 8, md: 12, lg: 16 }} bg="gray.100" w="100%">
      <Flex flexDir="column" width="90%" maxW="1280px" mx="auto">
        <Flex
          justifyContent="space-between"
          alignItems={{ base: 'center', lg: 'start' }}
          flexDir={{ base: 'column', lg: 'row' }}
        >
          {/* Desktop Sitemap */}
          <Flex
            mb={{ base: 16, lg: 0 }}
            display={{ base: 'none', lg: 'flex' }}
            w="100%"
          >
            <FooterNavColumn
              heading="Courses"
              navItems={[
                { name: 'School Leaders & Teachers', link: 'courses' },
                { name: 'Early Years Educators', link: 'courses' },
                { name: 'Child & Family Specialists', link: 'courses' },
                { name: 'Parents', link: 'courses' },
                { name: 'All Courses', link: 'courses' },
              ]}
            />
            <FooterNavColumn
              heading="Shop"
              navItems={[
                { name: 'Online Courses', link: 'shop' },
                { name: 'Books & Resources', link: 'shop' },
                { name: 'Workbooks', link: 'shop' },
                { name: 'Practitioner Materials Order Form', link: 'shop' },
              ]}
            />
            <FooterNavColumn
              heading="About"
              navItems={[
                { name: 'About Parentshop', link: 'about/parentshop' },
                { name: 'About Michael Hawton', link: 'about/michael-hawton' },
                { name: 'Meet the Team', link: 'about/meet-the-team' },
                { name: 'Privacy Policy', link: 'about/privacy-policy' },
                {
                  name: 'Terms & Conditions',
                  link: 'about/terms-and-conditions',
                },
                {
                  name: 'Complaints Handling',
                  link: 'about/complaints-handling',
                },
              ]}
            />
          </Flex>
          {/* Mobile Sitemap */}
          <Flex
            mb={8}
            w="100%"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            display={{ base: 'flex', lg: 'none' }}
          >
            <Link to="/">
              <Image
                fluid={data.logo.childImageSharp.fluid}
                alt="parentshop logo"
              />
            </Link>
          </Flex>
          <Accordion
            allowToggle
            w="100%"
            mb={{ base: 12, lg: 16 }}
            display={{ base: 'block', lg: 'none' }}
          >
            <FooterAccordionList
              buttonText="Courses"
              listItems={[
                { text: 'School leaders & teachers', path: 'courses' },
                { text: 'Early years educators', path: 'courses' },
                { text: 'Child & family specialists', path: 'courses' },
                { text: 'Parents', path: 'courses' },
                { text: 'All courses', path: 'courses' },
              ]}
            />
            <FooterAccordionList
              buttonText="Shop"
              listItems={[
                { text: 'Online courses', path: 'shop' },
                { text: 'Books & resources', path: 'shop' },
                { text: 'Workbooks', path: 'shop' },
                { text: 'Practitioner materials order form', path: 'shop' },
              ]}
            />
            <FooterAccordionList
              buttonText="About"
              listItems={[
                { text: 'About Parentshop', path: 'about/parentshop' },
                { text: 'About Michael Hawton', path: 'about/michael-hawton' },
                { text: 'Meet the team', path: 'about/meet-the-team' },
                { text: 'Privacy policy', path: 'about/privacy-policy' },
                {
                  text: 'Terms & conditions',
                  path: 'about/terms-and-conditions',
                },
                {
                  text: 'Complaints handling',
                  path: 'about/complaints-handling',
                },
              ]}
            />
          </Accordion>
          <Flex
            flexDir="column"
            alignItems="flex-end"
            w={{ base: '100%', lg: 'auto' }}
            minW={{ base: 'auto', lg: '500px' }}
          >
            <Flex
              flexDir="column"
              px={12}
              py={12}
              borderRadius="20px"
              bg="white"
              textAlign={{ base: 'center', md: 'left' }}
              w="100%"
              // maxW="500px"
              mx={{ base: 'auto', lg: '0' }}
            >
              <Heading
                as="h4"
                fontSize="1.5rem"
                color="gray.800"
                fontWeight="600"
              >
                Join the Parentshop family!
              </Heading>
              <Text color="gray.600" mt={{ base: 4, lg: 4 }}>
                Subscribe to our mailing list and we'll let you know when we
                announce new courses or training material.
              </Text>
              <chakra.form
                display="flex"
                flexDir={{ base: 'column', md: 'row' }}
                onSubmit={handleSubmit(onSubmit)}
                justifyContent={{ base: 'center', md: 'center' }}
                alignItems={{ base: 'start', md: 'center' }}
                mt={6}
              >
                <FormControl id="email" mr={2}>
                  <Input
                    type="email"
                    ref={register({ required: true })}
                    placeholder="Email address"
                    name="email"
                  />
                </FormControl>
                <Button
                  colorScheme="secondary"
                  type="submit"
                  mt={{ base: 2, md: 0 }}
                  w={{ base: '100%', md: '150px' }}
                >
                  Subscribe
                </Button>
              </chakra.form>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          mt={{ base: 12, lg: 24 }}
        >
          <Flex flexDir="column" alignItems="center" color="primary.500">
            <Flex>
              <chakra.a
                px={4}
                href="https://www.facebook.com/Parentshop/"
                target="_blank"
              >
                <IconContext.Provider value={{ size: '1.2rem' }}>
                  <Box>
                    <FiFacebook />
                  </Box>
                </IconContext.Provider>
              </chakra.a>
              <chakra.a
                px={4}
                href="https://www.instagram.com/parentshopparents/"
                target="_blank"
              >
                <IconContext.Provider value={{ size: '1.2rem' }}>
                  <Box>
                    <FiInstagram />
                  </Box>
                </IconContext.Provider>
              </chakra.a>
              <chakra.a
                px={4}
                href="https://twitter.com/parentshop?lang=en"
                target="_blank"
              >
                <IconContext.Provider value={{ size: '1.2rem' }}>
                  <Box>
                    <FiLinkedin />
                  </Box>
                </IconContext.Provider>
              </chakra.a>
            </Flex>
            <Flex
              flexDir="column"
              color="gray.600"
              alignItems="center"
              fontSize="sm"
              mt={4}
            >
              <Text>Copyright Parentshop 2021</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </chakra.footer>
  );
}

export default Footer;
