<script setup lang="ts">
import { formatDate } from "@/shared/libs";
import { ConditionIcon, ForecastEntity } from "@/entities/Forecast";

const LOCALE = "ru-Ru";

interface IProps {
  date: ForecastEntity["dateTime"];
  temperature: ForecastEntity["temperature"];
  condition: ForecastEntity["condition"];
}

defineProps<IProps>();
</script>
<template>
  <article class="week-day-card">
    <span class="week-day-card__day-label week-day-card__day-label_first-letter_capitalized">{{
      formatDate(date, { locale: LOCALE, options: { weekday: "long" } })
    }}</span>
    <div class="week-day-card__condition-icon">
      <ConditionIcon
        class=""
        :condition="condition"
      />
    </div>
    <span class="week-day-card__temperature">{{ temperature }}&deg;</span>
  </article>
</template>

<style scoped>
.week-day-card {
  --text-color: var(--color-white);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.week-day-card__day-label {
  font: var(--font-span-normal);
  color: var(--text-color);
}

.week-day-card__day-label_first-letter_capitalized::first-letter {
  
  text-transform: uppercase;
}

.week-day-card__condition-icon {
  display: flex;
  justify-content: center;
  width: 6rem;
  height: 4.2rem;
}

.week-day-card__temperature {
  font: var(--font-span-medium);
  color: var(--text-color);
}
</style>