<script setup>
</script>

<template>
    <div class="header">
        <router-link to="/" class="header__router">
            <div class="header__logo">
                <p class="header__name">Softinkra</p>
                <p class="header__main">Innovando el futuro</p>
                <p class="header__second">Un código a la vez</p>
            </div>
        </router-link>
        <div class="header__menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"         stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    &__router{
        text-decoration: none;
        color:#383737
    }
    &__logo{
        cursor: pointer;
    }
    &__name {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 800;
        margin: 0;
        font-size: 20px;
        color:#383737
    }

    &__main,
    &__second {
        margin: 0;
        display: inline-block;
        opacity: 0;
        position: absolute;
    }

    &__main {
        animation: fadeInOutMain 4s forwards;
    }

    &__second {
        animation: fadeInSecond 4s forwards 2s;
    }

    &__menu {
        width: 35px;
        height: 35px;
        cursor: pointer;
        &:active{
            outline: none; 
            box-shadow: none; 
            -webkit-tap-highlight-color: transparent;
        }
    }
}


@keyframes fadeInOutMain {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    25% {
        opacity: 1;
        transform: translateY(0);
    }

    75% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-10px);
    }
}

@keyframes fadeInSecond {
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }

    50% {
        opacity: 0;
        transform: translateX(0);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
