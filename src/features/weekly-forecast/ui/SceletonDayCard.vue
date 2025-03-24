<template>
  <article class="sceleton-card">
    <span class="sceleton-card__text"></span>
    <div class="sceleton-card__image"></div>
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
  gap: 0.8rem;
  height: 10.1rem;
  padding: 2.5rem 2.6rem;
  border-radius: var(--border-radius);
  background: radial-gradient(
    134.39% 134.39% at -17.89% -22.86%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(238, 237, 237, 0.1) 100%
  );
  background-color: var(--background);

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
