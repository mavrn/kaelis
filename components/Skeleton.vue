<template>
  <div class="skeleton">
    <div class="animated-background"></div>
  </div>
</template>

<style scoped>
.skeleton {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.animated-background {
  animation: loading 1.5s infinite;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  height: 100%;
  transform: translateX(-50%);
}

@keyframes loading {
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(-150%);
  }
}
</style>
