import { ref, watchEffect, type Ref } from "vue";

import {
  ForecastEntity,
  ForecastRepository,
  ForecastService,
} from "@/entities/Forecast";
import { useCityStore } from "@/entities/City";

const forecastService = new ForecastService(new ForecastRepository());
const cityStore = useCityStore();

function useWeeklyForecast() {
  const forcasts: Ref<Nullable<ForecastEntity[]>> = ref(null);

  const isLoading = ref(false);
  const loadingError = ref<Nullable<Error>>(null);

  async function _fetchWeeklyForecast() {
    if (!cityStore.currentCity) {
      return;
    }

    isLoading.value = true;

    try {
      forcasts.value = await forecastService.getWeeklyForecast(
        cityStore.currentCity.coordinates
      );
    } catch (error) {
      if (error instanceof Error) {
        loadingError.value = error;
      }
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  watchEffect(_fetchWeeklyForecast);

  return {
    forcasts,
    isWeeklyForcastLoading: isLoading,
    weeklyForecastLoadingError: loadingError,
  };
}

export { useWeeklyForecast };
