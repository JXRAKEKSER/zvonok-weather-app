import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

const setTitle = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  document.title = (to?.meta?.title as string) ?? "Страница";
  next();
};

export { setTitle };