import { chakra, Flex, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { useState } from 'react';

import styled from '@emotion/styled';
interface DesktopNavItemProps {
  name: string;
  dropdown?: boolean;
  dropdownItems?: {
    name: string;
    description: string;
    path: string;
  }[];
}

const StyledDiv = styled.div`
  &:hover > li {
    color: #38b2ac;
  }
  & > li > div {
    visibility: hidden;
    opacity: 0;
    -prefixes-transition-property: opacity, visibility;
    -prefixes-transition-duration: 0.4s, 0s;
    -prefixes-transition-delay: 0s, 0.4s;
    transform: translateY(-5px);
  }

  & .dropdown-container > *:not(:first-child) {
    border-top: 1px solid #e2e8f0;
  }

  &:hover > li > div {
    visibility: visible;
    opacity: 1;
    -prefixes-transition-delay: 0s, 0s;
    transform: translateY(0);
  }

  & .item-container:hover {
    & .item-name {
      color: #38b2ac;
    }
  }
`;

function DesktopNavItem({
  name,
  dropdown = false,
  dropdownItems,
}: DesktopNavItemProps) {
  const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  return (
    <StyledDiv>
      <ListItem
        ml={12}
        mb={0}
        fontSize="md"
        fontWeight="600"
        transition="75ms ease-in all"
        color="gray.500"
        position="relative"
        zIndex={9999}
        py={3}
      >
        <Link
          to={dropdown ? `#` : `/${name}`}
          activeStyle={{ color: '#171923' }}
        >
          {capitalisedName}
        </Link>
        {dropdown ? (
          <Flex
            position="absolute"
            top={12}
            right={0}
            p={6}
            bgColor="white"
            border="1px solid"
            borderColor="gray.200"
            flexDir="column"
            shadow="lg"
            transition="75ms ease-in all"
            borderRadius="md"
            className="dropdown-container"
          >
            {dropdownItems.map((item, index) => (
              <Flex
                key={index}
                flexDir="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                py={4}
                minW="200px"
                className="item-container"
              >
                <Link to={`/${name}/${item.path}/`}>
                  <Text
                    fontSize="1rem"
                    color="gray.800"
                    fontWeight="600"
                    className="item-name"
                    transition="75ms ease-in all"
                  >
                    {item.name}
                  </Text>
                  <Text fontSize=".9rem" color="gray.500" fontWeight="400">
                    {item.description}
                  </Text>
                </Link>
              </Flex>
            ))}
          </Flex>
        ) : null}
      </ListItem>
    </StyledDiv>
  );
}

export default DesktopNavItem;
