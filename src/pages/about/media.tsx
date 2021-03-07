import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import VideoMediaPreview from '../../components/media/video-media-preview';

function Media({ data }) {
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={6}
      mb={16}
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Flex flexDir="column" justifyContent="space-between" w="50%" mr={20}>
          <Flex flexDir="column" flexGrow={3}>
            <Heading as="h1" mt={10}>
              {data.header.heading}
            </Heading>
            <Text mt={3}>{data.header.introParagraph.internal.content}</Text>
          </Flex>
          <Flex
            mt={40}
            py={6}
            px={8}
            borderRadius="lg"
            bgColor="secondary.100"
            w="100%"
            justify="center"
            align="center"
            flexGrow={1}
          >
            <Text color="secondary.500" fontWeight="semibold" textAlign="left">
              For interviews and media requests call 1300 738 278 or contact us.
              See recent media here.
            </Text>
          </Flex>
        </Flex>

        <Box w="50%" overflow="hidden" boxShadow="lg" borderRadius="lg" mt={10}>
          <Img fluid={data.header.headerImage.fluid} />
        </Box>
      </Flex>
      <Flex
        mt={16}
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="1.7rem" fontWeight="semibold">
          Television
        </Heading>
        <Divider mt={5} />
        <Grid templateColumns="repeat(4, 1fr)" gap={12} w="100%" mt={12}>
          <VideoMediaPreview />
          <VideoMediaPreview />
          <VideoMediaPreview />
          <VideoMediaPreview />
        </Grid>
      </Flex>
      <Flex
        mt={16}
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="100%"
      >
        <Heading fontSize="1.7rem" fontWeight="semibold">
          Radio
        </Heading>
        <Divider mt={5} />
        <Flex
          mt={8}
          w="100%"
          borderRadius="2xl"
          boxShadow="md"
          h="20rem"
          flexDir="column"
          bgColor="white"
        >
          <Flex
            w="100%"
            h="10rem"
            justifyContent="flex-start"
            alignItems="flex-start"
            p={6}
          >
            <Box w={28} h={28} borderRadius="xl" bgColor="gray.300"></Box>
            <Flex
              ml={16}
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              w="75%"
            >
              <Text fontWeight="semibold" fontSize="1.4rem" mb={1}>
                Talking to children about coronavirus
              </Text>
              <Text
                color="gray.500"
                fontSize=".75rem"
                mb={2}
                textTransform="uppercase"
                letterSpacing=".1rem"
              >
                November 2020
              </Text>
              <Text color="gray.600">
                Michael joined the 6PR mornings to discuss the effect the
                coronavirus is having on children’s anxiety levels and some
                simple steps parents can take to help their children navigate
                this difficult time.
              </Text>
            </Flex>
          </Flex>
          <Divider />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Media;

export const query = graphql`
  query {
    header: contentfulEntry(contentful_id: { eq: "io7xBzm11ypqW5q37LXoX" }) {
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
