import type { Directive } from 'vue';

const listeners = new Map();

export default {
  mounted(targetElement, bind) {
    const clickOutside = (event: Event) => {
      if (!targetElement.contains(event.target as Node)) {
        bind.value(event);
      }
    };
    listeners.set(targetElement, clickOutside);
    document.addEventListener("click", clickOutside, true);
  },
  beforeUnmount(targetElement) {
    document.removeEventListener(
      "click",
      listeners.get(targetElement),
      true
    );
  },
} as Directive<HTMLElement, Function>;
