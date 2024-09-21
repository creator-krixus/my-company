import { createRouter, createWebHistory } from 'vue-router'
import Main from '../Views/Main.vue'
import Politics from "../components/About/PoliticsAndPrivacity.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main
    },
    {
        path: '/politics',
        name: 'Politics',
        component: Politics
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
