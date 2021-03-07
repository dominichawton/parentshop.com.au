import { Box, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
import React from 'react';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  position: relative;
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
  ::after {
    content: '';
    transform-origin: left;
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #ff6584;
    transform: scaleX(0);
    transition: 0.2s ease-out all;
  }
`;

function LinkButton({
  text,
  marginLeft = 0,
  link,
  marginY = 0,
  noUnderline = false,
  withIcon = true,
}) {
  const body = (
    <Button
      rightIcon={withIcon ? <IoArrowForward /> : null}
      colorScheme="secondary"
      variant="link"
      ml={marginLeft}
      pb={1}
      my={marginY}
      _hover={{ textDecoration: 'none' }}
    >
      {text}
    </Button>
  );
  return noUnderline ? (
    <Box position="relative" display="inline">
      <Link to={`/${link}`}>{body}</Link>
    </Box>
  ) : (
    <Box position="relative" display="inline">
      <StyledLink to={`/${link}`}>{body}</StyledLink>
    </Box>
  );
}

export default LinkButton;
