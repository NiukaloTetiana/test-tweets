import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TbFilterHeart } from 'react-icons/tb';

import { filterUsers } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

import { Container, Text, List, Item } from './Filter.styled';

export const Filter = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleContainerClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleItemClick = item => {
    setIsListVisible(false);
    dispatch(filterUsers(item));
  };

  return (
    <Container onClick={handleContainerClick}>
      <Text>
        {filter === 'filter' ? (
          <>
            Filter <TbFilterHeart />
          </>
        ) : (
          filter
        )}
      </Text>

      <List $isVisible={isListVisible}>
        <Item onClick={() => handleItemClick('show all')}>show all</Item>
        <Item onClick={() => handleItemClick('follow')}>follow</Item>
        <Item onClick={() => handleItemClick('followings')}>followings</Item>
      </List>
    </Container>
  );
};
