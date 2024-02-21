import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TfiControlBackward } from 'react-icons/tfi';

import { StyledLink } from './GoBack.styled';

export const GoBack = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || `/`);

  return (
    <StyledLink to={backLinkRef.current}>
      <TfiControlBackward />
      Go back.
    </StyledLink>
  );
};
