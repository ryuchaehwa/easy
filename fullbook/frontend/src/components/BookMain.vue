<template>
    <div>
        <h1>Book List</h1>
        <ul>
            <li v-for="book in books" :key="book.userName">
                <span>{{book.userName}}</span>
            </li>
        </ul>


    </div>
</template>

<script>
export default {
    name: 'BookMain',
    created() {
        this.$http.get('/api/books').then((response) => { this.movies = response.data})
    },
    data() {
        return {
            books: []
        }
    }
}
</script>