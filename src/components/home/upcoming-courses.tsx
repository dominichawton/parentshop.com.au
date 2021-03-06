import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import LinkButton from '../buttons/link-button';
import CoursePreviewCard from '../courses/course-preview-card';

function UpcomingCourses({
  courses,
  professionalsOnly = false,
  parentsOnly = false,
}) {
  const earlyYearsCourses = courses.filter(
    (course) =>
      course.node.courseCategory.toLowerCase() === 'early years educators'
  );
  const parentCourses = courses.filter(
    (course) => course.node.courseCategory.toLowerCase() === 'parents'
  );
  const schoolCourses = courses.filter(
    (course) =>
      course.node.courseCategory.toLowerCase() === 'school leaders & teachers'
  );
  const childSpecialistCourses = courses.filter(
    (course) =>
      course.node.courseCategory.toLowerCase() === 'child & family specialists'
  );
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
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="secondary" w="100%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <TabList my={10} display="flex" w="100%">
            {!parentsOnly && (
              <>
                <Tab mr={4}>All courses</Tab>
                <Tab mx={4}>School leaders & teachers</Tab>
                <Tab mx={4}>Early years educators</Tab>
                <Tab mx={4}>Child & family specialists</Tab>
                {!professionalsOnly && <Tab mx={4}>Parents</Tab>}
              </>
            )}
          </TabList>
          <LinkButton text="View all courses" link="courses" marginY={10} />
        </Flex>
        <TabPanels w="100%">
          {/* All courses */}
          <TabPanel w="100%" maxW="1280px" p={0}>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {courses.map((course, index) => (
                <GridItem>
                  <CoursePreviewCard
                    image={course.node.courseImage.fluid}
                    title={course.node.courseName}
                    body={course.node.shortDescription}
                    category={course.node.courseCategory}
                    key={Math.random()}
                  />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          {/* School leaders and teachers */}
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {schoolCourses.map((course, index) => (
                <GridItem>
                  <CoursePreviewCard
                    image={course.node.courseImage.fluid}
                    title={course.node.courseName}
                    body={course.node.shortDescription}
                    category={course.node.courseCategory}
                    key={Math.random()}
                  />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          {/* Early years educators */}
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {earlyYearsCourses.map((course, index) => (
                <GridItem>
                  <CoursePreviewCard
                    image={course.node.courseImage.fluid}
                    title={course.node.courseName}
                    body={course.node.shortDescription}
                    category={course.node.courseCategory}
                    key={Math.random()}
                  />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          {/* Child & family specialists */}
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {childSpecialistCourses.map((course, index) => (
                <GridItem>
                  <CoursePreviewCard
                    image={course.node.courseImage.fluid}
                    title={course.node.courseName}
                    body={course.node.shortDescription}
                    category={course.node.courseCategory}
                    key={Math.random()}
                  />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          {/* Parents */}
          <TabPanel
            display="flex"
            w="100%"
            maxW="1280px"
            justifyContent="space-between"
            p={0}
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {parentCourses.map((course, index) => (
                <GridItem>
                  <CoursePreviewCard
                    image={course.node.courseImage.fluid}
                    title={course.node.courseName}
                    body={course.node.shortDescription}
                    category={course.node.courseCategory}
                    key={Math.random()}
                  />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default UpcomingCourses;
