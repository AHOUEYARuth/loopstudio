import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Careers from "./views/Careers.vue";
import Product from "./views/Product.vue";
import Support from "./views/Support.vue";

const routes = [
    {
        path: '/' ,
        component: Home
    },

    {
        path: '/about' , 
        component: About
    },
    {
        path: '/careers' ,
        component: Careers
    },
    {
        path: '/event' ,
        component: Event
    },
    {
        path: '/product' ,
        component: Product
    },
    {
        path: '/support' ,
        component: Support
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});