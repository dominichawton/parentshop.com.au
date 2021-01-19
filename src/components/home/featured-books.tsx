import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery } from 'gatsby';
import FeaturedBook from './featured-book';

const tempBookData = [
  {
    author: 'Michael Hawton',
    title: 'Engaging Adolescents',
    price: '29.95',
  },
  {
    author: 'Daniel J. Siegel',
    title: 'Brainstorm',
    price: '19.95',
  },
  {
    author: 'Daniel J. Siegel & Tina Payne Bryson',
    title: 'The Whole-Brain Child',
    price: '29.95',
  },
  {
    author: 'Daniel J. Siegel',
    title: 'Mindsight',
    price: '19.95',
  },
];

function FeaturedBooks() {
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
      bgGradient="linear(blue.800 0%,  blue.700 100%)"
      w="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDir="column" maxW="1280px" w="100%" alignItems="center">
        <Heading color="white">Featured resources</Heading>
        <Text color="white" mt={5} fontSize="1.2rem">
          Hand-picked resources packed with practical advice, carefully curated
          by the Parentshop team.
        </Text>
        <Button colorScheme="secondary" mt={6}>
          Go to shop
        </Button>
        <Flex justify="space-between" w="100%" my={20}>
          {data.bookCovers.edges.map((edge, index) => (
            <FeaturedBook
              bookCover={edge.node.childImageSharp.fluid}
              title={tempBookData[index].title}
              author={tempBookData[index].author}
              price={tempBookData[index].price}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FeaturedBooks;
