import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

type NavItem = {
  name: string;
  link: string;
};

interface FooterNavColumnProps {
  heading: string;
  navItems: NavItem[];
}

function FooterNavColumn({ heading, navItems }: FooterNavColumnProps) {
  return (
    <>
      <Flex mr={{ base: 16, xl: 24 }} flexDir="column">
        <Text color="gray.900" fontWeight="600" fontSize={14}>
          {heading}
        </Text>
        <UnorderedList styleType="none" display="flex" flexDir="column" ml={0}>
          {navItems.map((navItem, index) => (
            <ListItem
              color="gray.600"
              transition="75ms ease-in all"
              fontWeight="400"
              mt={3}
              fontSize={14}
              _hover={{
                color: "primary.500",
                textDecoration: "none",
              }}
              key={index}
            >
              <Link to={`/${navItem.link}`}>{navItem.name}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </>
  );
}

export default FooterNavColumn;
