import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

function OurPartners() {
  const data = useStaticQuery(graphql`
    query {
      partnerLogos: allFile(
        filter: { sourceInstanceName: { eq: "partners" } }
      ) {
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
  `);
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      py={32}
    >
      <Heading as="h2" size="xl">
        Partners & alliances
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={24}
        mt={20}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        {data.partnerLogos.edges.map((edge) => (
          <Box w="100%">
            <Img
              fluid={edge.node.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export default OurPartners;
