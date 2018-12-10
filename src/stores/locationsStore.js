import { action, observable, reaction } from 'mobx';
import CrudStore from './crudStore';
import API from '../utils/API';
import Location from '../models/Location';

export default class LocationsStore extends CrudStore {
  @observable selectedItems = observable.map();
  @observable isGrouped = false;

  constructor(stores) {
    super(API.locations, Location);
    this.stores = stores;
  }

  onSelectedItemsChange(callback) {
    reaction(
      () => this.selectedItems.size,
      (size) => callback(this.selectedItems)
    )
  }

  @action
  filterByCategory = (categoryId) => {
    this.getAll();
    if (categoryId) {
      this.list.replace(this.list.filter(location => location.category === categoryId));
    }
  };

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
  };

  @action
  toggleGrouped = () => {
    this.isGrouped = !this.isGrouped;
  }
}