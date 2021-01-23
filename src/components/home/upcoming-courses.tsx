import {
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import CoursePreviewCard from '../courses/course-preview-card';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';

import { courseData } from '../courses/course-data';

function UpcomingCourses({ images }) {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="start"
      mt={16}
      mb={24}
      color="gray.800"
      w="100%"
    >
      <Flex justifyContent="flex-start" alignItems="flex-end" w="100%">
        <Heading size="lg">Upcoming courses</Heading>
        <Button
          rightIcon={<IoArrowForward />}
          colorScheme="secondary"
          variant="link"
          ml={8}
          pb={1}
        >
          View all upcoming courses
        </Button>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="secondary" w="100%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <TabList my={10} display="flex">
            <Tab mr={4}>All courses</Tab>
            <Tab mx={4}>School leaders & teachers</Tab>
            <Tab mx={4}>Early years educators</Tab>
            <Tab mx={4}>Child & family specialists</Tab>
            <Tab mx={4}>Parents</Tab>
          </TabList>
          <Flex>
            <IconButton
              colorScheme="gray"
              boxShadow="md"
              aria-label="Previous courses"
              fontSize="28px"
              icon={<ChevronLeftIcon />}
              isRound={true}
              mr={6}
            />
            <IconButton
              colorScheme="gray"
              boxShadow="md"
              aria-label="Next courses"
              fontSize="28px"
              icon={<ChevronRightIcon />}
              isRound={true}
            />
          </Flex>
        </Flex>
        <TabPanels w="100%">
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={courseData[index].title}
                body={courseData[index].body}
                category={courseData[index].category}
                location={courseData[index].location}
              />
            ))}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={courseData[index].title}
                body={courseData[index].body}
                category={courseData[index].category}
                location={courseData[index].location}
              />
            ))}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={courseData[index].title}
                body={courseData[index].body}
                category={courseData[index].category}
                location={courseData[index].location}
              />
            ))}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={courseData[index].title}
                body={courseData[index].body}
                category={courseData[index].category}
                location={courseData[index].location}
              />
            ))}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={courseData[index].title}
                body={courseData[index].body}
                category={courseData[index].category}
                location={courseData[index].location}
              />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default UpcomingCourses;
