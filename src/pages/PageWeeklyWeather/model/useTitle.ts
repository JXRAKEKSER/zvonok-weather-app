import { watchEffect } from 'vue';

import { useCityStore } from '@/entities/City';


const cityStore = useCityStore();
function useTitle() {

  watchEffect(() => {
    if (!cityStore.currentCity) {
      return;
    }

    document.title = `Погода в ${cityStore.currentCity.name}`;
  });
}

export { useTitle };
