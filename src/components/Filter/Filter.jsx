import { useState } from 'react';
import { TbFilterHeart } from 'react-icons/tb';

import { Container, Text, List, Item } from './Filter.styled';

export const Filter = ({ onSelectFilter }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Filter');

  const handleContainerClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleItemClick = item => {
    setSelectedItem(item);
    setIsListVisible(false);
    onSelectFilter(item);
  };

  return (
    <Container onClick={handleContainerClick}>
      <Text>
        {selectedItem === 'Filter' ? (
          <>
            Filter <TbFilterHeart />
          </>
        ) : (
          selectedItem
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
