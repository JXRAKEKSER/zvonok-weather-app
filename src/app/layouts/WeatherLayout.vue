<script setup lang="ts">
import { formatDate } from "@/shared/libs";
import { useCityStore } from "@/entities/City";
import { PopularCities } from "@/features/popular-cities";

const cityStore = useCityStore();
</script>

<template>
  <div class="weather-layout">
    <h1 class="weather-layout__title">
      Погода в городе
      {{ cityStore.currentCity?.name ?? "" }}
    </h1>
    <h3 class="weather-layout__date">суббота, 22 марта</h3>
    <RouterView />
    <PopularCities class="weather-layout__popular-cities" />
  </div>
</template>

<style scoped>
.weather-layout {
}
.weather-layout__title {
  font: var(--font-h4-semi-bold);
  color: var(--color-white);
  margin: 0 0 1.2rem 0;
}
.weather-layout__date {
  font: var(--font-p1-medium);
  color: var(--color-white--opacity-06);
  margin: 0 0 4.8rem 0;
}
.weather-layout__popular-cities {
  margin: 5.6rem 0 0 0;
}

@container (max-width: 380px) {
  .weather-layout__title {
    font-size: 3.2rem;
    line-height: 1.1;
  }
  .weather-layout__date {
    margin: 0 0 3.8rem 0;
  }
}
</style>
