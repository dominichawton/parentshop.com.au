import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery } from 'gatsby';
import FeaturedBook from './featured-book';

import { tempBookData } from '../../data/books';

function FeaturedBooks({
  title = 'Featured resources',
  description = 'Hand-picked resources packed with practical advice, carefully curated by the Parentshop team.',
}) {
  const data = useStaticQuery(graphql`
    query {
      bookCovers: allFile(filter: { sourceInstanceName: { eq: "books" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Flex
      py={24}
      // bgGradient="linear(blue.800 0%,  blue.700 100%)"
      bgColor="gray.100"
      w="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDir="column" maxW="1280px" w="100%" alignItems="center">
        <Heading color="gray.900">{title}</Heading>
        <Text color="gray.600" mt={5} fontSize="1.2rem">
          {description}
        </Text>
        <Link to="/shop">
          <Button colorScheme="secondary" mt={6}>
            Go to shop
          </Button>
        </Link>
        <Flex justify="space-between" w="100%" my={20}>
          {data.bookCovers.edges.map((edge, index) => (
            <FeaturedBook
              bookCover={edge.node.childImageSharp.fluid}
              title={tempBookData[index].title}
              author={tempBookData[index].author}
              price={tempBookData[index].price}
              key={index}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FeaturedBooks;
