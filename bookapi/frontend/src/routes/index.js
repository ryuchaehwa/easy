import Vue from 'vue'
import Router from 'vue-router'
import MainBook from '@/components/MainBook'
import AddBook from '@/components/AddBook'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainbook',
            component: MainBook
        },
        {
            path: '/add',
            name: 'addbook',
            component: AddBook
        }
    ]
})