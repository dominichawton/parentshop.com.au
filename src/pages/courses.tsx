import {
  Flex,
  Text,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import CoursePreviewCard from '../components/courses/course-preview-card';
import { courseData } from '../components/courses/course-data';

const CoursesPage = ({ data }) => (
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
      and online. Use the filters below to display courses relevant to you.
    </Text>
    <Tabs variant="soft-rounded" colorScheme="secondary" w="100%">
      <TabList>
        <TabList my={10} display="flex" justifyContent="space-between">
          <Tab mr={4}>All courses</Tab>
          <Tab mx={4}>School leaders & teachers</Tab>
          <Tab mx={4}>Early years educators</Tab>
          <Tab mx={4}>Child & family specialists</Tab>
          <Tab mx={4}>Parents</Tab>
        </TabList>
      </TabList>
      <TabPanels w="100%">
        <TabPanel display="flex" flexDir="column" w="100%" p={0}>
          <Flex justifyContent="space-between">
            {data.coursePreviewImages.edges.map((edge, index) => (
              <CoursePreviewCard
                image={edge.node.childImageSharp.fluid}
                title={courseData[index].title}
                body={courseData[index].body}
                location={courseData[index].location}
                category={courseData[index].category}
              />
            ))}
          </Flex>
          <Flex justifyContent="space-between">
            {data.coursePreviewImages.edges.map((edge, index) => (
              <CoursePreviewCard
                image={edge.node.childImageSharp.fluid}
                title={courseData[index].title}
                body={courseData[index].body}
                location={courseData[index].location}
                category={courseData[index].category}
              />
            ))}
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Flex>
);

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
  }
`;
