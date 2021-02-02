import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

function MichaelHawton({ data }) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      w="100%"
      mt={16}
      mb={16}
    >
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="100%"
      >
        <Text
          textTransform="uppercase"
          letterSpacing=".2rem"
          color="primary.500"
          fontSize=".9rem"
        >
          Parentshop founder
        </Text>
        <Heading as="h1" fontWeight="semibold" mt={3}>
          {data.pageHeader.heading}
        </Heading>
        <Text fontSize="1.3rem" fontWeight="400" color="gray.600" mt={3}>
          MAPS, B.A., Grad. Dip. (App. Psych.), Dip. (Teaching), Grad. Cert.
          (Bus. Admin.)
        </Text>
        <Flex color="primary.500" mt={4}>
          <Box mr={4}>
            <IconContext.Provider value={{ size: '1.2rem' }}>
              <Box>
                <FiLinkedin />
              </Box>
            </IconContext.Provider>
          </Box>
          <Box>
            <IconContext.Provider value={{ size: '1.2rem' }}>
              <Box>
                <FiTwitter />
              </Box>
            </IconContext.Provider>
          </Box>
        </Flex>
        <Text mt={8} color="gray.800">
          {data.pageHeader.introParagraph.internal.content}
        </Text>
        <Flex
          mt={12}
          py={6}
          px={8}
          borderRadius="lg"
          bgColor="secondary.100"
          w="100%"
          justify="center"
          align="center"
        >
          <Text color="secondary.500" fontWeight="semibold" textAlign="left">
            For interviews and media requests call 1300 738 278 or contact us.
            See recent media here.
          </Text>
        </Flex>
      </Flex>
      <Box overflow="hidden" boxShadow="lg" borderRadius="lg" w="70%" ml={16}>
        <Img fluid={data.michael.childImageSharp.fluid} />
      </Box>
    </Flex>
  );
}

export default MichaelHawton;

export const query = graphql`
  query {
    pageHeader: contentfulEntry(
      contentful_id: { eq: "6Xwfjo00HOScbQK2BU83m9" }
    ) {
      ... on ContentfulPageHeader {
        id
        heading
        introParagraph {
          internal {
            content
          }
        }
      }
    }
    michael: file(relativePath: { eq: "about/michael.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
