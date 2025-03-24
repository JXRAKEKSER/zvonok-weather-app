import { ForecastEntity } from '@/entities/Forecast';

interface PopularCityForecast extends ForecastEntity {
  cityName: string;
}

export type { PopularCityForecast };