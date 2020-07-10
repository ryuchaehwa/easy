import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main.vue'
import MainMap from '../components/MainMap'

Vue.use( VueRouter )

export const router = new VueRouter( {
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/main-map',
            component: MainMap
        }
    ]
} )