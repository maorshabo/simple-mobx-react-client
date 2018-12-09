import React, { Component } from 'react';
import './editSidebar.scss';

class EditSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Edit Sidebar
        {this.props.children}
      </div>
    );
  }
}

EditSidebar.propTypes = {
};

EditSidebar.defaultProps = {
};

export default EditSidebar;