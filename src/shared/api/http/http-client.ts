import axios from 'axios';

const FALLBACK_URL = import.meta.env.VITE_APP_YANDEX_API_URL ?? 'https://api.weather.yandex.ru';

const specialHeaders = {
  'X-Yandex-Weather-Key': import.meta.env.VITE_APP_YANDEX_API_TOKEN,
};

function createHttpInstance(baseURL: string = FALLBACK_URL) {
  return axios.create({ baseURL, headers: { ...specialHeaders } });
}

const httpInstance = createHttpInstance();

export { httpInstance, createHttpInstance };
