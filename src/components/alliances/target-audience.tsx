import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { capitalize } from '../../utils/string-functions';
import LinkButton from '../buttons/link-button';

function TargetAudience({ title, body, link, image }) {
  return (
    <Link to={`/${link}`}>
      <Flex
        justify="start"
        align="start"
        flexDir="column"
        w="100%"
        p={8}
        borderRadius="xl"
        bgColor="white"
        boxShadow="md"
        cursor="pointer"
        transition="all .1s ease-out"
        _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
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
        <LinkButton
          text={`View courses for ${title}`}
          link="courses"
          noUnderline
        />
      </Flex>
    </Link>
  );
}

export default TargetAudience;
