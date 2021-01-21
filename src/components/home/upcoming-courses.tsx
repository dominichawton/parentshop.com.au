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

const data = [
  {
    title: 'No Scaredy Cats',
    body:
      'No Scaredy Cats is a one-day professional learning course for teachers and teacher aides to learn classroom strategies for managing anxiety and building resilience in the classroom.',
    category: 'school leaders & teachers',
    location: 'online',
  },
  {
    title: 'tough conversations for early years directors',
    body:
      'Encounters with parents or staff need to be handled with care and consideration. This short course will equip you with strategies you can employ to resolve difficult situations.',
    category: 'early years educators',
    location: 'online',
  },
  {
    title: 'Talk Less Listen More for Early Years Educators',
    body:
      'Help children develop more self-control and to respond with more flexibility to frustration and upsetting events.',
    category: 'early years educators',
    location: 'tamworth, QLD',
  },
  {
    title: '123 Magic & Emotion Coaching Practitioner Training',
    body:
      '1-2-3 Magic® & Emotion Coaching is a one-day professional learning course to equips you with the skills to manage children’s difficult behaviour.',
    category: 'child & family specialists',
    location: 'sydney, NSW',
  },
];

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
      <Tabs variant="soft-rounded" colorScheme="gray" w="100%">
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
              aria-label="Previous courses"
              fontSize="28px"
              icon={<ChevronLeftIcon />}
              isRound={true}
              mr={6}
            />
            <IconButton
              colorScheme="gray"
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
                title={data[index].title}
                body={data[index].body}
                category={data[index].category}
                location={data[index].location}
              />
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
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={data[index].title}
                body={data[index].body}
                category={data[index].category}
                location={data[index].location}
              />
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
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={data[index].title}
                body={data[index].body}
                category={data[index].category}
                location={data[index].location}
              />
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
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={data[index].title}
                body={data[index].body}
                category={data[index].category}
                location={data[index].location}
              />
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
            {images.map((image, index) => (
              <CoursePreviewCard
                image={image.node.childImageSharp.fluid}
                title={data[index].title}
                body={data[index].body}
                category={data[index].category}
                location={data[index].location}
              />
            ))}
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
