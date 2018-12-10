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
    commonStore.setTitle('Categories');
    categoriesStore.getAll();
  }

  render() {
    return (
      <div className="container">
        Categories
        <ul className="list-group list-group-flush">
          {categoriesStore.list.map((category) => (
            <li className="list-group-item" key={category.id}>
              <ListRow title={category.name} />
            </li>
          ))}
        </ul>
        <EditSidebar isShown={commonStore.isEditFormShown}>
          <EditCategory category={categoriesStore.selectedItems[0]} />
        </EditSidebar>
        <Fab onClick={commonStore.showEditForm} />
      </div>
    );
  }
}

Categories.propTypes = {};

export default Categories;