
<script setup>
import { ref, reactive } from "vue";
import waveTop from "../../assets/wave.svg"
import waveBottom from "../../assets/waveBottom.svg"
import Card from "../Cards/Card.vue"

const cards = reactive([
    {
        title:"Desarrollo Web",
        description:"Creación de sitios web a medida, enfocados en la experiencia de usuario (UX) y optimización para SEO. Usando tecnologías modernas.",
        image:"https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Fpneumatic-desk-6952955_1280.jpg?alt=media&token=e5431aad-0100-487a-8fdc-0e89bb8ed0b2"
    },
    {
        title:"Optimización de Sitios Web",
        description:"Servicio continuo para asegurar el buen funcionamiento de sitios y aplicaciones. Incluye actualizaciones de seguridad, mejora de rendimiento y correcciones de errores.",
        image:"https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Foptimizacion.jpg?alt=media&token=cfac5d53-cc5c-46b5-8c60-33d44e244ff9"
    },
    {
        title:"Consultoría y Estrategia Digital",
        description:"Asesoramiento estratégico en transformación digital, marketing online, y cómo implementar tecnologías web innovadoras en los negocios para mejorar la eficiencia y aumentar las ventas.",
        image:"https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Fpeople-1979261_1280.jpg?alt=media&token=cfee32d7-f60b-4b35-887b-c520ecdf2cb1"
    },
    {
        title:"Aplicaciones Web y Móviles",
        description:"Desarrollo de aplicaciones web progresivas (PWAs) y móviles, brindando experiencias interactivas y rápidas en diferentes plataformas, utilizando frameworks como Vue.js, React Native, y Flutter.",
        image:"https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Fappmoviles.jpg?alt=media&token=ecebc2a4-4cba-426a-89b8-9d01b907918a"
    }
])
</script>
<template>
    <div class="offers">
        <img :src="waveTop" alt="wave">
        <p class="offers__services">Servicios</p>
        <div class="offers__content">
            <div v-for="(card, index) in cards"  :key="index">
                <Card :data="card"/>
            </div>
        </div>
        <img class="offers__waveBottom" :src="waveBottom" alt="wave">
    </div>
</template>
<style lang="scss">
.offers {
    width: 100%;
    position: relative;
    &__content{
        display: grid;
        grid-template-columns: repeat(1, 1fr); 
        grid-template-rows: auto; 
        gap: 10px; 
        margin-top: -5px;
        padding: 12px;
        background-color: #cbdedd;
    }
    &__services{
        margin: -15px 0 0px 0;
        padding: 12px;
        font-size: 30px;
        font-weight: 800;
        text-align: center;
        background-color: #cbdedd;
    }
    &__waveBottom{
      margin-top: -5px;
    }
    @media (min-width: 500px) {
        &__content {
            grid-template-columns: repeat(2, 1fr);; 
        }
    }
    @media (min-width: 768px) {
        &__content {
            grid-template-columns: repeat(3, 1fr);; 
        }
    }
    @media (min-width: 1024px) {
        margin-top: -114px;
        &__content {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}  
</style>