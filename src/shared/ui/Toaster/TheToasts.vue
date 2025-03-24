<script setup lang="ts">
import { ref } from "vue";
import { default as BaseToast, type BaseToastProps } from "./BaseToast.vue";

interface ToastConfig extends BaseToastProps {
  id: number;
}

const toastConfigs = ref<ToastConfig[]>([]);

function generateId() {
  return Math.random();
}

function show(newToastData: BaseToastProps) {
  toastConfigs.value.push({ ...newToastData, id: generateId() });
}
function closeById(id: number) {
  toastConfigs.value = toastConfigs.value.filter((config) => config.id !== id);
}

defineExpose({
  show,
});
</script>

<template>
  <ul class="the-toasts">
    <TransitionGroup name="list">
      <li
        v-for="toast in toastConfigs"
        :key="toast.id"
        class="the-toasts__item"
      >
        <BaseToast
          :message="toast.message"
          :duration="toast.duration"
          :type="toast.type"
          :is-self-closable="toast.isSelfClosable"
          @close="closeById(toast.id)"
        />
      </li>
    </TransitionGroup>
  </ul>
</template>

<style scoped>
.the-toasts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
