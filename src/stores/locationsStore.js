import { action, observable } from 'mobx';
import CrudStore from './crudStore';
import API from '../utils/API';
import Location from '../models/Location';

export default class LocationsStore extends CrudStore {
  @observable selectedItems = {};

  constructor() {
    super(API.locations, Location);
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