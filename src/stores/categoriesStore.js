import { action, computed, observable } from 'mobx';
import CrudStore from './crudStore';
import API from '../utils/API';
import Category from '../models/Category';

export default class CategoriesStore extends CrudStore {
  @observable selectedItems = observable.array();

  constructor() {
    super(API.categories, Category);
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