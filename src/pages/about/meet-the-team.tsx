import { Divider, Flex, Grid, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { teamData } from '../../components/meet-the-team/team';
import TeamBio from '../../components/meet-the-team/team-bio';

function MeetTheTeam({ data }) {
  const staff = data.teamMembers.nodes.filter((node) => node.type === 'staff');
  const consultants = data.teamMembers.nodes.filter(
    (node) => node.type === 'consultant'
  );
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      mt={6}
      mb={16}
    >
      <Heading as="h1" mt={10}>
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
        {staff.map((staff) => {
          return (
            <TeamBio
              key={staff.name}
              name={staff.name}
              role={staff.role}
              bio={staff.bio.bio}
              imageSrc={staff.image.fluid}
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
      <Grid templateColumns="repeat(3, 1fr)" gap={16} w="100%" mt={12}>
        {consultants.map((consultant) => {
          return (
            <TeamBio
              key={consultant.name}
              name={consultant.name}
              role={consultant.role}
              bio={consultant.bio.bio}
              imageSrc={consultant.image.fluid}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}

export default MeetTheTeam;

export const query = graphql`
  query {
    teamMembers: allContentfulTeamMember {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
        role
        type
        bio {
          bio
        }
      }
    }
  }
`;
