<script setup>
import Home from "../components/ViewHome/Home.vue";
import Offers from "../components/ViewOffers/Offers.vue";

</script>

<template>
  <div class="main">
      <Home />
      <Offers />
      <router-view />
  </div>
</template>