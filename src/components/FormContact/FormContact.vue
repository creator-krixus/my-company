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
  <div class="formContact">
    <h1 class="formContact__title">Contactanos</h1>
    <form class="formContact__form" action="edeb9a87750a0e079ff4fddb8ee87c2a" method="POST">
      <img class="formContact__image" src="https://firebasestorage.googleapis.com/v0/b/save-images-544a9.appspot.com/o/fotos%2Ftelephone-612061_1280.jpg?alt=media&token=9d7ece99-9904-4c93-a2a3-7bbc4df46e52" alt="contact" v-if="sizeWidth >= 600">
      <div class="formContact__container">
        <div class="formContact__content">
          <div class="formContact__name">
            <input type="text" name="name" class="" placeholder="Nombre completo" required>
          </div>
          <div class="formContact__email">
            <input type="email" name="email" class="" placeholder="Correo electronico" required>
          </div>
          <div class="formContact__phone">
            <input type="number" name="phone"  class="" placeholder="Numero telefonico" required>
          </div>
          <div class="formContact__subject">
            <input type="text" name="subject" class="" placeholder="Asunto" required>
          </div>
          <div class="formContact__message">
            <textarea placeholder="Tu mensaje" class="" name="message" rows="6" required></textarea>
          </div>
        </div>
        <button type="submit" class="formContact__send">Enviar</button>
        <!-- Cambiar por la ip local o network para trabajar -->
        <input type="hidden" name="_next" value="http://www.softinkra.com">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
      </div>
    </form>
  </div>
</template>
<style lang="scss">
  .formContact {
    text-align: center;
    display: flex;
    flex-direction: column;
    &__form{
      padding: 24px;
      margin: 12PX;
      border-radius: 12px;
      border: 1px solid #658e8b;
      box-shadow: 5px 5px 10px 0 rgba(70, 69, 69, 0.4);
    }
    &__image{
      width: 100%;
      height: 100%;
      border-radius: 12px;
      margin-bottom: 12px;
    }
    &__title{
      margin-bottom: 12PX;
    }
    input, textarea{
      width: 100%;
      outline: none;
      border: 1px solid #658e8b;
      background: #e7f0f0;
      border-radius: 6px;
      padding: 12PX;
      resize: none;
      font-size: 16px;
    }
    &__content{
      display: flex;
      flex-direction: column;
      gap: 12px
    }
    &__send{
      margin: 15px auto;
      width: 150px;
      border: 1px solid #658e8b;
      background: #e7f0f0;
      color: #5B5957;
      cursor: pointer;
      border-radius: 68px;
      justify-content: center;
      align-items: center;
      height: 43px;
      font-weight: 600;
      font-size: 20px;
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
    @media (min-width:768px) {
      justify-content: center;
      align-items: center;
      &__form{
        width: 750px;
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: auto; 
        justify-content: center;
        gap: 20px;
      }
    }
    @media (min-width:1024px) {
      &__form{
        width: 900px;
      }
    }
    @media (min-width:1440px) {
      &__form{
        width: 1200px;
      }
    }
  }
</style>