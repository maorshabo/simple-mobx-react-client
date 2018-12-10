import React, { Component } from 'react';
import stores from '../../stores';
import EditSidebar from '../../components/EditSidebar/EditSidebar';
import Fab from '../../components/Fab/Fab';
import EditLocation from './LocationsComponents/EditLocation';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';
import Filters from './LocationsComponents/Filters';
import GroupedByCategory from './LocationsComponents/GroupedByCategory';
import LocationsList from './LocationsComponents/LocationsList';
import classnames from 'classnames';

const { locationsStore, commonStore, categoriesStore } = stores;

@withRouter
@observer
class Locations extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    commonStore.hideEditForm();
    categoriesStore.getAll();
    locationsStore.getAll();
    commonStore.setHeaderActions({
      delete: locationsStore.deleteSelected.bind(categoriesStore)
    });
    commonStore.setTitle('Location');
  }

  onItemSelected = (item) => {
    locationsStore.itemSelected(item)
  };

  onEditItem = (item, event) => {
    event.preventDefault();
    event.stopPropagation();
    locationsStore.editItem(item);
  };

  render() {
    const selectedLocation = locationsStore.currentItem;
    const buttonClasses = classnames({
      btn: true,
      ['btn-outline-primary']: !locationsStore.isGrouped,
      ['btn-primary']: locationsStore.isGrouped
    });
    return (
      <div className="container mt-5">
        <div className="actions mb-3">
          <div className="row">
            <div className="col-sm-6">
              <Filters />
            </div>
            <div className="col-sm-6 d-flex justify-content-end align-items-end">
              <button className={buttonClasses} onClick={locationsStore.toggleGrouped}>Group by category</button>
            </div>
          </div>
        </div>
        {locationsStore.isGrouped ?
          (<GroupedByCategory selectedItems={locationsStore.selectedItems} list={locationsStore.list}
                              onEdit={this.onEditItem} onClick={this.onItemSelected} />) :
          (<LocationsList selectedItems={locationsStore.selectedItems} list={locationsStore.list}
                          onEdit={this.onEditItem} onClick={this.onItemSelected} />)
        }
        <EditSidebar isShown={commonStore.isEditFormShown}>
          <EditLocation categories={categoriesStore.dropdownOptions} location={selectedLocation} />
        </EditSidebar>
        <Fab onClick={commonStore.showEditForm} />
      </div>
    );
  }
}

Locations.propTypes = {};

export default Locations;