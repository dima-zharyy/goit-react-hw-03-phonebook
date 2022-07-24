import React from 'react';
import { FilterLabel, FilterInput, FilterWrapper } from './Filter.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  const filterId = nanoid(5);
  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterId}
        onChange={onChange}
        value={value}
      />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
