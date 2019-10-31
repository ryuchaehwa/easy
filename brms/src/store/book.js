import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let books = new Map();
books.set('201909', {
    'user1' : {userName: 'chaehwa',}
})

export default new Vuex.Store({

state: {},
getters: {},
mutations: {},
actions: {}

})