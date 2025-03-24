import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './ui/App.vue'
import router from './providers/router'
import { clickOutside } from '@/shared/libs';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('click-outside', clickOutside);

app.mount('#app')
