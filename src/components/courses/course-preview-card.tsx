import { Badge, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
import LinkButton from '../buttons/link-button';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
  },
};

function CoursePreviewCard({
  image,
  category,
  location = 'online',
  title,
  body,
  generic = true,
  link = 'courses',
}) {
  const richTextBody = renderRichText(body, options);
  return (
    <Link to={`/course-page-temp`}>
      <Flex
        flexDir="column"
        justifyContent="start"
        alignItems="center"
        w="19rem"
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
        <Box
          w="120%"
          h="100%"
          maxH="15rem"
          overflow="hidden"
          position="relative"
        >
          <Img
            fluid={image}
            imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {!generic && (
            <>
              <Flex
                position="absolute"
                px={3}
                py={1}
                borderRadius="2xl"
                bgColor="white"
                fontWeight="semibold"
                color="primary.500"
                top={3}
                right={10}
                border="1px solid"
                borderColor="gray.200"
              >
                $299
              </Flex>
              <Flex
                position="absolute"
                bottom={0}
                left={10}
                borderTopLeftRadius="lg"
                borderTopRightRadius="lg"
                bgColor="primary.500"
                p={2}
                color="white"
                fontWeight="semibold"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="2xl">29</Text>
                <Text mt={-2}>JAN</Text>
              </Flex>
            </>
          )}
        </Box>
        <Flex
          flexDir="column"
          p={6}
          w="100%"
          justifyContent="space-between"
          alignItems="flex-start"
          h="100%"
        >
          <Flex flexDir="column" align="start" flexGrow={1}>
            <Text
              fontSize="xs"
              color="primary.500"
              textTransform="uppercase"
              fontWeight="semibold"
              letterSpacing=".1rem"
              mb={1}
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
            {!generic && (
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
            )}
            {body && (
              <Box mt={1} size="sm" color="gray.600">
                {richTextBody}
              </Box>
            )}
          </Flex>
          {generic ? (
            <Box alignSelf="flex-end">
              <LinkButton text="Learn more" link={link} noUnderline />
            </Box>
          ) : (
            <Button
              mt={4}
              colorScheme="secondary"
              _hover={{ textDecoration: 'none' }}
              w="100%"
            >
              Book now
            </Button>
          )}
        </Flex>
      </Flex>
    </Link>
  );
}

export default CoursePreviewCard;
