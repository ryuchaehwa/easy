/*eslint-disable no-console */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let books = new Map();
books.set('201910', {
    'park': { userName: 'park', bookTitle: '201910', bookThumbnail: 'book1', bookUrl: 'http://www.naver.com' },
    'ryu': { userName: 'ryu', bookTitle: '201910', bookThumbnail: 'book2', bookUrl: 'http://www.naver.com' },
    'lee': { userName: 'lee', bookTitle: '201910', bookThumbnail: 'book3', bookUrl: 'http://www.naver.com' }
})

books.set('201909', {
    'park': { userName: 'park', bookTitle: '201909', bookThumbnail: 'book09', bookUrl: 'http://www.google.com' },
    'ryu': { userName: 'ryu', bookTitle: '201909', bookThumbnail: 'book2', bookUrl: 'http://www.google.com' },
    'lee': { userName: 'lee', bookTitle: '201909', bookThumbnail: 'book3', bookUrl: 'http://www.google.com' }
})

books.set('201908', {
    'park': { userName: 'park', bookTitle: '201908', bookThumbnail: 'book09', bookUrl: 'http://www.daum.net' },
    'ryu': { userName: 'ryu', bookTitle: '201908', bookThumbnail: 'book2', bookUrl: 'http://www.daum.net' },
    'lee': { userName: 'lee', bookTitle: '201908', bookThumbnail: 'book3', bookUrl: 'http://www.daum.net' }
})

books.set('201907', {
    'park': { userName: 'park', bookTitle: '201907', bookThumbnail: 'book09', bookUrl: 'http://wwww.google.com' },
    'ryu': { userName: 'ryu', bookTitle: '201907', bookThumbnail: 'book2', bookUrl: 'http://wwww.google.com' },
    'lee': { userName: 'lee', bookTitle: '201907', bookThumbnail: 'book3', bookUrl: 'http://wwww.google.com' }
})


export default new Vuex.Store({
    state: {
        books,
        month: new Date().toISOString().substring(0, 7)
    },

    getters: {
        getBooks: function (state) {

            let month = state.month.split('-').join('')
            // console.log("sotre getbooks month: " + month)
            let books = state.books
            // console.log("store books: " + books)

            let sortedBooks = books.get(month)
            // console.log(sortedBooks)
            return sortedBooks
        },

        getMonth: function (state) {
            var month = state.month
            // console.log(month)

            var fomattedMonth = month.split('-').join('')
            // console.log('store getMonth getters: ' + fomattedMonth)
            return fomattedMonth
        }

    },

    mutations: {
        setMonthQuery: function (state, payload) {
            // console.log(payload)
            return state.month = payload
        },

        updateBook: function(state, payload) {

            // console.log("store updateBook state : ")
            // console.log(state)
            // console.log("store updateBook item : ") 
            // console.log(item)
            // console.log("store updateBook monthKey ")
            // console.log(monthKey)
            // console.log(123123123)
            // console.log("state : month")

            var a = state.month.split('-').join('')
            // console.log("aaaaaaaa")
            // console.log(a)

            var b = state.books.get(a)
            console.log('bbbbbb')
            console.log(b)

            console.log("state : item")
            console.log(payload)

            // b.set(a, payload)



            // console.log('store edited book data pyaload :: ' + payload)
        }
    },

    actions: {}

})
