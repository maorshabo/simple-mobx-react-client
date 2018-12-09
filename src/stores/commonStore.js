import { action, computed, observable } from 'mobx';

export default class CommonStore {
  @observable title = 'Welcome';
  @observable isEditFormShown = false;

  @action
  setTitle(title) {
    this.title = title;
  }

  @action
  showEditForm = () => {
    this.isEditFormShown = true;
  };

  @action
  hideEditForm = () => {
    this.isEditFormShown = false;
  };
}