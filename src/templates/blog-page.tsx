import { graphql } from 'gatsby';
import React from 'react';

function BlogTemplate() {
  return <div></div>;
}

export default BlogTemplate;

export const query = graphql`
  query BlogPosts {
    posts: allContentfulBlogPost {
      edges {
        node {
          id
          author
          authorBio {
            raw
          }
          authorImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
          }
          datePublished(formatString: "MMMM D, yyyy")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          title
          tags
          articleBody {
            raw
          }
        }
      }
    }
  }
`;
