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
import ProductPreview from '../components/shop/product-preview';

import { tempBookData } from '../data/books';

const ShopPage = ({ data }) => {
  const { products } = data;
  const books = products.edges.filter(
    (product) => product.node.productType === 'Book'
  );
  const workbooks = products.edges.filter(
    (product) => product.node.productType === 'Workbook'
  );
  const onlineCourses = products.edges.filter(
    (product) => product.node.productType === 'OnlineCourse'
  );
  return (
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
            <Grid gridTemplateColumn="repeat(4, 1fr)" gap={8} w="100%">
              {products.edges.map((product, index) => (
                <ProductPreview
                  key={index}
                  name={product.node.title}
                  type={product.node.productType}
                  image={product.node.images[0].localFile.childImageSharp.fluid}
                  brand={product.node.vendor}
                  price={product.node.priceRange.maxVariantPrice.amount}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel w="100%" p={0}>
            <Grid gridTemplateColumn="repeat(4, 1fr)" gap={8} w="100%">
              {books.map((book, index) => (
                <ProductPreview
                  key={index}
                  name={book.node.title}
                  type={book.node.productType}
                  image={book.node.images[0].localFile.childImageSharp.fluid}
                  brand={book.node.vendor}
                  price={book.node.priceRange.maxVariantPrice.amount}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel w="100%" p={0}>
            <Grid gridTemplateColumn="repeat(4, 1fr)" gap={8} w="100%">
              {workbooks.map((workbook, index) => (
                <ProductPreview
                  key={index}
                  name={workbook.node.title}
                  type={workbook.node.productType}
                  image={
                    workbook.node.images[0].localFile.childImageSharp.fluid
                  }
                  brand={workbook.node.vendor}
                  price={workbook.node.priceRange.maxVariantPrice.amount}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel w="100%" p={0}>
            <Grid gridTemplateColumn="repeat(4, 1fr)" gap={8} w="100%">
              {onlineCourses.map((onlineCourse, index) => (
                <ProductPreview
                  key={index}
                  name={onlineCourse.node.title}
                  type={onlineCourse.node.productType}
                  image={
                    onlineCourse.node.images[0].localFile.childImageSharp.fluid
                  }
                  brand={onlineCourse.node.vendor}
                  price={onlineCourse.node.priceRange.maxVariantPrice.amount}
                />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

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

    products: allShopifyProduct {
      edges {
        node {
          description
          vendor
          id
          title
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          productType
          images {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
