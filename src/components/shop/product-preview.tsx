import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Img from 'gatsby-image';

function ProductPreview({
  path = '',
  image,
  name = 'Engaging Adolecents',
  brand = 'Michael Hawton',
  price = '29.90',
  type = 'resource',
}) {
  return (
    <Box>
      <Link to={`/${path}`}>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="start"
          color="gray.800"
          transition=".1s ease-out all"
        >
          <Box
            w="150px"
            boxShadow="lg"
            position="relative"
            transition=".2s ease-out all"
            _hover={{ boxShadow: 'xl' }}
          >
            <Img fluid={image} />
          </Box>
          <Flex flexDir="column" mt={6} alignItems="start">
            <Heading as="h4" fontSize="1.2rem">
              {name}
            </Heading>
            <Text
              fontSize=".9rem"
              maxW="150px"
              color="gray.600"
              mt={2}
              mb={3}
            >{`By ${brand}`}</Text>
            <Text
              px={3}
              py={1}
              borderRadius="2xl"
              bgColor="white"
              color="gray.800"
              fontWeight="semibold"
              fontSize="sm"
              boxShadow="md"
            >{`$${price}`}</Text>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
}

export default ProductPreview;
