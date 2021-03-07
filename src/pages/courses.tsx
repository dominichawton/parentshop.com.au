import {
  Flex,
  Text,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  Grid,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import CoursePreviewCard from '../components/courses/course-preview-card';
import { courseData } from '../data/course-data';

const CoursesPage = ({ data }) => {
  const schoolCourses = data.courses.edges.filter(
    (course) =>
      course.node.courseCategory.toLowerCase() === 'school leaders & teachers'
  );
  const earlyYearsCourses = data.courses.edges.filter(
    (course) =>
      course.node.courseCategory.toLowerCase() === 'early years educators'
  );
  const parentCourses = data.courses.edges.filter(
    (course) => course.node.courseCategory.toLowerCase() === 'parents'
  );
  const childSpecialistCourses = data.courses.edges.filter(
    (course) =>
      course.node.courseCategory.toLowerCase() === 'child & family specialists'
  );
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={16}
    >
      <Heading>Courses</Heading>
      <Text mt={3} color="gray.600" w="60%">
        Parentshop runs workshops for parents and professionals across Australia
        and online.
      </Text>
      <Heading as="h2" mt={12} mb={3} size="lg">
        For school leaders & teachers
      </Heading>
      <Divider mb={6} />
      <Grid templateColumns="repeat(4, 1fr)" gap={8} w="100%">
        {schoolCourses.map((course, index) => (
          <CoursePreviewCard
            image={course.node.courseImage.fluid}
            title={course.node.courseName}
            body={course.node.shortDescription}
            category={course.node.courseCategory}
          />
        ))}
      </Grid>
      <Heading as="h2" mt={8} mb={3} size="lg">
        For early years educators
      </Heading>
      <Divider mb={6} />
      <Grid templateColumns="repeat(4, 1fr)" gap={8} w="100%">
        {earlyYearsCourses.map((course, index) => (
          <CoursePreviewCard
            image={course.node.courseImage.fluid}
            title={course.node.courseName}
            body={course.node.shortDescription}
            category={course.node.courseCategory}
          />
        ))}
      </Grid>
      <Heading as="h2" mt={8} mb={3} size="lg">
        For child and family specialists
      </Heading>
      <Divider mb={6} />
      <Grid templateColumns="repeat(4, 1fr)" gap={8} w="100%">
        {childSpecialistCourses.map((course, index) => (
          <CoursePreviewCard
            image={course.node.courseImage.fluid}
            title={course.node.courseName}
            body={course.node.shortDescription}
            category={course.node.courseCategory}
          />
        ))}
      </Grid>
      <Heading as="h2" mt={8} mb={3} size="lg">
        For parents
      </Heading>
      <Divider mb={6} />
      <Grid templateColumns="repeat(4, 1fr)" gap={8} w="100%">
        {parentCourses.map((course, index) => (
          <CoursePreviewCard
            image={course.node.courseImage.fluid}
            title={course.node.courseName}
            body={course.node.shortDescription}
            category={course.node.courseCategory}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default CoursesPage;

export const query = graphql`
  query {
    coursePreviewImages: allFile(
      filter: { sourceInstanceName: { eq: "courses" } }
      limit: 4
    ) {
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
