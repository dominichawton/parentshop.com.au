import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import UpcomingCourses from '../components/home/upcoming-courses';
import FeaturedBooks from '../components/home/featured-books';
import OurPartners from '../components/home/our-partners';

const Container = styled.div`
  width: 100vw;
  position: relative;
  height: 55vh;
  overflow: hidden;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const BackgroundColour = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e2e8f0;
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <Container>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box maxW="1280px" w="95%">
            <Flex
              flexDir="column"
              alignItems="start"
              justifyContent="center"
              maxW="500px"
            >
              <Heading as="h1" color="gray.900" fontSize={36}>
                Australia's leading behaviour-change specialist
              </Heading>
              <Heading
                as="h2"
                color="gray.600"
                fontSize={18}
                fontWeight="400"
                mt={4}
                mb={6}
                lineHeight="1.5"
              >
                Engaging, action-based professional development and training
                events that deliver effective behaviour-change solutions for all
                ages. World-class training using the latest research in
                behavioural sciences.
              </Heading>
              <Button colorScheme="secondary">See courses</Button>
            </Flex>
          </Box>
        </Box>
        <BackgroundColour />
        <ImageContainer>
          <Img
            fluid={data.hero.childImageSharp.fluid}
            style={{ height: '100%' }}
            // imgStyle={{ objectFit: "contain" }}
          />
        </ImageContainer>
      </Container>
      <UpcomingCourses images={data.coursePreviewImages.edges} />
      <FeaturedBooks />
      <OurPartners />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home-hero-michael.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coursePreviewImages: allFile(
      filter: { sourceInstanceName: { eq: "courses" } }
      limit: 4
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
`;
