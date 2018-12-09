import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

@observer
class Footer extends React.Component {
  render() {
    return (
      <footer className="fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link to="/categories">Categories</Link>
            </div>
            <div className="col-6">
              <Link to="/locations">Locations</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;