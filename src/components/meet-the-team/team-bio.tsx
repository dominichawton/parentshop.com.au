import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';

function TeamBio({ imageSrc, name, title, bio }) {
  return (
    <Flex
      flexDir="column"
      p={7}
      bgColor="white"
      borderRadius="2xl"
      boxShadow="md"
    >
      <Box w="100%" overflow="hidden" borderRadius="xl">
        <Img fluid={imageSrc} />
      </Box>
      <Heading fontSize="1.5rem" mt={8} fontWeight="semibold">
        {name}
      </Heading>
      <Text color="gray.500" mt={1}>
        {title}
      </Text>
      <Text mt={2}>{bio}</Text>
    </Flex>
  );
}

export default TeamBio;
