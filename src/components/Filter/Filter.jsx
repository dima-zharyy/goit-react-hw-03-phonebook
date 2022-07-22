import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const FilterLabel = styled.div`
  margin-right: 12px;

  white-space: nowrap;
  font-weight: 600;
`;

const FilterInput = styled.input`
  width: 100%;
  padding-left: 6px;
  border-bottom: 1px solid #505050;
`;

export default function Filter({ onChange, value }) {
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
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
