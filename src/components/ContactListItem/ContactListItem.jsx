import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, onClick }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactWrap}>
        <span className={css.contactName}>{name}: </span> <span>{number}</span>
      </div>
      <button type="button" className={css.btn} onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
