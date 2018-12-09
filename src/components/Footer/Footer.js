import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

@observer
class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        Footer
      </div>
    );
  }
}

export default Footer;