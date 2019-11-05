import Vue from 'vue'
import Router from 'vue-router'
import MainBook from '@/components/MainBook'
import ReadBook from '@/components/ReadBook'
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
            path: '/read',
            name: 'readbook',
            component: ReadBook
        },
        {
            path: '/add',
            name: 'addbook',
            component: AddBook
        }
    ]
})