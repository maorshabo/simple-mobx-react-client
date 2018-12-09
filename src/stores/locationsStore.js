import { action, observable } from 'mobx-react';
import CrudStore from './crudStore';
import API from '../utils/API';

export default class LocationsStore extends CrudStore {
  @observable selectedItems = {};

  constructor() {
    super(API.locations);
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