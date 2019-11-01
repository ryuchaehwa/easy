<template>
    <div>
        <h1>Book List</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                <span>{{book.userName}}</span>
                <span>{{book.bookTitle}}</span>
            </li>
        </ul>

        


    </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    name: 'BookMain',
    created() {
        this.$http.get('/api/books').then((response) => { 
           
            this.books = response.data
             console.log(this.books)
            })
    },
    data() {
        return {
            books: []
        }
    }
}
</script>