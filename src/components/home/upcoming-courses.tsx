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
} from '@chakra-ui/react';
import React from 'react';
import CoursePreviewCard from '../courses/course-preview-card';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';

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
      <Flex justifyContent="flex-start" alignItems="center" w="100%">
        <Heading size="lg">Upcoming courses</Heading>
        <Button
          rightIcon={<IoArrowForward />}
          colorScheme="secondary"
          variant="link"
          ml={8}
        >
          View all upcoming courses
        </Button>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="gray" w="100%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <TabList my={10} display="flex">
            <Tab mr={4}>All courses</Tab>
            <Tab mx={4}>School leaders & teachers</Tab>
            <Tab mx={4}>Early years educators</Tab>
            <Tab mx={4}>Child & family specialists</Tab>
            <Tab mx={4}>Parents</Tab>
          </TabList>
        </Flex>
        <TabPanels w="100%">
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {images.map((image) => (
              <CoursePreviewCard image={image.node.childImageSharp.fluid} />
            ))}
            {/* <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard /> */}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {/* <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard /> */}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {/* <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard /> */}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {/* <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard /> */}
          </TabPanel>
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            {/* <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard />
            <CoursePreviewCard /> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default UpcomingCourses;
