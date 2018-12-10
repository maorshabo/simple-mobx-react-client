import React from 'react';
import PropTypes from 'prop-types';
import './fab.scss';

export default function Fab(props) {
  return (
    <div className="fab" onClick={props.onClick}>
      <i className="fa fa-plus fa-2x" />
    </div>
  )
}
Fab.propTypes = {
  onClick: PropTypes.func.isRequired
};