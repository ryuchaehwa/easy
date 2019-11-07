import Vue from 'vue'
import Router from 'vue-router'
import BookMain from '@/components/BookMain'

Vue.use(Router)

export const router = new Router({

    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'bookmain',
            component: BookMain
        }
    ]

})