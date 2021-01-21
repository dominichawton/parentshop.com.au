import { Box, chakra, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import ContactForm from '../components/contact/contact-form';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "contact/contact-books.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Flex flexDir="row" w="100%" mt={8} mb={8}>
      <Flex flexDir="column" w="100%" pr={16}>
        <Heading fontWeight="semibold" as="h1">
          Get in touch
        </Heading>
        <Text mt={4} color="gray.500" fontSize="1.2rem">
          We’d love to hear from you! Call us on{' '}
          <chakra.span color="primary.500" fontWeight="semibold">
            (02) 66 808 910
          </chakra.span>{' '}
          or email us at{' '}
          <chakra.span color="primary.500" fontWeight="semibold">
            info@parentshop.com.au
          </chakra.span>
          , or send us a message using the form below.
        </Text>
        <ContactForm />
      </Flex>
      <Box w="100%" overflow="hidden" borderRadius="md">
        <Img fluid={data.image.childImageSharp.fluid} />
      </Box>
    </Flex>
  );
};

export default ContactPage;
