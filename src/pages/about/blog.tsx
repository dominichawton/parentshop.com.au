import { Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import BlogPreview from '../../components/blog/blog-preview';

function BlogPage({ data }) {
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={16}
    >
      <Heading>Blog</Heading>
      <Text mt={3} color="gray.600" w="60%">
        We post regularly with tips and advice for managing children and
        adolescents. Subscribe to our mailing list to receive them direct to
        your inbox!
      </Text>
      <Divider my={8} />
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {data.posts.edges.map((edge) => (
          <BlogPreview
            title={edge.node.title}
            tags={edge.node.tags}
            author={edge.node.author}
            imageUrl={edge.node.image.fluid}
            url={`/blog/${edge.node.slug}`}
            excerpt={edge.node.excerpt.excerpt}
          />
        ))}
      </Grid>
    </Flex>
  );
}

export default BlogPage;

export const query = graphql`
  query {
    posts: allContentfulBlogPost {
      edges {
        node {
          slug
          author
          datePublished(formatString: "MMMM D, yyyy")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          title
          tags
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`;
