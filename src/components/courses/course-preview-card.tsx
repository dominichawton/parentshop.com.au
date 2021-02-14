import { Badge, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';

function CoursePreviewCard({
  image,
  category,
  location = 'online',
  title,
  body,
}) {
  return (
    <Link to={`/course-page-temp`}>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="19rem"
        borderRadius="2xl"
        // border="1px solid"
        borderColor="gray.200"
        boxShadow="md"
        bgColor="white"
        overflow="hidden"
        cursor="pointer"
        transition="all .1s ease-out"
        _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
        mb={12}
      >
        <Flex
          flexDir="column"
          p={6}
          h="100%"
          w="100%"
          alignItems="flex-start"
          height="20rem"
        >
          <Text
            fontSize="xs"
            color="secondary.500"
            textTransform="uppercase"
            letterSpacing=".1rem"
          >
            {category}
          </Text>
          <Heading
            size="md"
            fontWeight="600"
            lineHeight="1.4"
            color="gray.800"
            pt={1}
            pb={2}
            textTransform="capitalize"
          >
            {title}
          </Heading>
          <Text
            py=".2rem"
            px={2}
            bgColor="primary.100"
            textColor="primary.500"
            fontWeight="600"
            fontSize="sm"
            borderRadius="xl"
            textTransform="capitalize"
          >
            {location}
          </Text>
          <Text color="gray.600" my={2}>
            {body}
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
    </Link>
  );
}

export default CoursePreviewCard;
