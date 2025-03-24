<script setup lang="ts" generic="T">
import InfoCaption from "../Notifications/InfoCaption.vue";

interface IProps {
  isLoading: boolean;
  error: Nullable<Error>;
  data: Nullable<T>;
}

defineProps<IProps>();
</script>

<template>
  <slot v-if="isLoading" name="isLoading"></slot>
  <slot v-else-if="error && !isLoading" name="hasError"></slot>
  <slot v-else-if="data !== null" name="data" :data="data"></slot>
  <slot v-else>
    <InfoCaption message="Неизвестная ошибка при загрузке данных" />
  </slot>
</template>
