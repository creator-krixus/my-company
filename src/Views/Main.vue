<script setup>
import Home from "../components/ViewHome/Home.vue";
import Offers from "../components/ViewOffers/Offers.vue";
import OurCompany from "../components/OurCompany/OurCompany.vue";
import Plans from "../components/Plans/Plans.vue";
import FormContact from "../components/FormContact/FormContact.vue";

</script>

<template>
  <div class="main">
      <Home />
      <Offers />
      <OurCompany />
      <Plans />
      <FormContact />
      <router-view />
  </div>
</template>