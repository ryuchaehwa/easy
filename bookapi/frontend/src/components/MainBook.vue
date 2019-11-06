<template>
  <v-container>
    <v-btn to="/add">도서추가</v-btn>
    <v-simple-table>
      <thead>
        <tr>
          <th>신청자</th>
          <th>도서명</th>
          <th>링크</th>
          <th>등록일</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.user_id">
          <th>{{book.user_name}}</th>
          <th>
            <input
              type="text"
              :value="book.book_title"
              id="book_title"
              @keyup="titleEdit(book, $event)"
            />
          </th>
          <th>
            <a :href="book.book_url">링크</a>
          </th>
          <th>{{book.reg_date}}</th>
          <th>
            <span>
              <v-icon @click="btnDelete(book)">mdi-delete</v-icon>
            </span>
          </th>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "MainBook",

  created() {
    this.$http
      .get("/api/books")
      .then(response => {
        this.books = response.data;
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  data() {
    return {
      books: []
    };
  },

  methods: {
    btnDelete(book) {
      // console.log(book_no);
      let book_no = book.book_no;
      if (confirm(book_no + " 를 삭제하시겠습니까?")) {
        this.$http
          .delete("/api/books/deletebook", {
            book_no
          })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err));
      } else {
        return;
      }
    },

    titleEdit(book, event) {
      // console.log(book);
      // console.log(event);

      let book_no = book.book_no;
      // console.log(book_no);

      if (event.keyCode === 13) {
        var book_title = event.target.value;
        // console.log(book_title);

        this.$http
          .post("/api/books/editbook", {
            book_title,
            book_no
          })
          .then(res => {
            console.log(res.data);
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }
  }
};
</script>