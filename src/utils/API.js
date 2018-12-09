import uuid from 'uuid/v4';
const LocalStorage = window.localStorage;

class CrudAPI {
  constructor(prefix) {
    this.prefix = prefix;
  }

  generateKey(id) {
    return `${this.prefix}.${id}`;
  }

  create(object) {
    const id = uuid();
    LocalStorage.setItem(this.generateKey(id), object);
    return {
      id,
      ...object
    };
  }

  list() {
    const results = [];
    for(let i = 0; i < LocalStorage.length; ++i) {
      if (LocalStorage.key(i).indexOf(this.prefix) === 0) {
        results.push(LocalStorage.getItem(LocalStorage.key(i)));
      }
    }
    return results;
  }

  getById(id) {
    const storedItem = LocalStorage.getItem(this.generateKey(id));
    return {
      id,
      storedItem
    }
  }

  update(id, object) {
    LocalStorage.setItem(this.generateKey(id), object);
    return this.getById(id);
  }

  delete(id) {
    LocalStorage.removeItem(this.generateKey(id));
  }
}

class CategoriesAPI extends CrudAPI {
  constructor() {
    super('categories');
  }
}

class LocationsAPI extends CrudAPI {
  constructor() {
    super('locations');
  }
}

export default {
  categories: new CategoriesAPI(),
  locations: new LocationsAPI()
}