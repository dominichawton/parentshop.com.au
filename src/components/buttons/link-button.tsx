import { Button } from '@chakra-ui/react';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
import React from 'react';
import { Link } from 'gatsby';

function LinkButton({ text, marginLeft = 0, link, marginY = 0 }) {
  return (
    <Link to={`/${link}`}>
      <Button
        rightIcon={<IoArrowForward />}
        colorScheme="secondary"
        variant="link"
        ml={marginLeft}
        pb={1}
        my={marginY}
      >
        {text}
      </Button>
    </Link>
  );
}

export default LinkButton;
