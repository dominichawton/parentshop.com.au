import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

function MichaelHawton() {
  const data = useStaticQuery(graphql`
    query {
      michael: file(relativePath: { eq: "about/michael.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      w="100%"
      mt={16}
      mb={16}
    >
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="100%"
      >
        <Text
          textTransform="uppercase"
          letterSpacing=".2rem"
          color="primary.500"
          fontSize=".9rem"
        >
          Parentshop founder
        </Text>
        <Heading as="h1" fontWeight="semibold" mt={3}>
          Michael Hawton
        </Heading>
        <Text fontSize="1.3rem" fontWeight="400" color="gray.600" mt={3}>
          MAPS, B.A., Grad. Dip. (App. Psych.), Dip. (Teaching), Grad. Cert.
          (Bus. Admin.)
        </Text>
        <Flex color="primary.500" mt={4}>
          <Box mr={4}>
            <IconContext.Provider value={{ size: '1.2rem' }}>
              <Box>
                <FiLinkedin />
              </Box>
            </IconContext.Provider>
          </Box>
          <Box>
            <IconContext.Provider value={{ size: '1.2rem' }}>
              <Box>
                <FiTwitter />
              </Box>
            </IconContext.Provider>
          </Box>
        </Flex>
        <Text mt={8} color="gray.800">
          Michael Hawton is a registered Australian psychologist, trained
          teacher, author of Talk Less Listen More™ and Engaging Adolescents™,
          international speaker, media commentator, and a father of two.
          <br />
          <br />
          With 30 years’ experience working with children and families including
          in his private practice, working with the United Nations in
          Seychelles, and preparing child welfare reports for the Family Court,
          Michael is one of Australia’s foremost experts in managing difficult
          behaviours in children, adolescents, and adults.
          <br />
          <br />
          Featuring regularly as a panel guest advisor on shows such as Today,
          Sunrise and more, Michael teaches teachers, family workers, early
          years educators, and parents based the latest research in behavioural
          science, covering a range of topics such as positive cultural change
          in schools, how to have tough conversations in the workplace,
          improving self-regulation in children, reducing anxiety in children,
          managing tricky adolescent behaviours, and tackling family of origin
          issues in child protection.
          <br />
          <br />
          Michael’s training programs have equiped over +12,500 professionals
          and teachers and +110,000 parents across Australia, NZ, UK, and the
          United States since 2006 through 1-2-3 Magic® and Emotion Coaching,
          Engaging Adolescents™ and Tough Conversations™.
        </Text>
        <Flex
          mt={12}
          py={6}
          px={8}
          borderRadius="lg"
          bgColor="secondary.100"
          w="100%"
          justify="center"
          align="center"
        >
          <Text color="secondary.500" fontWeight="semibold" textAlign="left">
            For interviews and media requests call 1300 738 278 or contact us.
            See recent media here.
          </Text>
        </Flex>
      </Flex>
      <Box overflow="hidden" boxShadow="lg" borderRadius="lg" w="70%" ml={16}>
        <Img fluid={data.michael.childImageSharp.fluid} />
      </Box>
    </Flex>
  );
}

export default MichaelHawton;
