import { action, observable } from 'mobx';

class CrudStore {

  @observable isLoading = true;
  @observable list = observable.array();

  constructor(apiService, model) {
    this.api = apiService;
    this.model = model;
  }

  @action
  getAll() {
    this.isLoading = true;
    this.list.replace(this.api.list().map(item => new this.model(item)));
  }

  @action
  create(object) {
    this.isLoading = true;
    const response = this.api.create(object);
    if (response && response.id) {
      this.list.push(new this.model(response));
      this.isLoading = false;
    }
  }

  @action
  update(object) {
    this.isLoading = true;
    const response = this.api.update(object.id, object);
    if (response.id) {
      const idx = this.list.findIndex(c => c.id === object.id);
      this.list[idx] = new this.model(response);
    }
    this.isLoading = false;
  }

  @action
  delete(id) {
    this.api.delete(id);
    const idx = this.list.findIndex(c => c.id === id);
    this.list.splice(idx, 1);
  }

}

export default CrudStore;