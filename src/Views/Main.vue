<script setup>
import Home from "../components/ViewHome/Home.vue";
import Offers from "../components/ViewOffers/Offers.vue";
import OurCompany from "../components/OurCompany/OurCompany.vue";

</script>

<template>
  <div class="main">
      <Home />
      <Offers />
      <OurCompany />
      <router-view />
  </div>
</template>