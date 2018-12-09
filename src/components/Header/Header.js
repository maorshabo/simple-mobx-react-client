import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          Header
        </div>
      </nav>
    );
  }
}

export default Header;