<script setup lang="ts">
import { toRef } from "vue";

import {
  ForecastEntity,
  ConditionIcon,
  useConditionLabel,
} from "@/entities/Forecast";

interface IProps {
  cityName: string;
  condition: ForecastEntity["condition"];
  temperature: ForecastEntity["temperature"];
  humidity: ForecastEntity["humidity"];
}

const props = defineProps<IProps>();

const { conditionLabel } = useConditionLabel(toRef(() => props.condition));
</script>

<template>
  <RouterLink
    class="popular-city-card"
    :to="{ name: $route.name, query: { city: cityName } }"
  >
    <h5 class="popular-city-card__name">{{ cityName }}</h5>
    <span
      class="popular-city-card__condition-label popular-city-card__condition-label_first-letter_capitalized"
      >{{ conditionLabel }}</span
    >
    <ConditionIcon :condition />
    <span class="popular-city-card__temperature">{{ temperature }}&deg;</span>
    <span class="popular-city-card__humidity">{{ humidity }}&percnt;</span>
  </RouterLink>
</template>

<style scoped>
.popular-city-card {
  --text-color: var(--color-white);
  --border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  padding: 2.5rem 2.6rem;
  background: radial-gradient(
    134.39% 134.39% at -17.89% -22.86%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(238, 237, 237, 0.1) 100%
  );
  border-radius: var(--border-radius);

  border-image-source: linear-gradient(
    144.45deg,
    rgba(255, 255, 255, 0.4) -14.51%,
    rgba(255, 255, 255, 0) 117.67%
  );
}
.popular-city-card__name {
  font: var(--font-p2-medium);
  color: var(--text-color);
  margin: 0 0 -0.8rem 0;
}

.popular-city-card__condition-label,
.popular-city-card__humidity {
  font: var(--font-span-medium);
  color: var(--text-color);
}

.popular-city-card__condition-label_first-letter_capitalized::first-letter {
  text-transform: capitalize;
}

.popular-city-card__temperature {
  font: var(--font-h3-semi-bold);
  color: var(--color-white);
}
</style>
