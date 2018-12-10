import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

@observer
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <Link to="/categories"><i className="fa fa-tags" /> Categories</Link>
            </div>
            <div className="col-6 text-center">
              <Link to="/locations"><i className="fa fa-map" /> Locations</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;