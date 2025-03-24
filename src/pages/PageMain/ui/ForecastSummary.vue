<script setup lang="ts">
import { toRef } from "vue";
import {
  ConditionIcon,
  ForecastEntity,
  useConditionLabel,
} from "@/entities/Forecast";

interface IProps {
  temperature: ForecastEntity["temperature"];
  condition: ForecastEntity["condition"];
  humidity: ForecastEntity["humidity"];
  windSpeed: ForecastEntity["windSpeed"];
}

const props = defineProps<IProps>();

const { conditionLabel } = useConditionLabel(toRef(() => props.condition));
</script>

<template>
  <section class="forecast-summary">
    <h4 class="forecast-summary__tempreture">{{ temperature }} &deg;</h4>
    <ConditionIcon
      class="forecast-summary__condition-icon"
      :condition="condition"
    />
    <ul class="forecast-summary-info forecast-summary__forecast-summary-info">
      <li
        class="forecast-summary-info__item forecast-summary-info__item_capitelized_first-letter"
      >
        {{ conditionLabel }}
      </li>
      <li class="forecast-summary-info__item">
        Влажность: {{ humidity }}&percnt;
      </li>
      <li class="forecast-summary-info__item">Ветер: {{ windSpeed }} м/c</li>
    </ul>
  </section>
</template>

<style scoped>
@import url('./forecast-summary.css');

</style>
