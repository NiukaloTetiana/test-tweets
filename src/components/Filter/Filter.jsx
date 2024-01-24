import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </Label>
  );
};
