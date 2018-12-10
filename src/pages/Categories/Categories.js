import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import stores from '../../stores';
import ListRow from '../../components/ListRow/ListRow';
import Fab from '../../components/Fab/Fab';
import EditSidebar from '../../components/EditSidebar/EditSidebar';
import EditCategory from './CategoriesComponents/EditCategory';

const { commonStore, categoriesStore } = stores;

@withRouter
@observer
class Categories extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    commonStore.hideEditForm();
    commonStore.setTitle('Categories');
    commonStore.setHeaderActions({
      delete: categoriesStore.deleteSelected.bind(categoriesStore)
    });
    categoriesStore.getAll();
  }

  onItemSelected = (item) => {
    categoriesStore.itemSelected(item)
  };

  onEditItem = (item, event) => {
    event.preventDefault();
    event.stopPropagation();
    categoriesStore.editItem(item);
  };

  renderEmptyState = () => {
    if (Object.keys(categoriesStore.list).length === 0) {
      return <li className="list-group-item">
        <h3>It's empty here....</h3>
      </li>
    }
    return null;
  };

  addItem = () => {
    categoriesStore.editItem(undefined);
    commonStore.showEditForm();
  };

  render() {
    const emptyState = this.renderEmptyState();
    const selectedCategory = categoriesStore.currentItem;
    return (
      <div className="container mt-5">
        <ul className="list-group list-group-flush">
          {emptyState}
          {categoriesStore.list.map((category) => (
            <li className="list-group-item" key={category.id}>
              <ListRow title={category.name} isSelected={categoriesStore.selectedItems.has(category.id)} onClick={this.onItemSelected.bind(this, category)} onEdit={this.onEditItem.bind(this, category)} />
            </li>
          ))}
        </ul>
        <EditSidebar isShown={commonStore.isEditFormShown}>
          <EditCategory category={selectedCategory} />
        </EditSidebar>
        <Fab onClick={this.addItem} />
      </div>
    );
  }
}

Categories.propTypes = {};

export default Categories;