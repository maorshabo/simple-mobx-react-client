import React, { Component } from 'react';
import stores from '../../stores';
import ListRow from '../../components/ListRow/ListRow';
import EditSidebar from '../../components/EditSidebar/EditSidebar';
import Fab from '../../components/Fab/Fab';
import EditLocation from './LocationsComponents/EditLocation';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';

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

  renderEmptyState = () => {
    if (Object.keys(locationsStore.list).length === 0) {
      return <li className="list-group-item">
        <h3>It's empty here....</h3>
      </li>
    }
    return null;
  };

  onEditItem = (item, event) => {
    event.preventDefault();
    event.stopPropagation();
    locationsStore.editItem(item);
  };

  render() {
    const emptyState = this.renderEmptyState();
    const selectedLocation = locationsStore.currentItem;
    return (
      <div className="container mt-5">
        <ul className="list-group list-group-flush">
          {emptyState}
          {locationsStore.list.map((location) => {
            const category = categoriesStore.getById(location.category);
            const categoryName = category && category.name || '';
            return (
              <li className="list-group-item" key={location.id}>
                <ListRow title={location.name} onEdit={this.onEditItem.bind(this, location)} extra={categoryName} subTitle={location.address} isSelected={locationsStore.selectedItems.has(location.id)} onClick={this.onItemSelected.bind(this, location)} />
              </li>
            )
          })}
        </ul>
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