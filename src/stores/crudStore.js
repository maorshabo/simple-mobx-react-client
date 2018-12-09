import { action, observable } from 'mobx';

class CrudStore {

  @observable isLoading = true;
  @observable list = observable.array();

  constructor(apiService) {
    this.api = apiService;
  }

  @action
  getAll() {
    this.isLoading = true;
    return this.api.list().then(action(response => {
      if (response.results) {
        this.list.replace(response.results);
      }
      this.isLoading = false;
    }))
  }

  @action
  create(object) {
    this.isLoading = true;
    return this.api.create(object).then(action(response => {
      if (response.results && response.results.id) {
        this.list.push(response.results);
        this.isLoading = false;
      }
    }));
  }

  @action
  update(object) {
    this.isLoading = true;
    return this.api.update(object.id, object).then(action(response => {
      if (response.results && response.results.id) {
        const idx = this.list.findIndex(c => c.id === object.id);
        this.list[idx] = response.results;
      }
      this.isLoading = false;
    }))
  }

  @action
  delete(id) {
    return this.api.delete(id).then(action(response => {
      const idx = this.list.findIndex(c => c.id === id);
      this.list.splice(idx, 1);
    }))
  }

}

export default CrudStore;