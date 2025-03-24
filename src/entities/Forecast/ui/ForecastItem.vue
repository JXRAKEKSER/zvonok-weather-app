<script setup lang="ts">
import { toRef } from "vue";

import ForecastEntity from "../model/core/entity/forecast.entity";
import ConditionIcon from "./ConditionIcon.vue";
import { useConditionLabel } from "../libs/useConditionLabel";
import { castHourToTime } from "../libs/castHourToTime";

interface IProps {
  hourOfMeasurement: ForecastEntity["hour"];
  dayPart: ForecastEntity["dayPart"];
  temperature: ForecastEntity["temperature"];
  condition: ForecastEntity["condition"];
  windSpeed: ForecastEntity["windSpeed"];
  humidity: ForecastEntity["humidity"];
}

const props = defineProps<IProps>();

const { conditionLabel } = useConditionLabel(toRef(() => props.condition));
</script>

<template>
  <li class="forecast-item">
    <time class="forecast-item__actual-time">{{
      hourOfMeasurement ? castHourToTime(hourOfMeasurement) : "-"
    }}</time>
    <span class="forecast-item__day-period">{{ dayPart }}</span>
    <span class="forecast-item__temperature">{{ temperature }}&deg;</span>
    <div class="forecast-item__condition">
      <ConditionIcon class="forecast-item__condition-icon" :condition="condition" />
      <span
        class="forecast-item__condition-label forecast-item__condition-label_capitelized_first-letter"
        >{{ conditionLabel }}</span
      >
    </div>
    <span class="forecast-item__wind-speed">{{ windSpeed }} м/с</span>
    <span class="forecast-item__humidity">{{ humidity }} &percnt;</span>
  </li>
</template>

<style scoped>
@import url('./forecast-item.css');
</style>
