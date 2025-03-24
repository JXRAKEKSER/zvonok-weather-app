<script lang="ts">
interface IProps {
  text?: string;
  path: RouteLocationRaw;
}

export type { IProps as NavigationItemConfig };
</script>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps<IProps>();
</script>

<template>
  <RouterLink
    class="navigation-item"
    :to="path"
    :active-class="'navigation-item_active'"
    exact
  >
    <slot>{{ text }}</slot>
  </RouterLink>
</template>

<style scoped>
.navigation-item {
  --paddings: 1rem 1.6rem;
  --border: 0.1rem solid rgba(233, 233, 243, 0.2);

  padding: var(--paddings);
  font: var(--font-p4-medium);
  letter-spacing: -1%;
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(233, 233, 243, 0.1);
  border-right: var(--border);
}
.navigation-item:first-child {
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
}
.navigation-item:last-child {
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  border: none;
}

.navigation-item_active {
  color: rgba(255, 255, 255, 1);
}
</style>
