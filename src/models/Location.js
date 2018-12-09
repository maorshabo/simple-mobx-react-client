class Location {
  constructor(rawLocation) {
    this.id = rawLocation.id;
    this.name = rawLocation.name;
    this.coordinates = rawLocation.coordinates;
    this.address = rawLocation.address;
    this.category = rawLocation.category;
  }
}

export default Location;