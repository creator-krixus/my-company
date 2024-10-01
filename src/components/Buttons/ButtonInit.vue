<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 350;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="showButton"  class="buttonInit"  @click="scrollToTop">
     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255);transform: scale(1);"><path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path><path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path></svg>
  </div>
</template>

<style lang="scss">
.buttonInit{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #658e8b;
  background: #658e8b;
  position: fixed;
  bottom: 25px;
  left: 10px;
  z-index: 1;
  transition: opacity 0.3s ease;
  cursor: pointer;
  &:active {
    outline: none; 
    box-shadow: none; 
    -webkit-tap-highlight-color: transparent;
  }
  svg{
    padding: 2px 0 0 3px;
  }
}
</style>
