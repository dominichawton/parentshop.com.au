import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function VideoMediaPreview() {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="xl"
      boxShadow="md"
      overflow="hidden"
      bgColor="white"
    >
      <Box bgColor="gray.300" flexGrow={1} h="10rem" w="100%"></Box>
      <Divider />
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        p={6}
      >
        <Text
          textTransform="uppercase"
          color="gray.500"
          letterSpacing=".1rem"
          fontSize=".75rem"
        >
          November 2020
        </Text>
        <Heading as="h4" fontSize="1.1rem" fontWeight="semibold" mb={3} mt={1}>
          Anxious Kids: How Parents Can Help Them
        </Heading>
        <Text color="gray.600">
          Michael joins Studio 10 to address the rise in anxiety in children and
          provide strategies parents can employ to help them.{' '}
        </Text>
      </Flex>
    </Flex>
  );
}

export default VideoMediaPreview;
