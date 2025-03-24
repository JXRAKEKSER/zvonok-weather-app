<script setup lang="ts">
import { FetchingHelper, InfoCaption } from "@/shared/ui";
import { ForecastList, useForecastList } from "@/features/forecast-list";
import { SceletonForecastItem } from "@/entities/Forecast";

import ForecastSummary from "./ForecastSummary.vue";
import SceletonForecastSummary from "./SceletonForecastSummary.vue";

const {
  forecasts,
  isLoadingForecasts,
  forecastsLoadingError,
  summaryForecast,
} = useForecastList();
</script>

<template>
  <section class="page-main">
    <section class="forecast">
      <SceletonForecastSummary v-if="isLoadingForecasts" />
      <ForecastSummary
        v-else
        :condition="summaryForecast.condition"
        :humidity="summaryForecast.humidity"
        :temperature="summaryForecast.temperature"
        :wind-speed="summaryForecast.windSpeed"
      />
      <FetchingHelper
        :error="forecastsLoadingError"
        :data="forecasts"
        :is-loading="isLoadingForecasts"
      >
        <template #data="{ data }">
          <ForecastList :forecasts="data" />
        </template>
        <template #isLoading>
          <ul style="display: grid; gap: 0.5rem">
            <SceletonForecastItem v-for="_ in 8" />
          </ul>
        </template>
      </FetchingHelper>
    </section>
  </section>
</template>

<style scoped>
.page-main {
  container: page-main / inline-size;
}

.forecast {
  display: grid;
  gap: 0 8.7rem;
  grid-template-columns: max-content 1fr;
}

@container (max-width: 130rem) {
  .forecast {
    grid-template-columns: 1fr;
    gap: 0 6rem;
  }
}

@container (max-width: 120rem) {
  .forecast {
    grid-template-columns: 1fr;
    gap: 3.5rem 0;
  }
}
</style>
