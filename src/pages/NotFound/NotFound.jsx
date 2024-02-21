import React from 'react';
import { Wrapper, Text } from './NotFound.styled';
import { GoBack } from 'components/GoBack/GoBack';

const NotFound = () => {
  return (
    <Wrapper>
      <Text>Sorry... Page was not found!</Text>
      <GoBack />
    </Wrapper>
  );
};

export default NotFound;
