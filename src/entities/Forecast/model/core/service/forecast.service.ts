import type { IForecastRepository } from '../repository/types';
import ForecastEntity from '../entity/forecast.entity';

class ForecastService {
  /**
   * Периодичность прогноза
   */
  private readonly HOUR_STEP = 3;

  constructor(private readonly forecastRepository: IForecastRepository) { }

  public async getDailyForecast(city: City): Promise<ForecastEntity[]> {
    const everyHourForecasts = await this.forecastRepository.getDailyForecast(city);

    // выбираем прогнозы с нужной периодичностью
    return everyHourForecasts.reduce((forecastsByStep, currentForecast) => {
      if (!currentForecast.hour) {
        return forecastsByStep;
      }

      if (currentForecast.hour % this.HOUR_STEP !== 0) {
        return forecastsByStep;
      }

      return [...forecastsByStep, currentForecast];
    }, [] as ForecastEntity[]);
  }

  public async getShortDailyForecast(city: City) {
    return await this.forecastRepository.getShortDailyForecast(city);
  }

  public async getWeeklyForecast(city: City): Promise<ForecastEntity[]> {
    return await this.forecastRepository.getWeeklyForecast(city);
  }
}

export default ForecastService;
