import { Box, Flex, Text, Heading, Grid } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import TargetAudience from '../components/alliances/target-audience';
import ContactForm from '../components/contact/contact-form';

function AlliancesPage({ data }) {
  return (
    <Flex
      flexDir="column"
      justify="start"
      align="center"
      w="100%"
      mt={8}
      mb={16}
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Flex
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          w="50%"
          mr={20}
        >
          <Heading as="h1" fontWeight="semibold" mt={10}>
            Alliances
          </Heading>
          <Text mt={3} color="gray.600">
            Parentshop partners with organisations who are looking to train
            large groups. Partners receive tailored course content and
            discounted courses and resources. We have various partnerships
            already in place and are always looking to partner-up with new
            organisations.
          </Text>
        </Flex>
        <Box w="50%" overflow="hidden" boxShadow="lg" borderRadius="lg" mt={10}>
          <Img fluid={data.michael.childImageSharp.fluid} />
        </Box>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={5} my={32}>
        <TargetAudience
          title="education"
          body="If you’re a leaders’ association, a district of schools, or an individual school we can work with you to tailor solutions to solve problems in schools. For example, we currently work with principals’ organisations to provide in-school interventions, like teacher-led anxiety programs for use in Australian classrooms."
          link="courses"
          image={data.education.childImageSharp.fluid}
        />
        <TargetAudience
          title="community"
          body="If you’re a peak group for an Australian community organisation, NGO, or a state-based organisation we can work with you to set-up population-based interventions or system-wide training. For example, we are currently working with Bushkids in QLD to reduce anxiety in primary-aged children through our No Scaredy Cats program."
          link="courses"
          image={data.community.childImageSharp.fluid}
        />
        <TargetAudience
          title="parents"
          body="If you’re a parents and friends association or a corporate organisation, whose mission is to look after parents, we can help you to provide practical and easy-to-learn resources for parents. For example, Adopt Change (a peak body for adoption in Australia) recently purchased 200 of our Talk Less Listen More online parenting courses its carers."
          link="courses"
          image={data.parents.childImageSharp.fluid}
        />
      </Grid>
      <Flex justifyContent="space-between" alignItems="flex-start" w="100%">
        <Flex flexDir="column" justify="start" align="start" w="50%" mr={20}>
          <Heading as="h2" fontWeight="semibold">
            Want to know more?
          </Heading>
          <Text my={3}></Text>
          <ContactForm variant="small" />
        </Flex>
        <Box w="50%" borderRadius="md" overflow="hidden" boxShadow="lg">
          <Img fluid={data.contact.childImageSharp.fluid} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default AlliancesPage;

export const query = graphql`
  query {
    michael: file(relativePath: { eq: "alliances/michael-teaching.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    contact: file(relativePath: { eq: "contact/contact-books.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    education: file(relativePath: { eq: "alliances/education.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    community: file(relativePath: { eq: "alliances/community.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parents: file(relativePath: { eq: "alliances/parents.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
