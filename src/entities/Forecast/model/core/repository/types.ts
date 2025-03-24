import ForecastEntity from '../entity/forecast.entity';

interface IForecastRepository {
  getDailyForecast(city: City): Promise<ForecastEntity[]>;
  getShortDailyForecast(city: City): Promise<ForecastEntity>;
  getWeeklyForecast(city: City): Promise<ForecastEntity[]>;
}

export type { IForecastRepository };
