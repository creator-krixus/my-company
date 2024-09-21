<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showTooltip = ref(false);
let tooltipInterval = null;

onMounted(() => {
  tooltipInterval = setInterval(() => {
    showTooltip.value = true; 
    setTimeout(() => {
      showTooltip.value = false;
    }, 10000);
  }, 30000);
});

onBeforeUnmount(() => {
  clearInterval(tooltipInterval);
});
</script>

<template>
  <div class="whatsappBtn">
    <a href="https://wa.me/+573113166588?text=Hola%20me%20gustaría%20tener%20más%20información%20sobre%20los%20planes." target="_blank" rel="noopened">
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style="fill: rgb(255,255, 255);transform:">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
      </svg>
    </a>
    <div v-if="showTooltip" class="whatsappBtn__tooltip">¡Chatea con nosotros!</div>
  </div>
</template>

<style lang="scss">
.whatsappBtn {
  position: fixed;
  bottom: 25px;
  right: 12px;
  z-index: 1;
  background-color: #25d366;
  border: none;
  border-radius: 100% 100% 100% 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  padding-top: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:active {
    outline: none; 
    box-shadow: none; 
    -webkit-tap-highlight-color: transparent;
  }

  &__tooltip {
    position: absolute;
    top: 50px;
    right: 51px;
    background-color: #cbdedd;
    padding: 5px 10px;
    border-radius: 6px 0px 6px 6px;
    font-size: 12px;
    opacity: 0.9;
    white-space: nowrap;
    border: 1px solid #e7f0f0;
  }
}
</style>
