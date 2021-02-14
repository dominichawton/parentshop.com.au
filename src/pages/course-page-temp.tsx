import { Flex, Heading, Box, Grid, Text, Button } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import CoursePreviewCard from '../components/courses/course-preview-card';
import { capitalize } from '../utils/string-functions';
import { courseData } from '../data/course-data';

const tempData = {
  courseCategory: 'School Leaders & Teachers',
  courseName: 'No Scaredy Cats',
  shortDescription:
    'No Scaredy Cats is a one-day professional learning course for teachers and teacher aides to learn classroom strategies for managing anxiety and building resilience in the classroom.',
  longDescription:
    'No Scaredy Cats™  is a one-day professional learning course for teachers and teacher aides to learn classroom strategies for managing anxiety and building resilience in the classroom. The No Scaredy Cats™ course is based on three underlying principles: first, by having an understanding of how anxiety develops teachers and teacher aides can counter its progress. Second, they can play a preventative role in stopping children from worrying too much. Third, there are practical steps to take to build resilient thinking in children. ',
  testimonials: [
    {
      name: 'Jenny Smith',
      role: 'Assistant Principal',
      organisation: "St. John's College, Lismore",
      testimonial:
        'Very practical, user-friendly, evidence-based information to support parents, so they can better support their children.',
    },
    {
      name: 'Mark King',
      role: 'Principal',
      organisation: "St. Mary's College, Casino",
      testimonial:
        'Very practical, user-friendly, evidence-based information to support parents, so they can better support their children.',
    },
    {
      name: 'Clark West',
      role: 'Learning Support Offices',
      organisation: 'Randwick High School, Randwick',
      testimonial:
        'Very practical, user-friendly, evidence-based information to support parents, so they can better support their children.',
    },
  ],
};

function CoursePage({ data }) {
  return (
    <Flex
      flexDir="column"
      justify="start"
      align="center"
      w="100%"
      mt={8}
      mb={16}
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Flex
          justify="between"
          items="start"
          flexDir="column"
          w="50%"
          flexGrow={1}
        >
          <Flex
            flexDir="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            mr={20}
            flexGrow={1}
          >
            <Text
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing=".2rem"
              color="gray.400"
              mt={7}
            >
              {tempData.courseCategory}
            </Text>
            <Heading as="h1" mt={3}>
              {capitalize(tempData.courseName)}
            </Heading>
            <Text mt={3} color="gray.600">
              {tempData.longDescription}
            </Text>
          </Flex>
          <Button colorScheme="secondary" variant="outline" w="50%" mt={8}>
            Download Curriculum
          </Button>
        </Flex>
        <Box w="50%" overflow="hidden" boxShadow="lg" borderRadius="lg" mt={10}>
          <Img fluid={data.courseImage.childImageSharp.fluid} />
        </Box>
      </Flex>
      <Flex flexDir="column" justify="start" items="start" mt={16} w="100%">
        <Heading
          as="h2"
          w="100%"
          pb={4}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          Upcoming courses
        </Heading>
        <Grid gridTemplateColumns="repeat(4, 1fr)" gap={6} mt={8}>
          <CoursePreviewCard
            image={data.courseImage.childImageSharp.fluid}
            title={courseData[0].title}
            body={courseData[0].body}
            category={courseData[0].category}
            location={courseData[0].location}
          />
          <CoursePreviewCard
            image={data.courseImage.childImageSharp.fluid}
            title={courseData[0].title}
            body={courseData[0].body}
            category={courseData[0].category}
            location={courseData[0].location}
          />
          <CoursePreviewCard
            image={data.courseImage.childImageSharp.fluid}
            title={courseData[0].title}
            body={courseData[0].body}
            category={courseData[0].category}
            location={courseData[0].location}
          />
          <CoursePreviewCard
            image={data.courseImage.childImageSharp.fluid}
            title={courseData[0].title}
            body={courseData[0].body}
            category={courseData[0].category}
            location={courseData[0].location}
          />
        </Grid>
      </Flex>
      <Flex flexDir="column" justify="start" align="start" mt={20} w="100%">
        <Heading as="h3">Testamonials</Heading>
      </Flex>
    </Flex>
  );
}

export default CoursePage;

export const query = graphql`
  query {
    courseImage: file(relativePath: { eq: "daredevil-children.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
