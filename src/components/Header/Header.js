import { observer } from 'mobx-react';
import React from 'react';
import './header.scss';

import stores from '../../stores';

const { commonStore } = stores;

@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-primary">
          <div className="col-4 pull-left">{commonStore.title}</div>
          {commonStore.selectedCount > 0 && (
          <div className="col-8 pull-right text-right">
            <span>{commonStore.selectedCount} Selected</span>
            <span className="ml-2"><i className="fa fa-trash" onClick={commonStore.deleteSelected}/></span>
          </div>
          )}
      </nav>
    );
  }
}

export default Header;