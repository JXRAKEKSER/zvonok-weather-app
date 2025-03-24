<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";

import { TheToasts, registrateToaster } from "@/shared/ui";

type ToastRef = Nullable<InstanceType<typeof TheToasts>>;

const theToastsRef = ref<ToastRef>(null);

function isToastsRef(
  toastRefOrNull: Ref<Nullable<InstanceType<typeof TheToasts>>>
): toastRefOrNull is Ref<InstanceType<typeof TheToasts>> {
  if (typeof toastRefOrNull.value === "object" && toastRefOrNull.value) {
    return true;
  }

  return false;
}

onMounted(() => {
  if (isToastsRef(theToastsRef)) {
    registrateToaster(theToastsRef);
  }
});
</script>

<template>
  <RouterView />
  <Teleport to="body">
    <TheToasts ref="theToastsRef" />
  </Teleport>
</template>

<style>
@import url("../styles/main.css");
</style>
