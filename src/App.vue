<script setup>
import Header from "../src/components/Header/Header.vue";
import Footer from "../src/components/Footer/Footer.vue";
import WhatsappBtn from "../src/components/Buttons/WhatsappBtn.vue";
import ButtonInit from "../src/components/Buttons/ButtonInit.vue"
</script>

<template>
  <div class="app">
      <ButtonInit />
      <WhatsappBtn />
      <Header />
      <router-view />
      <Footer />
    </div>
</template>

<style lang="scss">
.app {
  font-family: 'Gothic A1', sans-serif;
  background: #e7f0f0;
  color: #5B5957;
}
</style>
