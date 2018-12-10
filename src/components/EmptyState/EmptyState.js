import React from 'react';
import PropTypes from 'prop-types';

const EmptyState = (props) => {
  if (props.list.length === 0) {
    return <li className="list-group-item">
      <h3>It's empty here....</h3>
    </li>
  }
  return null;
};

EmptyState.propTypes = {
  list: PropTypes.array.isRequired
};

export default EmptyState;