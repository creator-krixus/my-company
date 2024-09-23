<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sizeWidth = ref(document.documentElement.clientWidth);

const updateWidth = () => {
  sizeWidth.value = document.documentElement.clientWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});


onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>
<template>
  <div class="ourCompany">
    <h1 class="ourCompany__title"v-if="sizeWidth < 768">La mejor decisión es elegirnos</h1>
    <div class="ourCompany__image">
      <img class="ourCompany__img" src="https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Fpeople-2568603_1280.jpg?alt=media&token=5174d09d-d4f7-42fe-994a-ccc2556a614b" alt="busines">
      <div class="ourCompany__ball">
        <div class="ourCompany__check">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform:scale(1);"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
        </div>
      </div>
    </div>
    <div class="ourCompany__content">
      <h1 class="ourCompany__title"v-if="sizeWidth >= 768">La mejor decisión es elegirnos</h1>
      <div class="ourCompany__text">En la era digital actual, tener un sitio web es esencial para cualquier negocio. Una página en internet te permite aumentar tu visibilidad, llegando a más clientes potenciales que buscan tus productos o servicios en línea.<br> Permitiendote estar disponible 24/7, siendo una excelente herramienta para destacar frente a la competencia y aumentar tus oportunidades de venta.</div>
      <div class="ourCompany__logos">
        <div class="ourCompany__imageOne">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" style="fill: #a5a09c"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
        </div>
        <div class="ourCompany__imageTwo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30" height="30" style="fill: #a5a09c"><path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"/></svg>
        </div>
      </div>
      <div class="ourCompany__contacUs">
        <a class="ourCompany__btn" href="https://wa.me/+573113166588?text=Hola%20me%20gustaría%20tener%20más%20información%20sobre%20los%20planes." target="_blank" rel="noopened">
          <h3>Contactanos</h3>
        </a>
        <a href="tel:+573113166588" class="ourCompany__phone">
          <div class="ourCompany__imagePhone">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: #383737;transform: scale(1);">
                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
            </svg>
          </div>
          <div class="ourCompany__numberPhone">
            <p>Llamanos</p>
            <p>3113166588</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .ourCompany{
    padding: 12px;
    &__title{
      font-size: 30px;
      text-align: center;
      padding-bottom: 12px;
      font-weight: 800;
    }
    &__image, &__content{
      text-align: center;
    }
    &__image{
      position: relative;
      border-radius: 12px 12px 0 12px;
    }
    &__ball{
      background: #e7f0f0;
      border-radius:100% 100% 0 100%;
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: -10px;
      right: -10px;
      display: flex;
      justify-content: center;
      align-items: center; 
    }
    &__check{
      margin: 0 auto;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      border: 1px solid #658e8b;
      background: #658e8b;
      svg{
        padding-bottom: 16px;
        padding-right: 13px;
      }
    }
    &__img{
      width: 100%;
      border-radius: 12px 12px 0 12px;
    }
    &__text{
      margin: 20px 0;
      text-align: justify;
    }
    &__logos{
      display: flex;
      border-top: 1px solid rgb(213, 208, 208);
      border-bottom: 1px solid rgb(213, 208, 208);
      padding: 12px 0;
    }
    &__imageOne, &__imageTwo{
      width: 50%;
    }
    &__btn{
        width: 50%;
        border: 1px solid #658e8b;
        color: #5B5957;
        cursor: pointer;
        border-radius: 68px;
        justify-content: center;
        align-items: center;
        height: 43px;
        padding: 16px 20px;
        font-weight: 600;
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
    &__contacUs, &__phone, &__imagePhone{
      margin: 0 auto;
      text-decoration: none;
      color: #5B5957;
      display: flex;
      &:active{
        outline: none; 
        box-shadow: none; 
        -webkit-tap-highlight-color: transparent;
      }
    }
    &__contacUs{
      padding: 12px 0;
    }
    &__imagePhone{
      width: 35px;
      height: 35px;
      border: 1px solid #e7f0f0;
      border-radius: 50%;
      background: #cbdedd;
      svg{
        padding-top: 3px;
        padding-left: 4px;
      }
    }
    &__numberPhone{
      text-align: left;
      padding-left: 12px;
    }
    @media (min-width:768px) {
      display: flex;
      margin: 0 auto;
      margin-top: -60px;
      width: 750px;
      gap: 20px;
      &__title{
      padding-bottom: 0px;
      }
      &__img{
        width: 100%;
        height: 100%;
      }
      &__text{
        margin: 20px 0;
        padding: 0 12px;
        text-align: justify;
        border-left: 2px solid #415a41;
      }
    }
    @media (min-width:1024px) {
      width: 900px;
    }
  }
</style>