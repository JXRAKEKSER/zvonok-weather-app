<script setup lang="ts">
import {
  WeekDayForecast,
  SceletonDayCard,
  useWeeklyForecast,
} from "@/features/weekly-forecast";

import { useTitle } from "../model/useTitle";

const { forcasts, isWeeklyForcastLoading } = useWeeklyForecast();

useTitle();
</script>

<template>
  <section class="page-weekly-forecast">
    <ul class="page-weekly-forecast__list">
      <SceletonDayCard
        v-if="isWeeklyForcastLoading"
        class="page-weekly-forecast__weekday-forecast"
        v-for="_ in 6"
      />
      <WeekDayForecast
        v-else
        class="page-weekly-forecast__weekday-forecast"
        v-for="(forcast, index) in forcasts"
        :key="index"
        :condition="forcast.condition"
        :date="forcast.dateTime"
        :temperature="forcast.temperature"
      />
    </ul>
  </section>
</template>

<style scoped>
.page-weekly-forecast {
  container: layout / inline-size;
}
.page-weekly-forecast__list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.page-weekly-forecast__weekday-forecast {
  min-width: 12.2rem;
}

@container (max-width: 65rem) {
  .page-weekly-forecast__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }
}
@container (max-width: 40rem) {
  .page-weekly-forecast__list {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    gap: 1.5rem 1rem;
  }
}
</style>
