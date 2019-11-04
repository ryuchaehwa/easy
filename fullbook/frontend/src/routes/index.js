import Vue from 'vue'
import Router from 'vue-router'
import BookMain from '@/components/BookMain'
// import AddBook from '@/components/AddBook'


Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: BookMain
        },
        // {
        //     path: '/addbook',
        //     name: 'addbook',
        //     component: AddBook
        // }
    ]
})