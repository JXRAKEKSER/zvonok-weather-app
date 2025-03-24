<script setup lang="ts">
import { usePopularCityForecast } from "../model/usePopularCityForecast";
import { useQueryObserver } from "../model/useQueryObserver";
import PopularCityCard from "./PopularCityCard.vue";
import SceletonCityCard from "./SceletonCityCard.vue";

const { forecasts, isLoadingForecasts, forecastsLoadingError } =
  usePopularCityForecast();
useQueryObserver();
</script>

<template>
  <section class="popular-cities">
    <h4 class="popular-cities__title">Погода в популярных городах</h4>
    <ul class="popular-cities__list">
      <SceletonCityCard
        class="popular-cities__popular-city-card"
        v-if="isLoadingForecasts"
        v-for="_ in 3"
      />
      <PopularCityCard
        v-else
        class="popular-cities__popular-city-card"
        v-for="forecast in forecasts"
        :key="forecast.city.toString()"
        :city-name="forecast.cityName"
        :temperature="forecast.temperature"
        :condition="forecast.condition"
        :wind-speed="forecast.windSpeed"
        :humidity="forecast.humidity"
      />
    </ul>
  </section>
</template>

<style scoped>
.popular-cities {
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content 1fr;
  gap: 3.2rem 0;

  container: popular-cities / inline-size;
}

.popular-cities__title {
  font: var(--font-h4-semi-bold);
  color: var(--color-white);
  grid-column: 1/2;
  word-break: break-all;
}

.popular-cities__list {
  display: flex;
  gap: 3.7rem;
  overflow-x: auto;
  /* grid-template-columns: repeat(auto-fill, 24.4rem);
  gap: 3.7rem; */
  grid-row: 2;
  grid-column: 1/-1;
}

.popular-cities__list::-webkit-scrollbar {
  height: 0.5rem;
}
.popular-cities__list::-webkit-scrollbar-thumb {
  background-color: #1a669c;
  border-radius: 0.8rem;
}
.popular-cities__list::-webkit-scrollbar-track {
  background-color: var(--color-white--opacity-01);
  border-radius: 0.8rem;
}

.popular-cities__popular-city-card {
  width: 24.4rem;
  min-width: 24.4rem;
}

@container (max-width: 380px) {
  .popular-cities__title {
    font-size: 3.2rem;
    line-height: 1.1;
  }
}
</style>
