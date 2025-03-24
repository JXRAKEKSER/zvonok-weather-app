import type { ICityRepository } from './types';

import { fetchCities, fetchPopularCities, type CityDto } from '../../../api/city.api';
import CityEntity from '../entity/city.entity';

interface IMapper<D, E> {
  dtoToEntity(dto: D): E;
}

class HttpMapper implements IMapper<CityDto, CityEntity> {
  dtoToEntity(dto: CityDto): CityEntity {
    return new CityEntity(dto.name, [dto.longitude, dto.latitude]);
  }
}

class CityRepository implements ICityRepository {

  private readonly httpMapper: IMapper<CityDto, CityEntity> = new HttpMapper();

  async getCities(): Promise<CityEntity[]> {
    const cityDtos = await fetchCities();

    return cityDtos.map(dto => this.httpMapper.dtoToEntity(dto));
  }

  async getPopularCities(): Promise<CityEntity[]> {
    const cityDtos = await fetchPopularCities();

    return cityDtos.map(dto => this.httpMapper.dtoToEntity(dto));
  }
}

export default CityRepository;
