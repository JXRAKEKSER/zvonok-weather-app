import { useRoute } from 'vue-router';
import { watchEffect } from 'vue';

import { useCityStore } from '@/entities/City';
function useQueryObserver() {
  const route = useRoute();
  const cityStore = useCityStore();

  watchEffect(() => {
    if (!route.query.city) {
      return;
    }
    const targetCity = cityStore.cities?.find(city => city.name === route.query.city);

    if (targetCity) {
      cityStore.setters.setCurrentCity(targetCity);
    }
  });
}

export { useQueryObserver };
