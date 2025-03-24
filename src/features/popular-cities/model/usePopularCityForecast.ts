import { ref, watchEffect, onMounted, type Ref } from 'vue';

import { useCityStore } from '@/entities/City';
import { ForecastRepository, ForecastService } from '@/entities/Forecast';
import { useToaster } from '@/shared/ui';
import type { PopularCityForecast } from './types';

// Тип назван так чтобы избежать возможной путаницы
type PopularCityEntity = Exclude<ReturnType<typeof useCityStore>['currentCity'], null>

const forecastService = new ForecastService(new ForecastRepository());
function usePopularCityForecast() {
  const cityStore = useCityStore();
  const forecasts: Ref<Nullable<PopularCityForecast[]>> = ref(null);

  const isLoading = ref(false);
  const loadingError = ref<Error | null>(null);

  const { show, TOAST_TYPES } = useToaster();

  async function _fetchForecast(city: PopularCityEntity) {
    try {
      isLoading.value = true;
      const forcastWithoutName = await forecastService.getShortDailyForecast(city.coordinates);
      if (!forecasts.value) {
        return forecasts.value = [{ ...forcastWithoutName, cityName: city.name, dayPart: '' }];
      }
      forecasts.value.push({ ...forcastWithoutName, cityName: city.name, dayPart: '' });
    } catch (error) {
      show({
        message: 'Ошибка загрузки данных',
        type: TOAST_TYPES.ERROR,
      });
      if (error instanceof Error) {
        loadingError.value = error;
      }
      console.error('error');
    } finally {
      isLoading.value = false;
    }
  }

  watchEffect(() => {
    if (!cityStore.popularCities) {
      return;
    }
    cityStore.popularCities.forEach(_fetchForecast);
  });

  onMounted(async () => {
    try {
      await cityStore.actions.getPopularCities()
    } catch (error) {
      show({
        message: 'Ошибка загрузки популярных городов',
        type: TOAST_TYPES.ERROR,
      });
    }
  });

  return {
    forecasts,
    isLoadingForecasts: isLoading,
    forecastsLoadingError: loadingError,
    actions: {
      getForecast: _fetchForecast,
    }
  };
}


export { usePopularCityForecast };
