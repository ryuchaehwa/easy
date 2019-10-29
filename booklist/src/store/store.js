/*eslint-disable no-console */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let books = new Map();
books.set('201910', {
    'park': { userName: 'park', bookTitle: '201910', bookThumbnail: 'book1', bookUrl: 'book1' },
    'ryu': { userName: 'ryu', bookTitle: '201910', bookThumbnail: 'book2', bookUrl: 'book2' },
    'lee': { userName: 'lee', bookTitle: '201910', bookThumbnail: 'book3', bookUrl: 'book3' }
})

books.set('201909', {
    'park': { userName: 'park', bookTitle: '201909', bookThumbnail: 'book09', bookUrl: 'book09' },
    'ryu': { userName: 'ryu', bookTitle: '201909', bookThumbnail: 'book2', bookUrl: 'book2' },
    'lee': { userName: 'lee', bookTitle: '201909', bookThumbnail: 'book3', bookUrl: 'book3' }
})

books.set('201908', {
    'park': { userName: 'park', bookTitle: '201908', bookThumbnail: 'book09', bookUrl: 'book09' },
    'ryu': { userName: 'ryu', bookTitle: '201908', bookThumbnail: 'book2', bookUrl: 'book2' },
    'lee': { userName: 'lee', bookTitle: '201908', bookThumbnail: 'book3', bookUrl: 'book3' }
})

books.set('201907', {
    'park': { userName: 'park', bookTitle: '201907', bookThumbnail: 'book09', bookUrl: 'book09' },
    'ryu': { userName: 'ryu', bookTitle: '201907', bookThumbnail: 'book2', bookUrl: 'book2' },
    'lee': { userName: 'lee', bookTitle: '201907', bookThumbnail: 'book3', bookUrl: 'book3' }
})


export default new Vuex.Store({
    state: { books,
    month: new Date().toISOString().substring(0, 7) },
    getters: {
        getBooks: function (state) {
            
            let month = state.month.split('-').join('')
            // console.log("sotre getbooks month: " + month)
            let books = state.books
            // console.log("store books: " + books)

            let sortedBooks = books.get(month)
            console.log(sortedBooks)

            return sortedBooks
        },

        getMonth: function(state) {
            var month = state.month
            // console.log(month)

            var fomattedMonth = month.split('-').join('')
            console.log('store getMonth getters: ' + fomattedMonth)
            return fomattedMonth
        }

    },
    mutations: {
        setMonthQuery: function(state, payload) {
            // console.log(payload)
            return state.month = payload
        }
    },
    actions: {}

})
