<template>
<v-container>
    BookMain
    <BookList />
</v-container>
</template>

<script>
import BookList from './BookList'

export default {
    name: 'BookMain',
    components: {
        BookList,
    },
    data() {
        return {

        }
    }
}
</script>