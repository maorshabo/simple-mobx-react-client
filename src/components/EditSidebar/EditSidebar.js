import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './editSidebar.scss';

class EditSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classname = classnames({
      sidebar: true,
      shown: this.props.isShown
    });
    return (
      <div className={classname}>
        <div className="sidebar-header">
          <h2>Edit Sidebar</h2>
        </div>
        <div className="sidebar-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

EditSidebar.propTypes = {
  isShown: PropTypes.bool.isRequired
};

EditSidebar.defaultProps = {};

export default EditSidebar;