import { Label, Input } from './Filter.styled';

export const Filter = ({ value, handleChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};
