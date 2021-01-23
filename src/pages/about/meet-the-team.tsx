import { Divider, Flex, Grid, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { teamData } from '../../components/meet-the-team/team';
import TeamBio from '../../components/meet-the-team/team-bio';

function MeetTheTeam() {
  const data = useStaticQuery(graphql`
    query {
      staff: allFile(filter: { sourceInstanceName: { eq: "staff" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
      presenters: allFile(
        filter: { sourceInstanceName: { eq: "presenters" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                originalName
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
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={8}
      mb={16}
    >
      <Heading as="h1" fontWeight="semibold" mt={10}>
        Meet the team
      </Heading>
      <Heading
        as="h2"
        fontSize="1.6rem"
        fontWeight="semibold"
        mt={12}
        color="gray.600"
      >
        Parentshop HQ, Byron Bay
      </Heading>
      <Divider mt={5} />
      <Grid templateColumns="repeat(3, 1fr)" gap={16} w="100%" mt={12}>
        {data.staff.edges.map((edge, i) => {
          return (
            <TeamBio
              key={i}
              name={teamData.staff[i].name}
              title={teamData.staff[i].title}
              bio={teamData.staff[i].bio}
              imageSrc={edge.node.childImageSharp.fluid}
            />
          );
        })}
      </Grid>
      <Heading
        as="h2"
        fontSize="1.6rem"
        fontWeight="semibold"
        mt={16}
        color="gray.600"
      >
        Presenters & consultants
      </Heading>
      <Divider mt={5} />
      <Grid templateColumns="repeat(3, 1fr)" gap={32} w="100%" mt={12}>
        {data.presenters.edges.map((edge, i) => {
          return (
            <TeamBio
              key={i}
              name={teamData.presenters[i].name}
              title={teamData.presenters[i].title}
              bio={teamData.presenters[i].bio}
              imageSrc={edge.node.childImageSharp.fluid}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}

export default MeetTheTeam;
