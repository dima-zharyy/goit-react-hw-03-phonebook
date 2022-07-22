import React from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ onChange, value }) {
  const filterId = nanoid(5);
  return (
    <div className={css.filterWrap}>
      <label className={css.filterLabel} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        id={filterId}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
