import { action, computed, observable } from 'mobx-react';

export default class CommonStore {
  @observable title;

  @action
  setTitle(title) {
    this.title = title;
  }
}