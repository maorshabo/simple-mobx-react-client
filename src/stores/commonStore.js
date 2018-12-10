import { action, observable } from 'mobx';

export default class CommonStore {
  @observable title = 'Welcome';
  @observable isEditFormShown = false;
  @observable selectedCount = 0;
  @observable headerActions;

  constructor(stores) {
    stores.categoriesStore.onSelectedItemsChange(selectedItems => {
        this.selectedCount = selectedItems.size;
    });
    stores.locationsStore.onSelectedItemsChange(selectedItems => {
      this.selectedCount = selectedItems.size;
    });
  }

  @action
  setTitle(title) {
    this.title = title;
  }

  @action
  setHeaderActions(actions) {
    this.headerActions = actions;
  }

  @action
  deleteSelected = () => {
    if (this.headerActions.delete) {
      this.headerActions.delete()
    }
  };

  @action
  showEditForm = () => {
    this.isEditFormShown = true;
  };

  @action
  hideEditForm = () => {
    this.isEditFormShown = false;
  };
}