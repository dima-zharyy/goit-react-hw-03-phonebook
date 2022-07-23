import React from 'react';

import {
  ContactItem,
  ContactTextWrapper,
  ContactName,
  Button,
} from './ContactListItem.styled';

import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, onClick }) => {
  return (
    <ContactItem>
      <ContactTextWrapper>
        <ContactName>{name}:</ContactName> <span>{number}</span>
      </ContactTextWrapper>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
