<template>
  <header class="the-header">
    <slot />
  </header>
</template>

<style scoped>
.the-header {
  display: flex;
  align-items: center;
  padding: 4rem 0 0 0;

  container: layout / inline-size;
}
</style>