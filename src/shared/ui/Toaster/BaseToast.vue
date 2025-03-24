<script lang="ts">
import { type ToastType, TOAST_TYPES } from "./types";

interface IProps {
  message: string;
  duration?: number;
  type: ToastType;
  isSelfClosable?: boolean;
}

interface IEmits {
  (e: "close"): void;
}

type ModifiersMap = Record<ToastType, string>;

const MODIFIERS: ModifiersMap = {
  [TOAST_TYPES.INFO]: "base-toast_type_info",
  [TOAST_TYPES.WARNING]: "base-toast_type_warning",
  [TOAST_TYPES.ERROR]: "base-toast_type_error",
} as const;

export { TOAST_TYPES };
export type { IProps as BaseToastProps };
</script>

<script setup lang="ts">
import { ref, computed } from "vue";
import CrossIcon from "../../icons/CrossIcon/CrossIcon.vue";

const props = withDefaults(defineProps<IProps>(), {
  duration: 3000,
  isSelfClosable: true,
});
const emits = defineEmits<IEmits>();

const isOpened = ref(false);

const toastModifierClass = computed(() => {
  return MODIFIERS[props.type] ?? MODIFIERS.ERROR;
});

function close() {
  isOpened.value = false;
  emits("close");
}

function setConfig() {
  isOpened.value = true;

  if (!props.isSelfClosable) {
    console.log("aa");
    return;
  }
  setTimeout(() => close(), props.duration);
}

setConfig();
</script>

<template>
  <div v-if="isOpened" class="base-toast" :class="[toastModifierClass]">
    <slot name="icon"></slot>
    <p class="base-toast__message">{{ message }}</p>
    <button
      v-if="!isSelfClosable"
      class="base-toast__close-button"
      @click="close"
    >
      <CrossIcon />
    </button>
  </div>
</template>

<style scoped>
.base-toast {
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 38rem;
  min-height: 6rem;
}

.base-toast_type_info {
  background-color: rgba(6, 225, 221, 0.8);
}
.base-toast_type_warning {
  background-color: orange;
}
.base-toast_type_error {
  background-color: red;
}

.base-toast__message {
  font: var(--font-p3-medium);
  color: var(--color-white);
  user-select: none;
}

.base-toast__close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
}
</style>
