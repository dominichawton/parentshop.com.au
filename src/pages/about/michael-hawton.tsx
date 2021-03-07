import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import LinkButton from '../../components/buttons/link-button';

function MichaelHawton({ data }) {
  return (
    <Flex justifyContent="space-between" w="100%" mt={16} mb={16}>
      <Flex flexDir="column" w="100%" flexGrow={1}>
        <Flex
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          w="100%"
          flexGrow={1}
        >
          <Text
            textTransform="uppercase"
            letterSpacing=".2rem"
            fontWeight="semibold"
            color="primary.500"
            fontSize=".9rem"
          >
            Parentshop founder
          </Text>
          <Heading as="h1" mt={3}>
            {data.header.heading}
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
            {data.header.introParagraph.internal.content}
          </Text>
        </Flex>
        <Flex
          py={6}
          px={8}
          borderRadius="lg"
          bgColor="secondary.100"
          w="100%"
          justify="center"
          align="center"
        >
          <Text
            color="secondary.500"
            fontWeight="semibold"
            textAlign="left"
            w="100%"
          >
            For interviews and media requests call 1300 738 278 or{' '}
            <LinkButton text="contact us" link="contact" withIcon={false} />.{' '}
            <LinkButton
              text="See recent media here"
              link="about/media"
              withIcon={false}
            />
          </Text>
        </Flex>
      </Flex>
      <Box overflow="hidden" boxShadow="lg" borderRadius="lg" w="70%" ml={16}>
        <Img fluid={data.header.headerImage.fluid} />
      </Box>
    </Flex>
  );
}

export default MichaelHawton;

export const query = graphql`
  query {
    header: contentfulEntry(contentful_id: { eq: "6Xwfjo00HOScbQK2BU83m9" }) {
      ... on ContentfulPageHeader {
        id
        heading
        introParagraph {
          internal {
            content
          }
        }
        headerImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
