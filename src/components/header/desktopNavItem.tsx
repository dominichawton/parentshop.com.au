import { ListItem } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

interface DesktopNavItemProps {
  name: string;
}

function DesktopNavItem({ name }: DesktopNavItemProps) {
  const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <ListItem
      ml={12}
      mb={0}
      fontSize="md"
      fontWeight="600"
      transition="75ms ease-in all"
      color="gray.500"
      _hover={{
        color: "primary.500",
      }}
    >
      <Link to={`/${name}`} activeStyle={{ color: "#171923" }}>
        {capitalisedName}
      </Link>
    </ListItem>
  );
}

export default DesktopNavItem;
