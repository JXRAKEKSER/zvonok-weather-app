import type { ICityRepository } from '../repository/types';

class CityService {
  private readonly cityRepository: ICityRepository;

  constructor(cityRepository: ICityRepository) {
    this.cityRepository = cityRepository;
  }

  async getCities() {
    return this.cityRepository.getCities();
  }

  async getPopularCities() {
    return this.cityRepository.getPopularCities();
  }
}

export default CityService;
