import BookMain from './components/BookMain'
import AddBook from './components/AddBook'

const routes = [
    {
        path: '/',
        component: BookMain
    },
    {
        path: '/addbook',
        component: AddBook
    }
]

export default routes;