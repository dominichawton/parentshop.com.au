import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
import UpcomingCourses from '../components/home/upcoming-courses';

const ParentsPage = ({ data }) => {
  const parentCourses = data.courses.edges.filter(
    (course) => course.node.courseCategory.toLowerCase() === 'parents'
  );
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={6}
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
      <UpcomingCourses courses={parentCourses} parentsOnly />
    </Flex>
  );
};

export default ParentsPage;

export const query = graphql`
  query {
    header: contentfulEntry(contentful_id: { eq: "3zufG7x1y8je19Sa0Jo2AE" }) {
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
    heroImage: file(relativePath: { eq: "about/about-parents.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    courses: allContentfulCourse {
      edges {
        node {
          courseCategory
          courseImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          courseName
          shortDescription {
            raw
          }
        }
      }
    }
  }
`;
