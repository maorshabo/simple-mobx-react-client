import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './listRow.scss';

function ListRow(props) {
  const className = classnames({
    card: true,
    selected: props.isSelected
  });
  return (
    <div className={className}>
      <div className="card-body" onClick={props.onClick}>
        <div className="row">
            <div className="col-8">
              <h5>{props.title}</h5>
              <sub>{props.subTitle}</sub>
              {props.extra && <p>Category: {props.extra}</p>}
            </div>
            <div className="col-4 text-right">
              <i className="fa fa-edit" onClick={props.onEdit}/>
            </div>
        </div>
      </div>
    </div>
  );
}

ListRow.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  isSelected: PropTypes.bool,
  extra: PropTypes.string,
  onClick: PropTypes.func,
  onEdit: PropTypes.func
};

export default ListRow;