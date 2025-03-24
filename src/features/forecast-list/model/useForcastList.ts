import { ref, watchEffect, computed, type Ref } from "vue";

import {
  ForecastEntity,
  ForecastRepository,
  ForecastService,
} from "@/entities/Forecast";
import { useCityStore } from '@/entities/City';

const forecastService = new ForecastService(new ForecastRepository());

type SummaryForecast = Pick<ForecastEntity, 'temperature' | 'humidity' | 'windSpeed' | 'condition'>;

function useForecastList() {
  const forecasts: Ref<ForecastEntity[] | null> = ref(null);
  const cityStore = useCityStore();

  const isLoading = ref(false);
  const loadingError = ref<Error | null>(null);

  async function _fetchForecastsByCity() {
    if (!cityStore.currentCity) {
      return;
    }

    try {
      isLoading.value = true;
      forecasts.value = await forecastService.getDailyForecast(cityStore.currentCity.coordinates);
    } catch (error) {
      if (error instanceof Error) {
        loadingError.value = error;
      }
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  const summaryForecast = computed<SummaryForecast>(() => {

    const firstForecast = forecasts.value?.[0]

    if (!firstForecast) {
      return {
        temperature: 0,
        humidity: 0,
        windSpeed: 0,
        condition: ForecastEntity.CONDITION.UNKNOWN,
      }
    }

    return {
      temperature: firstForecast.temperature,
      humidity: firstForecast.humidity,
      windSpeed: firstForecast.windSpeed,
      condition: firstForecast.condition,
    }
  });

  watchEffect(_fetchForecastsByCity);

  return {
    forecasts,
    isLoadingForecasts: isLoading,
    forecastsLoadingError: loadingError,
    summaryForecast,
  };
}

export { useForecastList };
