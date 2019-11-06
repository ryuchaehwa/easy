<template>
  <v-container>
    <v-date-picker type="month" locale="ko"></v-date-picker> <br><br>
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
          <td>{{book.user_name}}</td>
          <td>
            <input
              type="text"
              :value="book.book_title"
              id="book_title"
              @keyup="titleEdit(book, $event)"
            />
          </td>
          <td>
            <a :href="book.book_url">링크</a>
          </td>
          <td>{{book.reg_date}}</td>
          <td>
            <v-icon @click="btnDelete(book)">mdi-delete</v-icon>
          </td>
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

    let params = {
      params: {
        period: '2019-11'
      }
    }
    this.$http
      .get("/api/books", params)
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
      books: [],
      month: new Date().toISOString().substring(0, 7)
    };
  },

  methods: {
    btnDelete(book) {
      // console.log(book_no);
      let book_no = book.book_no;
      if (confirm(book_no + " 를 삭제하시겠습니까?")) {
        this.$http
          .post("/api/books/delbook", {
            book: {
              book_no
            }
          })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err));
      } else {
        return;
      }

      this.$router.go('/');
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