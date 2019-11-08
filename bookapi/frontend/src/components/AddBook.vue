<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field type="text" required label="user name" v-model="book.user_name"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field type="text" required label="book title" v-model="book.book_title"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field type="text" label="book url" v-model="book.book_url"></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="primary" @click="btnAdd">등록</v-btn>
      <v-btn color="btn">취소</v-btn>
    </v-container>
  </v-form>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "AddBook",
  data() {
    return {
      book: {
        user_name: "",
        book_title: "",
        book_url: ""
      }
    };
  },
  methods: {
    btnAdd: function() {
      // console.log(123);

      let user_name = this.book.user_name;
      let book_title = this.book.book_title;
      let book_url = this.book.book_url;

      let book = new Object();

      book = {
        user_name,
        book_title,
        book_url
      };

      console.log(book);

      this.$http
        .post("/api/books", {
          book
        })
        .then(res => {
          if (res.data.success == true) {
            alert(res.data.message);
          } else {
            alert(res.data.message);
          }
        })
        .catch(function(err) {
          alert(err);
        });

      (this.book.user_name = ""),
        (this.book.book_title = ""),
        (this.book.book_url = "");

      //redirect
      // if(status == 200) {
      //   self.$router.push('/')
      // }
      this.$router.push("/");
    }
  }
};
</script>