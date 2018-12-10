import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import stores from '../../../stores';
import LocationsList from './LocationsList';

const { categoriesStore } = stores;

@observer
class GroupedByCategory extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const categoriesIdsMap = this.props.list.map(item => item.category).reduce((prev, current) => {
      if (!prev[current])
        prev[current] = [];
      return prev;
    }, {});

    this.props.list.forEach(item => {
      if (item.category) {
        categoriesIdsMap[item.category].push(item);
      }
    });

    return (
      <div>
        {Object.keys(categoriesIdsMap).map(cId => {
          const category = categoriesStore.getById(cId);
          const categoryName = category && category.name || '';
          return (
            <div key={cId}>
              <h2>{categoryName}</h2>
              <LocationsList selectedItems={this.props.selectedItems} list={categoriesIdsMap[cId]}
                             onEdit={this.props.onEdit} onClick={this.props.onClick} />
            </div>
          )
        })}
      </div>
    );
  }
}

GroupedByCategory.propTypes = {
  selectedItems: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default GroupedByCategory;