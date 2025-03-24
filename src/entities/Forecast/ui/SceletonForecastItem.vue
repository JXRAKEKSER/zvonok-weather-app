<template>
  <li class="forecast-item sceleton-card">
    <time class="forecast-item__actual-time sceleton__text">9:00</time>
    <span class="forecast-item__day-period sceleton__text">утро</span>
    <span class="forecast-item__temperature sceleton__text">8 &deg;</span>
    <div class="forecast-item__condition">
      <div class="sceleton__image"></div>
      <span
        class="forecast-item__condition-label forecast-item__condition-label_capitelized_first-letter sceleton__text"
        >Солнечно</span
      >
    </div>
    <span class="forecast-item__wind-speed sceleton__text">1 м/с</span>
    <span class="forecast-item__humidity sceleton__text">70 &percnt;</span>
  </li>
</template>

<style scoped>
@import url("./forecast-item.css");

.sceleton-card {
  --background: #97d8fc;
  --border-radius: 0.8rem;

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
  width: 6rem;
  height: 6rem;
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
