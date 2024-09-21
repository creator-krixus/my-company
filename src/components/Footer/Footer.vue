<script setup>
const year = new Date().getFullYear()
</script>
<template >
    <div class="footer">
        <div class="footer__container">
            <p class="footer__name">Softinkra</p>
            <p class="footer__name">Contactanos</p>
            <p class="footer__name">Preguntas frecuentes</p>
            <router-link to="/politics" class="footer__name">Politicas de privacidad</router-link>
        </div>
        <div class="footer__under">
            <p class="footer__text">Softinkra © Todos los derechos reservados {{ year }}
            </p>
        </div>
    </div>
</template>
<style lang="scss">
.footer{
    text-align: center;
    padding: 12px;
    background: #cbdedd;
    margin-top: 20px;
    &__name{
        cursor: pointer;
        margin: 5px 0;
        font-size: 18px;
        text-decoration: none;
        color:#383737;
        &:active{
            outline: none; 
            box-shadow: none; 
            -webkit-tap-highlight-color: transparent;
        }
    }
    &__container{
        border-bottom: 1px solid rgb(111, 108, 108);
        padding: 12px;
    }
    &__text{
        padding: 12px 0;
        font-size: 12px;
    }
    @media (min-width:900px) {
        text-align: left;
        &__under{
            text-align: center;
        }
        &__text{
            font-size: 16px;
        }
    }
}
    
</style>