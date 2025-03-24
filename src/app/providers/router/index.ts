import { createRouter, createWebHistory } from 'vue-router';

import { ROUTE_NAMES } from '@/shared/constants';
import { setTitle } from './middlewares/page-title.middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/app/layouts/AppLayout.vue'),
      redirect: '/weather',
      children: [
        {
          path: 'weather',
          name: 'weather-layout',
          redirect: '/weather/day',
          component: () => import('@/app/layouts/WeatherLayout.vue'),
          children: [
            {
              path: 'day',
              name: ROUTE_NAMES.WEATHER.ROOT,
              component: () => import('@/pages/PageMain'),
              meta: {
                title: 'Погода сегодня',
              }
            },
            {
              path: 'weekly',
              name: ROUTE_NAMES.WEATHER.WEEKLY,
              component: () => import('@/pages/PageWeeklyWeather'),
              meta: {
                title: 'Погода на неделю',
              }
            }
          ]
        },
        
      ]
    }
  ],
});

router.beforeEach(setTitle);

export default router;
