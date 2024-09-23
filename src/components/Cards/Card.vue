<script setup>
const props = defineProps({
    data: Object
})
const truncateText = (text, maxLength = 200) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
</script>
<template>
    <div class="card">
        <div class="card__content">
            <p class="card__title">{{ data.title }}</p>
            <div class="card__description">{{ data.description }}</div>
        </div>
        <img class="card__image" :src="data.image" :alt="data.title">
    </div>
</template>
<style lang="scss">
    .card{
        border: 1px solid #e7f0f0;
        border-radius: 12px;
        width: 100%;
        padding: 12px;
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.4);
        &__title{
            font-size: 20px;
            font-weight: 700;
        }
        &__description{
            margin: 12px 0;
            height: 100px;
        }
        &__image{
            width: 100%;
            border-radius: 12px;
        }
        @media (min-width: 768px) {
            height: 380px;
        }
    }
</style>