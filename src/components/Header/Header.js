import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

import stores from '../../stores';

const { commonStore } = stores;

@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">{commonStore.title}</div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;