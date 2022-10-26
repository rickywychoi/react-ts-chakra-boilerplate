import React from 'react';
import { Container } from '@chakra-ui/react';
import { PADDING_X, PADDING_Y } from './constants';

const WithDefaultStyle = (WrappedComponent: React.FunctionComponent) => {
  return (
    <Container centerContent py={`${PADDING_Y}px`} px={`${PADDING_X}px`}>
      <WrappedComponent />
    </Container>
  );
};

export default WithDefaultStyle;
