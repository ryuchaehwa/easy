<template>
  <v-container>
    <router-link to="/addbook">
      <v-btn>도서신청</v-btn>
    </router-link>
    <v-simple-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>책제목</th>
          <th>썸네일</th>
          <th>링크</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.book_no">
          <td>{{book.book_no}}</td>
          <td>{{book.user_name}}</td>
          <td>{{book.book_title}}</td>
          <td>{{book.book_thumbnail}}</td>
          <td>
            <a :href="book.book_url">링크</a>
          </td>
          <td>
            <span>
              <v-icon>mdi-delete</v-icon>
            </span>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: "BookMain",
  created() {
    this.$http
      .get("/api/books")
      .then(response => {
        this.books = response.data;
        console.log(this.books);
      })
      .catch(err => console.log(err));
  },
  data() {
    return {
      books: []
    };
  }
};
</script>