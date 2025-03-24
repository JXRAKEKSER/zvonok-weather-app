import { computed, type Ref } from 'vue';

import ForecastEntity from '../model/core/entity/forecast.entity';

function useConditionLabel(condition: Ref<ForecastEntity['condition']>) {
  const conditionLabel = computed(() => {
    return ForecastEntity.CONDTION_TO_LABELS[condition.value] ?? "Неизвестно";
  });

  return {
    conditionLabel,
  }
}

export { useConditionLabel };
