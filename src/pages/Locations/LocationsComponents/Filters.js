import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';
import stores from '../../../stores';

const { locationsStore, categoriesStore } = stores;

@observer
class Filters extends Component {

  onChange = (selected) => {
    locationsStore.filterByCategory(selected && selected.value);
  };

  render() {
    return (
      <div>
        <h3>Filter By Category</h3>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable={true}
          onChange={this.onChange}
          options={categoriesStore.dropdownOptions}
        />
      </div>
    );
  }
}

export default Filters;