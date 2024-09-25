<template>
  <div v-if="isVisible" class="success">
    <div class="success__notification">
      <div class="success__check">
         <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" style="fill: #658e8b;transform: scale(1);"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
      </div>
      <span class="success__message">¡Información enviada con éxito!</span>
      <div class="success__btn" @click="refresh">Aceptar</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const refresh = () => {
  window.location.reload()
}
</script>

<style lang="scss">
.success {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 9999;
  &__notification {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 20px 20px 10px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-in-out;
  }
  &__check {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #658e8b;
    svg{
      position: relative;
      top: -5px;
      right: 3px;
    }
  }
  &__message{
    margin-top: 15px;
  }
  &__btn{
      margin: 15px auto;
      width: 120px;
      border: 1px solid #658e8b;
      background: #e7f0f0;
      color: #5B5957;
      cursor: pointer;
      border-radius: 68px;
      justify-content: center;
      align-items: center;
      height: 35px;
      display: flex;
      outline: none;
      text-decoration: none;
      &:focus{
          outline: none;
      }
      &:active{
          outline: none; 
          box-shadow: none; 
          -webkit-tap-highlight-color: transparent;
      }
  }
}



@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
