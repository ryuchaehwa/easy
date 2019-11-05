<template>
  <v-container>
    <v-form v-model="valid">
        <v-text-field v-model="book.user_name" label="User Id" required></v-text-field>
        <v-text-field v-model="book.book_title" label="Book Title" required></v-text-field>
        <v-text-field v-model="book.book_url" label="Book Url" ></v-text-field>
        <v-btn @click="signup">등록</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "AddBook",
  created() {

  },
  data() {
    return {
      valid: false,
      book: {
        user_name: '',
        book_title: '',
        book_url: ''
      }
    };
  },
  methods: {
    signup: function() {
      this.$http.post('/api/books/addbook', {
        book: this.book
      })
      .then((res) => {
        if(res.data.success == true) {
          alert(res.data.message);
          this.$router.push('/')
        }
        if(res.data.success == false) {
          alert(res.data.message);
        }
      })
      .catch(function (error) {
        alert(error)
      })
    }
  }
};
</script>