import CategoriesStore from './categoriesStore';
import LocationsStore from './locationsStore';
import CommonStore from './commonStore';

class Stores {
  constructor() {
    this.categoriesStore = new CategoriesStore();
    this.locationsStore = new LocationsStore();
    this.commonStore = new CommonStore();
  }
}

export default new Stores();