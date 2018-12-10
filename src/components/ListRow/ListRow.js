import PropTypes from 'prop-types';
import React from 'react';

function ListRow(props) {
  return (
    <div className="card">
      <div className="card-body" onClick={props.onClick}>
        <h5>{props.title}</h5>
        <sub>{props.subTitle}</sub>
      </div>
    </div>
  );
}

ListRow.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  onClick: PropTypes.func
};

export default ListRow;