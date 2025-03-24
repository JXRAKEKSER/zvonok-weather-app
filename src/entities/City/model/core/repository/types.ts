import CityEntity from '../entity/city.entity';

interface ICityRepository {
  getCities(): Promise<CityEntity[]>;
  getPopularCities(): Promise<CityEntity[]>;
}

export type { ICityRepository };
