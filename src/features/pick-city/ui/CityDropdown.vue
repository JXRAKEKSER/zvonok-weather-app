<script setup lang="ts">
import { computed, onMounted } from "vue";

import { BaseDropdown } from "@/shared/ui";
import { useCityStore } from "@/entities/City";

const cityStore = useCityStore();

const options = computed(() => {
  if (!cityStore.cities) {
    return [];
  }

  return cityStore.cities.map((city, index) => ({
    id: index,
    label: city.name,
    value: city.coordinates.toString(),
  }));
});

const normalizedCity = computed({
  get() {
    return cityStore.currentCity?.coordinates.toString() ?? "";
  },
  set(newValue) {
    if (!cityStore.cities) {
      return;
    }
    const targetCity = cityStore.cities.find(
      (city) => newValue === city.coordinates.toString()
    );

    if (!targetCity) {
      return;
    }

    cityStore.setters.setCurrentCity(targetCity);
  },
});

onMounted(() => {
  cityStore.actions.getCities();
});
</script>

<template>
  <BaseDropdown v-model="normalizedCity" :options="options" />
</template>
