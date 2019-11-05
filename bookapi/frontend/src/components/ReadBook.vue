<template>
    <div>
        zxcvzxcvvxc
    </div>
</template>

<script>
export default {
    name: 'ReadBook',
    created() {
        var user_id = 'test';
        this.$http.get(`/api/books/${user_id}`).then((response) => {
            this.book = response.data
        })
    },
    data: function() {
        return {
            book: {}
        }
    }
}
</script>