<script lang="ts">
export type optionItem<T> = {
  id: number;
  label: string;
  value: T | null;
};
</script>

<script setup lang="ts" generic="T">
import { computed, ref } from "vue";

import { ArrowIcon } from "@/shared/icons";

type valueType = optionItem<T>["value"];

interface IProps {
  modelValue: T;
  options: optionItem<T>[];
  title?: string;
  defaultLabel?: string;
}
interface IEmits {
  (e: "update:modelValue", value: valueType): void;
}

const props = withDefaults(defineProps<IProps>(), {
  title: "",
  defaultLabel: "Выбрать",
});

const emits = defineEmits<IEmits>();

const isOpened = ref(false);
const titleRef = ref<HTMLElement | null>(null);

const currentLabel = computed(() => {
  const choosenOption = props.options.find(
    ({ value }) => value === props.modelValue
  );
  if (!choosenOption) {
    return props.defaultLabel;
  }
  return choosenOption.label;
});

const handleChangeVisibility = () => {
  isOpened.value = !isOpened.value;
};

const handleChoose = (value: valueType) => {
  emits("update:modelValue", value);
  handleChangeVisibility();
};

const handleClickOutside = () => {
  isOpened.value = false;
};
</script>

<template>
  <div class="base-dropdown" v-click-outside="handleClickOutside">
    <h4 ref="titleRef" v-if="title" class="base-dropdown__title">
      {{ title }}
    </h4>
    <div @click="handleChangeVisibility" class="dropdown-head">
      <span class="dropdown-head__label">{{ currentLabel }}</span>
      <slot name="icon">
        <ArrowIcon
          class="dropdown-head__icon"
          :class="{ 'dropdown-head__icon_rotated': isOpened }"
        />
      </slot>
    </div>
    <ul v-show="isOpened" class="base-dropdown__options">
      <li class="base-dropdown__option" @click="handleChoose(null)">
        {{ defaultLabel }}
      </li>
      <li
        class="base-dropdown__option"
        :class="{ 'base-dropdown__option_selected': modelValue === value }"
        v-for="{ id, value, label } in options"
        :key="id"
        @click="handleChoose(value)"
      >
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.base-dropdown {
  --bg-color: rgba(233, 233, 243, 0.1);
  --border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24.6rem;
  position: relative;
  user-select: none;
}
.base-dropdown__title {
  font: var(--font-p4-medium);
  letter-spacing: -1%;
  margin: 0 0 1rem 0;
  color: rgba(255, 255, 255, 0.5);
}

.base-dropdown__options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #1a669c;
  width: 100%;
  max-height: 30rem;
  border-radius: var(--border-radius);
  overflow-y: auto;
  overflow-x: hidden;

  position: absolute;
  top: calc(100% + 1.2rem);
  left: 0;
  z-index: 2;
}

.base-dropdown__options::-webkit-scrollbar {
  width: 0.5rem;
}
.base-dropdown__options::-webkit-scrollbar-thumb {
  background-color: #1a669c;
  border-radius: 0.8rem;
}
.base-dropdown__options::-webkit-scrollbar-track {
  background-color: var(--color-white--opacity-01);
  border-radius: 0.8rem;
}

.base-dropdown__option {
  font: var(--font-p4-medium);
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: var(--color-white);
}
.base-dropdown__option:hover,
.base-dropdown__option_selected {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.6rem;
  background-color: var(--bg-color);
  cursor: pointer;

  border-radius: var(--border-radius);
}
.dropdown-head__label {
  font: var(--font-p4-medium);
  color: var(--color-white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropdown-head__icon {
  min-width: 1.9rem;
  transition: all 0.2s ease-in-out;
}
.dropdown-head__icon_rotated {
  transform: rotate(180deg);
}

@media screen and (max-width: 450px) {
  .base-dropdown {
    max-width: 18rem;
  }
}
</style>
