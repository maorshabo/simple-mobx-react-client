import { action, computed, observable } from 'mobx-react';
import CrudStore from './crudStore';
import API from '../utils/API';

export default class CategoriesStore extends CrudStore {
  @observable selectedItems = observable.array();

  constructor() {
    super(API.categories);
  }

  @computed
  get dropdownOptions() {
    return this.list.map(item => ({ label: item.name, value: item.id }));
  }

  @action
  itemSelected(item) {
    if (item.id) {
      this.selectedItems[item.id] = item;
    }
  }

  @action
  itemDeselected(item) {
    if (item.id) {
      this.selectedItems.delete(item.id);
    }
  }
}