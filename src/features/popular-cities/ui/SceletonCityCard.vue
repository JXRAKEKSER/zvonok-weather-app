<template>
  <article class="sceleton-card">
    <h5 class="sceleton-card__text"></h5>
    <span class="sceleton-card__text"></span>
    <div class="sceleton-card__image"></div>
    <span class="sceleton-card__text"></span>
    <span class="sceleton-card__text"></span>
  </article>
</template>

<style scoped>
.sceleton-card {
  --border-radius: 0.8rem;
  --background: #97d8fc;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: 28.5rem;
  padding: 2.5rem 2.6rem;
  background: radial-gradient(
    134.39% 134.39% at -17.89% -22.86%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(238, 237, 237, 0.1) 100%
  );
  border-radius: var(--border-radius);

  border-image-source: linear-gradient(
    144.45deg,
    rgba(255, 255, 255, 0.4) -14.51%,
    rgba(255, 255, 255, 0) 117.67%
  );
  
  animation: loading 1.5s infinite;
}

.sceleton-card__text {
  width: 100%;
  height: 1rem;
  background-color: var(--background);
  animation: loading 1.5s infinite;
}
.sceleton-card__image {
  width: 6rem;
  height: 6rem;
  border-radius: 0.8rem;
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
