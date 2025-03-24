import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

import CityEntity from './core/entity/city.entity';
import CityRepository from './core/repository/city.repository';
import CityService from './core/service/city.service';

const cityService = new CityService(new CityRepository());

const useCityStore = defineStore('cities', () => {
  const cities: Ref<CityEntity[] | null> = ref(null);
  const currentCity: Ref<CityEntity | null> = ref(null);
  const popularCities: Ref<CityEntity[] | null> = ref(null);

  function setCurrentCity(city: CityEntity) {
    currentCity.value = city;
  }

  async function getCities() {
    cities.value = await cityService.getCities();
    currentCity.value = cities.value[0];
  }

  async function getPopularCities() {
    popularCities.value = await cityService.getPopularCities();
  }

  return {
    cities,
    popularCities,
    currentCity,
    actions: {
      getCities,
      getPopularCities,
    },
    setters: {
      setCurrentCity,
    }
  }
});

export { useCityStore };