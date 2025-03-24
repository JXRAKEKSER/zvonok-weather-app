import { httpInstance } from "@/shared/api";

/**
 * condition
 * temperature
 * humidity
 * wind speed
 */

const CONDITIONS_DTO = {
  CLEAR: "clear",
  PARTLY_CLOUDY: "partly-cloudy",
  CLOUDY: "cloudy",
  OVERCAST: "overcast",
  LIGHT_RAIN: "light-rain",
  RAIN: "rain",
  HEAVY_RAIN: "heavy-rain",
  SHOWERS: "showers",
  WET_SNOW: "wet-snow",
  LIGHT_SNOW: "light-snow",
  SNOW: "snow",
  SNOW_SHOWERS: "snow-showers",
  HAIL: "hail",
  THUNDERSTORM: "thunderstorm",
  THUNDERSTORM_WITH_RAIN: "thunderstorm-with-rain",
  THUNDERSTORM_WITH_HAIL: "thunderstorm-with-hail",
} as const;

type ConditionsDto = ValuesUnion<typeof CONDITIONS_DTO>;

interface ForecastDto {
  hour: number;
  condition: ConditionsDto;
  temp: Temperature;
  humidity: Humidity;
  wind_speed: WindSpeed;
}

interface ForecastsDto {
  date: string;
  hours: ForecastDto[];
  parts: {
    day_short: ForecastDto,
  }
}

async function fetchForecast(coordinates: City): Promise<ForecastsDto[]> {
  try {
    const { data } = await httpInstance.get<{ forecasts: ForecastsDto[] }>(
      `/v2/forecast/?lon=${coordinates[0]}&lat=${coordinates[1]}`
    );
    
    return data.forecasts;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { fetchForecast, CONDITIONS_DTO };
export type { ForecastDto };
