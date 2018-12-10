import CategoriesStore from './categoriesStore';
import LocationsStore from './locationsStore';
import CommonStore from './commonStore';

class Stores {
  constructor() {
    this.categoriesStore = new CategoriesStore(this);
    this.locationsStore = new LocationsStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export default new Stores();