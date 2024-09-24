<script setup>
import { ref, reactive } from "vue";
import Card from "../Cards/CardPlans.vue"
const cards = reactive([
    {
        title:"Emprendedor",
        description:"Este plan está pensado para emprendedores que inician su presencia en línea. Incluye un sitio web, ideal para mostrar información sobre tu negocio o proyecto. Ofrece soporte técnico para que puedas lanzar tu página de manera rápida y sin problemas. Además, te permite destacarte con un sitio adaptable a móviles y una excelente experiencia de usuario.",
        image:"https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Fbxs-home.svg?alt=media&token=68e53f50-17f9-4712-862e-0500c619e254",
        value:"$ 70.000 mensuales",
        flag:true
    },
    {
        title:"Profesional",
        description:"Ideal para profesionales y pequeñas empresas que necesitan un sitio web más completo y personalizado. Incluye un diseño web profesional, optimización SEO, integración con redes sociales y una plataforma para gestionar contenido. Este plan te ayuda a destacar con un sitio adaptable a móviles y optimiza la experiencia del usuario.",
        image:"https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Fbxs-bank.svg?alt=media&token=681a83e7-8958-449d-ab40-58791c4a748f",
        value:"$ 1´500.000 unico pago",
        flag:false
    },
    {
        title:"Empresarial",
        description:"Pensado para empresas que necesitan un sitio web avanzado y escalable. Ofrece funcionalidades como comercio electrónico, integración con herramientas de marketing, análisis de datos avanzados y soporte prioritario. Ideal para negocios que buscan automatización, crecimiento continuo y una plataforma robusta para potenciar ventas online.",
        image:"https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Fhotel-solid.svg?alt=media&token=19c3302d-40f4-433e-a880-4f0ae8c43a94",
        value:"$ 2´700.000 unico pago",
        flag:false
    },
]);
</script>
<template>
  <div class="plans__title">
    <h1>Planes</h1>
  </div>
  <div class="plans">
    <div v-for="(card, index) in cards"  :key="index">
        <Card :data="card"/>
    </div>
  </div>
</template>
<style lang="scss">
.plans {
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
  grid-template-rows: auto; 
  justify-content: center;
  align-items: center;
  margin: 25px auto;
  &__title{
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    margin-top: 20px;
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);; 
    }
  @media (min-width: 768px) {
    width: 760px;  
    grid-template-columns: repeat(3, 1fr);; 
    }
  @media (min-width: 1024px) {
    width: 1100px;
    grid-template-columns: repeat(3, 1fr);
    }
  @media (min-width: 1440px) {
    width: 1300px;
    grid-template-columns: repeat(3, 1fr);
    }
}
</style>