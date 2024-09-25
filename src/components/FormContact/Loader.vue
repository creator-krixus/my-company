<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <div v-if="isVisible" class="loader">
    <div class="loader__content">
      <div class="loader__spinner"></div>
      <span class="loader__text">Enviando...</span>
    </div>
  </div>
</template>


<style lang="scss">
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  gap: 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(202, 206, 206, 0.356);
  backdrop-filter: blur(4px);
  z-index: 9999;
  &__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  }
  &__text {
    position: absolute;
    color: #658e8b;
    font-size: 1.2rem;
    font-weight: 600;
  }
  &__spinner {
    border: 6px solid #e7f0f0;
    border-left-color: #658e8b;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
