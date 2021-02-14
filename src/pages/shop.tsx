import {
  Flex,
  Text,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import CoursePreviewCard from '../components/courses/course-preview-card';
import { courseData } from '../data/course-data';
import ProductPreview from '../components/shop/product-preview';

import { tempBookData } from '../data/books';

const ShopPage = ({ data }) => (
  <Flex
    flexDir="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    w="100%"
    mt={16}
  >
    <Heading>Shop</Heading>
    <Text mt={3} color="gray.600" w="60%">
      We've curated a selection of books and resources that compliment our
      course material. You can also purchase online courses and additional
      workbooks through the store.
    </Text>
    <Tabs variant="soft-rounded" colorScheme="secondary" w="100%">
      <TabList>
        <TabList my={10} display="flex" justifyContent="space-between">
          <Tab mr={4}>All resources</Tab>
          <Tab mx={4}>Books</Tab>
          <Tab mx={4}>Workbooks</Tab>
          <Tab mx={4}>Online courses</Tab>
        </TabList>
      </TabList>
      <TabPanels w="100%">
        <TabPanel display="flex" flexDir="column" w="100%" p={0}>
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            {data.bookCovers.edges.map((edge, index) => (
              <ProductPreview
                name={tempBookData[index].title}
                type={tempBookData[index].type}
                image={edge.node.childImageSharp.fluid}
                brand={tempBookData[index].author}
              />
            ))}
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Flex>
);

export default ShopPage;

export const query = graphql`
  query {
    bookCovers: allFile(filter: { sourceInstanceName: { eq: "books" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
