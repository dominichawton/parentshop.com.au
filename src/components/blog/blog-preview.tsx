import { Box, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import React from 'react';

function BlogPreview({ title, author, excerpt, tags, imageUrl, url }) {
  return (
    <Flex
      flexDir="column"
      justifyContent="start"
      alignItems="center"
      w="25rem"
      h="39rem"
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
      <Box w="120%" h="100%" maxH="15rem" overflow="hidden">
        <Img
          fluid={imageUrl}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
      <Flex
        flexDir="column"
        p={6}
        w="100%"
        justifyContent="space-between"
        alignItems="flex-start"
        h="100%"
      >
        <Flex flexDir="column" flexGrow={1}>
          <Flex w="100%">
            {tags.map((tag, i) => (
              <Text
                mb={3}
                px={3}
                py={0.75}
                fontSize={12}
                bgColor="gray.100"
                color="gray.600"
                textTransform="capitalize"
                fontWeight="semibold"
                borderRadius="md"
                mr={i === tags.length - 1 ? 0 : 4}
              >
                {tag}
              </Text>
            ))}
          </Flex>
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
          <Text fontSize="sm" color="gray.500" mb={3}>
            By{' '}
            <chakra.span color="gray.700" fontWeight="semibold">
              {author}
            </chakra.span>
          </Text>
          <Text color="gray.700">{excerpt}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BlogPreview;
