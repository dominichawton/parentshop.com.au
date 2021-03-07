import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';

function TeamBio({ imageSrc, name, role, bio }) {
  return (
    <Flex
      flexDir="column"
      p={8}
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
      <Text color="gray.500" my={2} fontSize={18}>
        {role}
      </Text>
      <Text mt={2} color="gray.700">
        {bio}
      </Text>
    </Flex>
  );
}

export default TeamBio;
