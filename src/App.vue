<script setup>
import Header from "../src/components/Header/Header.vue";
import Home from "../src/components/ViewHome/Home.vue";
import Footer from "../src/components/Footer/Footer.vue";
import Offers from "../src/components/ViewOffers/Offers.vue";
import WhatsappBtn from "./components/Buttons/WhatsappBtn.vue";

</script>

<template>
  <div class="app">
    <WhatsappBtn />
    <Header />
    <Home />
    <Offers />
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
