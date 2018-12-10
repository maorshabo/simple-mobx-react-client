import { action, computed, observable, reaction } from 'mobx';
import CrudStore from './crudStore';
import API from '../utils/API';
import Category from '../models/Category';

export default class CategoriesStore extends CrudStore {
  @observable selectedItems = observable.map();
  @observable currentItem;

  constructor(stores) {
    super(API.categories, Category);
    this.stores = stores;
  }

  onSelectedItemsChange(callback) {
    reaction(
      () => this.selectedItems.size,
      (size) => callback(this.selectedItems)
    )
  }

  @computed
  get dropdownOptions() {
    return this.list.map(item => ({ label: item.name, value: item.id }));
  }

  @computed
  get selected() {
    return Object.values(this.selectedItems);
  }

  @action
  deleteSelected = () => {
    for (let selectedItem of this.selectedItems.values()) {
      if (selectedItem.id) {
        this.delete(selectedItem.id);
      }
    }
  };

  @action
  itemSelected(item) {
    if (item.id) {
      if (this.selectedItems.has(item.id)) {
        this.itemDeselected(item);
      }
      else {
        this.selectedItems.set(item.id, item);
      }
    }
  }

  @action
  itemDeselected(item) {
    if (item.id) {
      this.selectedItems.delete(item.id);
    }
  }

  @action
  editItem = (item) => {
    this.currentItem = item;
    this.stores.commonStore.showEditForm();
  }
}