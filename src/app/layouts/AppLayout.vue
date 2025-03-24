<script setup lang="ts">
import {
  TheHeader,
  NavigationBar,
  NavigationItem,
  type NavigationItemConfig,
} from "@/shared/ui";
import { ROUTE_NAMES } from "@/shared/constants";
import { IconHome, IconCalendar } from "@/shared/icons";

import { CityDropdown } from "@/features/pick-city";

const navigationData: NavigationItemConfig[] = [
  {
    text: "Главная",
    path: { name: ROUTE_NAMES.WEATHER.ROOT },
  },
  {
    text: "Погода за неделю",
    path: { name: ROUTE_NAMES.WEATHER.WEEKLY },
  },
];
</script>

<template>
  <div class="app-layout">
    <TheHeader>
      <NavigationBar>
        <NavigationItem :path="navigationData[0].path">
          <span class="navigation-item__text">
            {{ navigationData[0].text }}
          </span>
          <IconHome class="navigation-item__icon" />
        </NavigationItem>
        <NavigationItem :path="navigationData[1].path">
          <span class="navigation-item__text">
            {{ navigationData[1].text }}
          </span>
          <IconCalendar class="navigation-item__icon" />
        </NavigationItem>
      </NavigationBar>
      <CityDropdown class="the-header__city-dropdown" />
    </TheHeader>
    <RouterView />
  </div>
</template>

<style scoped>
.app-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  gap: 6rem 0;
  height: 100%;
  padding: 0 4rem 6.6rem;

  container: app-layout / inline-size;
}

.the-header__city-dropdown {
  margin: 0 0 0 auto;
}

@media screen and (max-width: 600px) {
  .app-layout {
    padding: 0 3rem 5.6rem;
    gap: 4rem 0;
  }
}

@media screen and (max-width: 500px) {
  .app-layout {
    padding: 0 2.5rem 4.6rem;
  }
}

@media screen and (max-width: 450px) {
  .app-layout {
    gap: 3rem 0;
    padding: 0 2rem 3.6rem;
  }
}

@media screen and (min-width: 1500px) {
  .app-layout {
    max-width: 150rem;
    margin: 0 auto;
  }
}

.navigation-item__icon {
  display: none;
  width: 2.6rem;
  height: 2.6rem;
}
@container (max-width: 80rem) {
  .navigation-item__text {
    display: none;
  }
  .navigation-item__icon {
    display: block;
  }
}
</style>
