import React from 'react';
import PropTypes from 'prop-types';
import s from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filterLabel}>
    Find contacts by name
    <input
      className={s.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
