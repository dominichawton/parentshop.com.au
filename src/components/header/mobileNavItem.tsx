import { ListItem } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

interface MobileNavItemProps {
  name: string;
  color?: string;
  isOpen: boolean;
  onToggle: () => void;
}

function MobileNavItem({
  name,
  onToggle,
  isOpen,
  color = "gray.900",
}: MobileNavItemProps) {
  const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <ListItem
      textAlign="left"
      fontSize="md"
      color={color}
      my={6}
      fontWeight="600"
      transition="75ms ease-in all"
      _hover={{
        color: "primary.600",
      }}
      w="100%"
      onClick={() => (isOpen ? onToggle() : null)}
    >
      <Link to={`/${name}`}>{capitalisedName}</Link>
    </ListItem>
  );
}

export default MobileNavItem;
