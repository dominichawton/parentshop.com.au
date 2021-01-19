import { Badge, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';

function CoursePreviewCard({ image }) {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      h="100%"
      w="19rem"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      bgColor="white"
      overflow="hidden"
      cursor="pointer"
      transition="all .1s ease-out"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
    >
      <Flex flexDir="column" p={6} h="100%" w="100%" alignItems="flex-start">
        <Text
          fontSize="xs"
          color="secondary.500"
          textTransform="uppercase"
          letterSpacing=".1rem"
        >
          early years educators
        </Text>
        <Heading
          size="md"
          fontWeight="600"
          lineHeight="1.4"
          color="gray.800"
          py={2}
        >
          Tough Conversations For Early Years Centre Directors
        </Heading>
        <Text
          py=".2rem"
          px={2}
          bgColor="primary.100"
          textColor="primary.500"
          fontWeight="600"
          fontSize="sm"
          borderRadius="xl"
        >
          Online
        </Text>
        <Text color="gray.600" my={2}>
          Encounters with parents or staff need to be handled with care and
          consideration. This short course will equip you with strategies you
          can employ to resolve difficult situations.
        </Text>
        {/* <Button
          rightIcon={<IoArrowForward />}
          colorScheme="secondary"
          variant="link"
          _hover={{ textDecoration: 'none' }}
        >
          View course
        </Button> */}
      </Flex>
      <Box w="120%" h="15rem">
        <Img
          fluid={image}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
    </Flex>
  );
}

export default CoursePreviewCard;