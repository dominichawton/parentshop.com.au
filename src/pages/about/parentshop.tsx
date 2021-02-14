import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';

const AboutPage = ({ data }) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={8}
      mb={16}
    >
      <Flex justifyContent="space-between" alignItems="flex-start" w="100%">
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          flexDir="column"
          w="100%"
          mr={16}
          maxW="600px"
        >
          <Flex
            w="100%"
            flexDir="column"
            justifyContent="flex-start"
            flexGrow={1}
          >
            <Heading as="h1" mt={10}>
              {data.header.heading}
            </Heading>
            <Text color="gray.600" mt={6}>
              {data.header.introParagraph.internal.content}
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mt={24}>
            <Flex
              alignItems="flex-start"
              flexDir="column"
              justifyContent="center"
              mr={16}
            >
              <Heading as="h2" color="secondary.500" fontWeight="600">
                12,500+
              </Heading>
              <Text fontWeight="600" color="gray.500">
                Professionals trained in 2020
              </Text>
            </Flex>
            <Flex
              alignItems="flex-start"
              flexDir="column"
              justifyContent="center"
              mr={16}
            >
              <Heading as="h2" color="secondary.500" fontWeight="600">
                650
              </Heading>
              <Text fontWeight="600" color="gray.500">
                Events held in 2020
              </Text>
            </Flex>
            <Flex
              alignItems="flex-start"
              flexDir="column"
              justifyContent="center"
            >
              <Heading as="h2" color="secondary.500" fontWeight="600">
                98%
              </Heading>
              <Text fontWeight="600" color="gray.500">
                Course satisfaction rate
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          w="100%"
          maxW="50%"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <Img fluid={data.heroImage.childImageSharp.fluid} />
        </Box>
      </Flex>
      <Flex
        flexDir="column"
        w="100%"
        mt={36}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Heading fontSize="2rem" w="100%">
          Courses
        </Heading>
        <Flex mt={8} w="100%">
          <Flex
            flexDir="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            w="100%"
            mr={20}
          >
            <Box w="100%" borderRadius="md" overflow="hidden" boxShadow="lg">
              <Img fluid={data.professionalsImage.childImageSharp.fluid} />
            </Box>
            <Heading fontSize="1.4rem" mt={10}>
              For Professionals
            </Heading>
            <Text color="gray.600" mt={4}>
              Parentshop offers a range of professional-development courses for
              school leaders, teachers, child and family specialists, and
              early-years educators. We run courses throughout the year across
              Australia.
            </Text>
            <Button
              rightIcon={<IoArrowForward />}
              colorScheme="secondary"
              variant="link"
              mt={4}
              justifySelf="flex-end"
            >
              View courses for professionals
            </Button>
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            w="100%"
          >
            <Box w="100%" borderRadius="md" overflow="hidden" boxShadow="lg">
              <Img fluid={data.parentsImage.childImageSharp.fluid} />
            </Box>
            <Heading fontSize="1.4rem" mt={10}>
              For Parents
            </Heading>
            <Text color="gray.600" mt={4}>
              We offer in-person and online courses for parents to help them
              better understand their children and adolescents, helping parents
              to guide their children in the right direction.
            </Text>
            <Button
              rightIcon={<IoArrowForward />}
              colorScheme="secondary"
              variant="link"
              mt={4}
              justifySelf="flex-end"
            >
              View courses for parents
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    header: contentfulEntry(contentful_id: { eq: "2R6UxDZYHqFaWUj6nvhtFF" }) {
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
    heroImage: file(relativePath: { eq: "about/about-parentshop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    professionalsImage: file(
      relativePath: { eq: "about/about-professionals.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parentsImage: file(relativePath: { eq: "about/about-parents.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
