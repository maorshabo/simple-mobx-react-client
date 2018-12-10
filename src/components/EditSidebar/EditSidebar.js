import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './editSidebar.scss';
import stores from '../../stores';

const { commonStore } = stores;

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
          <h2>
            Edit Sidebar
            <i className="fa fa-remove pull-right mr-4" onClick={commonStore.hideEditForm} /></h2>
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