<template>
  <section class="forecast-summary sceleton-card">
    <h4 class="forecast-summary__tempreture sceleton__text">8 &deg;</h4>
    <div class="forecast-summary__condition-icon sceleton__image"></div>
    <ul class="forecast-summary-info forecast-summary__forecast-summary-info sceleton__list">
      <li
        class="forecast-summary-info__item forecast-summary-info__item_capitelized_first-letter sceleton__text"
      >
        Облачно
      </li>
      <li class="forecast-summary-info__item sceleton__text">
        Влажность: 70&percnt;
      </li>
      <li class="forecast-summary-info__item sceleton__text">Ветер: 8м/c</li>
    </ul>
  </section>
</template>

<style scoped>
@import url('./forecast-summary.css');

.sceleton-card {
  --background: #97d8fc;
  --border-radius: 0.8rem;
  padding: 1rem;

  background: radial-gradient(
    134.39% 134.39% at -17.89% -22.86%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(238, 237, 237, 0.1) 100%
  );
  background-color: var(--background);
  border-radius: var(--border-radius);

  animation: loading 1.5s infinite;
}

.sceleton__text {
  color: transparent;
  background-color: var(--background);
  border-radius: 0.5rem;
  animation: loading 1.5s infinite;
}
.sceleton__image {
  width: 100%;
  height: 17.9rem;
  border-radius: var(--border-radius);
  animation: loading 1.5s infinite;
}

.sceleton-card__list {
  background-color: var(--background);
  animation: loading 1.5s infinite;
}


@keyframes loading {
  0% {
    background-color: #79caf5;
  }
  50% {
    background-color: #7ccffc;
  }
  100% {
    background-color: #2d9cdb;
  }
}
</style>
