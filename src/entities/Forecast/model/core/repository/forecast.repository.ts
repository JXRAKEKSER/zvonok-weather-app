import {
  fetchForecast,
  type ForecastDto,
  CONDITIONS_DTO,
} from "../../../api/forecast.api";

import ForecastEntity from "../entity/forecast.entity";
import type { IForecastRepository } from "./types";

interface IMapper<D, E> {
  dtoToEntity(dto: D, date: string, city: City): E;
}

class HttpMapper implements IMapper<ForecastDto, ForecastEntity> {
  private _mapConditionsDto(
    conditionDto: ForecastDto["condition"]
  ): ForecastEntity["condition"] {
    let supposeConditionValue;
    for (const key of Object.keys(CONDITIONS_DTO) as KeysUnion<
      typeof CONDITIONS_DTO
    >[]) {
      if (CONDITIONS_DTO[key] === conditionDto) {
        supposeConditionValue = ForecastEntity.CONDITION[key];
        break;
      }
    }

    return supposeConditionValue || ForecastEntity.CONDITION.UNKNOWN;
  }
  public dtoToEntity(
    dto: ForecastDto,
    date: string,
    city: City
  ): ForecastEntity {
    const { temp, humidity, wind_speed, condition: conditionDto, hour } = dto;
    const condition = this._mapConditionsDto(conditionDto);
    return new ForecastEntity({
      temperature: temp,
      humidity,
      hour,
      windSpeed: wind_speed,
      condition,
      dateTime: new Date(date),
      dayPart: "",
      city: city,
    });
  }
}

class ForecastRepository implements IForecastRepository {
  private readonly _mapper: IMapper<ForecastDto, ForecastEntity> =
    new HttpMapper();
  public async getDailyForecast(city: City): Promise<ForecastEntity[]> {
    const [currentDayForcastDto] = await fetchForecast(city);

    return currentDayForcastDto.hours.map((hourForecast) =>
      this._mapper.dtoToEntity(hourForecast, currentDayForcastDto.date, city)
    );
  }

  public async getShortDailyForecast(city: City): Promise<ForecastEntity> {
    const [currentDayForcastDto] = await fetchForecast(city);

    return this._mapper.dtoToEntity(
      currentDayForcastDto.parts.day_short,
      currentDayForcastDto.date,
      city
    );
  }
  public async getWeeklyForecast(city: City): Promise<ForecastEntity[]> {
    const forecastsDtos = await fetchForecast(city);
    return forecastsDtos.splice(1, 8).map((forecast) =>
      this._mapper.dtoToEntity(forecast.parts.day_short, forecast.date, city)
    );
  }
}

export default ForecastRepository;
