import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function MeetTheTeam() {
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={8}
      mb={16}
    >
      <Heading as="h1" fontWeight="semibold" mt={10}>
        Meet the team
      </Heading>
    </Flex>
  );
}

export default MeetTheTeam;
