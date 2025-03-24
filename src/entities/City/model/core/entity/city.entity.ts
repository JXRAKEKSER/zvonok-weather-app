class CityEntity {
  public name: string;
  public coordinates: City;

  constructor(name: string, coordinates: City) {
    this.name = name;
    this.coordinates = coordinates;
  }
}

export default CityEntity;
