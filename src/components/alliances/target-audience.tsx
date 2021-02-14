import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { capitalize } from '../../utils/string-functions';
import LinkButton from '../buttons/link-button';

function TargetAudience({ title, body, link, image }) {
  return (
    <Flex
      justify="start"
      align="start"
      flexDir="column"
      w="100%"
      p={8}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      bgColor="white"
    >
      <Box w="100%" borderRadius="md" overflow="hidden" mb={12}>
        <Img fluid={image} />
      </Box>
      <Box flexGrow={1}>
        <Heading as="h2" size="md" fontWeight="semibold">
          {capitalize(title)}
        </Heading>
        <Text color="gray.600" my={3}>
          {body}
        </Text>
      </Box>
      <LinkButton text={`View courses for ${title}`} link="courses" />
    </Flex>
  );
}

export default TargetAudience;
