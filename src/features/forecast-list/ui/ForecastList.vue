<script setup lang="ts">
import { ForecastEntity, ForecastItem } from "@/entities/Forecast";

interface IProps {
  forecasts: ForecastEntity[];
}

defineProps<IProps>();
</script>

<template>
  <ul class="forecast-list">
    <ForecastItem
      v-for="(
        { temperature, humidity, windSpeed, condition, hour, dayPart }, index
      ) in forecasts"
      :id="index"
      :condition="condition"
      :temperature="temperature"
      :humidity="humidity"
      :wind-speed="windSpeed"
      :hour-of-measurement="hour"
      :day-part="dayPart"
    />
  </ul>
</template>

<style scoped>
.forecast-list {
  display: grid;
}
</style>
