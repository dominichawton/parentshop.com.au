import { Button } from '@chakra-ui/react';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
import React from 'react';
import { Link } from 'gatsby';

function LinkButton({ text, marginLeft = 0, link }) {
  return (
    <Link to={`/${link}`}>
      <Button
        rightIcon={<IoArrowForward />}
        colorScheme="secondary"
        variant="link"
        ml={marginLeft}
        pb={1}
      >
        {text}
      </Button>
    </Link>
  );
}

export default LinkButton;
