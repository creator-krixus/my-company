<script setup>
import develop from "../../assets/develop.jpg"
</script>
<template>
    <div class="home">
        <div class="home__containerImage">
            <img class="home__imagen" :src="develop" alt="develop">
        </div>
        <div class="home__containerSlogan">
            <p class="home__title">Convierte tu visión en una</p>
            <p class="home__title">realidad digital exitosa</p>
            <p class="home__description">Te ofrecemos soluciones personalizadas, adaptadas a las necesidades y desafíos de tu negocio. Trabajamos contigo para impulsar tu crecimiento mediante estrategias innovadoras y efectivas. Nuestro enfoque te garantiza resultados medibles y un servicio cercano, diseñado para superar tus expectativas. Juntos llevamos tu empresa al siguiente nivel.</p>
            <a class="home__btn" href="https://wa.me/+573113166588?text=Hola%20me%20gustaría%20tener%20más%20información%20sobre%20los%20planes." target="_blank" rel="noopened">
                <h3 >Contactanos</h3>
            </a>
        </div>
    </div>
</template>
<style lang="scss">
    .home {
        background-position: 50%;
        &__containerImage{
            display: flex;
            justify-content: center;
        }
        &__imagen{
            width:100%;
            margin: 20px;
        }
        &__containerSlogan{
            text-align: center;
        }
        &__title{
            margin: 0px;
            font-weight: 800;
            font-size: 24px;
        }
        &__description{
            margin: 20px 0;
            text-align: justify;
            font-size: 18px;
            padding: 14px;
        }
        &__btn{
            margin: 0 auto;
            width: 150px;
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
        @media (min-width:900px) {
            display: flex;
            flex-direction: row-reverse;
            width: 100%;
            &__containerImage{
                width: 50%;
            }
            &__containerSlogan{
                width: 50%;
                padding: 100px 14px;
            }
            &__title{
            font-size: 36px;
        }
            &__imagen{
                width:100%;
                margin: 20px 0 0 0;
                border-radius: 5px 0 0 5px;
            }
        }
    }
</style>