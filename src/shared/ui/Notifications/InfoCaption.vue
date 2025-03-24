<script setup lang="ts">
interface IProps {
  message: string;
}

defineProps<IProps>();
</script>

<template>
  <div class="info-caption">
    <span class="info-caption__text">{{ message }}</span>
    <slot name="icon"></slot>
  </div>
</template>

<style scoped>
.info-caption {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-caption__text {
  font: var(--font-h3-semi-bold);
  color: var(--color-white);
}
</style>
