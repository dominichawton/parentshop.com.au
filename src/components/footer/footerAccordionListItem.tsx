import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

type ListItem = {
  text: string;
  path: string;
};

interface FooterAccordionListProps {
  buttonText: string;
  listItems: ListItem[];
}

function FooterAccordionList({
  buttonText,
  listItems,
}: FooterAccordionListProps) {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left" fontWeight="600" color="gray.800">
          {buttonText}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <UnorderedList styleType="none" ml={0}>
          {listItems.map((item, index) => (
            <ListItem my={4} color="gray.500" key={index} fontWeight="600">
              <Link to={`/${item.path}`}>{item.text}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default FooterAccordionList;
