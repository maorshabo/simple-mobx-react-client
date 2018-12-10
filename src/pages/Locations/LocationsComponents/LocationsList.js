import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListRow from '../../../components/ListRow/ListRow';
import EmptyState from '../../../components/EmptyState/EmptyState';
import { observer } from 'mobx-react';
import stores from '../../../stores';

const { categoriesStore } = stores;

@observer
class LocationsList extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul className="list-group list-group-flush">
        <EmptyState list={list} />
        {list.map((location) => {
          const category = categoriesStore.getById(location.category);
          const categoryName = category && category.name || '';
          return (
            <li className="list-group-item" key={location.id}>
              <ListRow title={location.name} onEdit={() => this.props.onEdit(location)} extra={categoryName}
                       subTitle={location.address} isSelected={this.props.selectedItems.has(location.id)}
                       onClick={() => this.props.onClick(location)} />
            </li>
          )
        })}
      </ul>
    );
  }
}

LocationsList.propTypes = {
  selectedItems: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LocationsList;