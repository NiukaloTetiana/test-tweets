import React from 'react';
import { GoBack } from 'components';
import { Wrapper, Text } from './Error.styled';

export const Error = () => {
  return (
    <Wrapper>
      <Text>Oops... Something went wrong.</Text>
      <GoBack />
    </Wrapper>
  );
};
