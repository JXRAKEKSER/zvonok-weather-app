import { inject, provide } from "vue";
import type { Ref, InjectionKey } from "vue";

import TheToasts from "./TheToasts.vue";
import { TOAST_TYPES } from "./types";

const SHOW_TOAST: InjectionKey<InstanceType<typeof TheToasts>["show"]> =
  Symbol("TOAST_KEY");

const registratedToasters = new Map<Symbol, boolean>();

function useToaster() {
  const show = inject(SHOW_TOAST, () => {});
  return { show, TOAST_TYPES };
}

function registrateToaster(theToastsRef: Ref<InstanceType<typeof TheToasts>>) {
  provide(SHOW_TOAST, theToastsRef.value.show);
  registratedToasters.set(SHOW_TOAST, true);
}

export { useToaster, registrateToaster };
