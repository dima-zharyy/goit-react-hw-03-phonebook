import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;

  :not(:last-child) {
    margin-bottom: 6px;

    border-bottom: 1px solid #5050503b;
  }
`;

const ContactTextWrapper = styled.div`
  display: flex;
`;

const ContactName = styled.span`
  min-width: 140px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  padding: 0;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.87;

  color: #ffffff;

  background-color: #188ae8a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;

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

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
