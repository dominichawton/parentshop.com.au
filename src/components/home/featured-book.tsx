import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Img from 'gatsby-image';

function FeaturedBook({
  path = '',
  bookCover,
  title = 'Engaging Adolecents',
  author = 'Michael Hawton',
  price = '29.90',
}) {
  return (
    <Link to={`/${path}`}>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="start"
        color="white"
        transition=".1s ease-out all"
        // _hover={{ transform: 'translateY(-5px)' }}
      >
        <Box
          w="150px"
          boxShadow="lg"
          position="relative"
          _hover={{ boxShadow: 'dark-lg' }}
          transition=".2s ease-out all"
        >
          <Img fluid={bookCover} />
        </Box>
        <Flex flexDir="column" mt={6} alignItems="start">
          <Heading as="h4" fontSize="1.2rem">
            {title}
          </Heading>
          <Text
            fontSize=".9rem"
            maxW="150px"
            mt={2}
            mb={3}
          >{`By ${author}`}</Text>
          <Text
            px={3}
            py={1}
            borderRadius="2xl"
            bgColor="white"
            color="gray.800"
            fontWeight="semibold"
            fontSize="sm"
          >{`$${price}`}</Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export default FeaturedBook;