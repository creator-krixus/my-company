<script setup>
const props = defineProps({
    data: Object
});
</script>
<template>
    <div class="cardPlans">
      <div class="cardPlans__tag" v-if="data.flag">85% off</div>
      <div class="cardPlans__logo">
        <img :src="data.image" :alt="data.title">
      </div>
      <h3 class="cardPlans__title">{{ data.title }}</h3>
      <div class="cardPlans__line"></div>
      <p class="cardPlans__description">{{ data.description }}</p>
      <p class="cardPlans__value">{{ data.value }}</p>
      <a class="cardPlans__btn" :href="`https://wa.me/+573113166588?    text=Hola%20me%20gustaría%20tener%20más%20información%20sobre%20el%20plan%20${data.title}.`" target="_blank" rel="noopened">
          <h3>Cotiza</h3>
      </a>
    </div>
</template>
<style lang="scss">
.cardPlans{
  position: relative;
  border: 1px solid #658e8b;
  margin: 30px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  border-radius: 60px 5px 5px 5px;
  box-shadow: 5px 5px 10px 0 rgba(70, 69, 69, 0.4);
  &__tag{
    position: absolute;
    width: 120px;
    top: 18px;
    right: -26px;
    font-size: 22px;
    font-weight: 400;
    color: #175450;
    padding-right: 2px;
    transform: rotate(44deg);
    border: 1px solid #658e8b;
    clip-path: polygon(23% 0, 78% 0, 100% 100%, 0% 100%);
  }
  &__logo{
    width: 50px;
    height: 50px;
    position: absolute;
    transform: rotate(45deg);
    top: -26px;
    background: #658e8b;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      transform: rotate(-45deg);
    }
  }
  &__title{
    margin: 12px;
    font-weight: 600;
  }
  &__line{
    width: 30%;
    background: #658e8b;
    height: 3px;
  }
  &__description{
    margin: 12px;
    text-align: left;
  }
  &__value{
    border-top: 1px solid rgb(213, 208, 208);
    color: #658e8b;
    font-size: 25px;
    font-weight: 600;
    padding-top: 12px;
  }
  &__btn{
    margin: 15px auto;
    width: 150px;
    border: 1px solid #658e8b;
    color: #5B5957;
    cursor: pointer;
    border-radius: 68px;
    justify-content: center;
    align-items: center;
    height: 43px;
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
}
</style>