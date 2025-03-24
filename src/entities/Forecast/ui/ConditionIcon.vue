<script setup lang="ts">
import { computed, type Component } from "vue";

import IconClearDay from "./icons/IconClearDay.vue";
import IconCloudyDay from "./icons/IconCloudyDay.vue";
import IconOvercast from "./icons/IconOvercast.vue";
import IconRain from "./icons/IconRain.vue";
import IconShowers from "./icons/IconShowers.vue";
import IconSnow from "./icons/IconSnow.vue";
import IconHail from "./icons/IconHail.vue";
import IconThunder from "./icons/IconThunder.vue";
import IconUnknown from "./icons/IconUnknown.vue";

import ForecastEntity from "../model/core/entity/forecast.entity";

interface IProps {
  condition: ForecastEntity["condition"];
}

const props = defineProps<IProps>();

const ComponentsMap: Record<ForecastEntity["condition"], Component> = {
  [ForecastEntity.CONDITION.CLEAR]: IconClearDay,
  [ForecastEntity.CONDITION.PARTLY_CLOUDY]: IconCloudyDay,
  [ForecastEntity.CONDITION.CLOUDY]: IconCloudyDay,
  [ForecastEntity.CONDITION.OVERCAST]: IconOvercast,
  [ForecastEntity.CONDITION.RAIN]: IconRain,
  [ForecastEntity.CONDITION.LIGHT_RAIN]: IconRain,
  [ForecastEntity.CONDITION.HEAVY_RAIN]: IconRain,
  [ForecastEntity.CONDITION.SHOWERS]: IconShowers,
  [ForecastEntity.CONDITION.SNOW]: IconSnow,
  [ForecastEntity.CONDITION.LIGHT_SNOW]: IconSnow,
  [ForecastEntity.CONDITION.WET_SNOW]: IconSnow,
  [ForecastEntity.CONDITION.SNOW_SHOWERS]: IconSnow,
  [ForecastEntity.CONDITION.HAIL]: IconHail,
  [ForecastEntity.CONDITION.THUNDERSTORM]: IconThunder,
  [ForecastEntity.CONDITION.THUNDERSTORM_WITH_HAIL]: IconThunder,
  [ForecastEntity.CONDITION.THUNDERSTORM_WITH_RAIN]: IconThunder,
  [ForecastEntity.CONDITION.UNKNOWN]: IconUnknown,
};

const iconComponent = computed(() => ComponentsMap[props.condition]);
</script>

<template>
  <component
    :is="iconComponent"
    :title="
      props.condition === ForecastEntity.CONDITION.UNKNOWN
        ? 'Неизвестный статус'
        : ''
    "
  />
</template>
