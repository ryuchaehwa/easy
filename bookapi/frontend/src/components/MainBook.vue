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
          <th>{{book.book_title}}</th>
          <th>
            <a :href="book.book_url">링크</a>
          </th>
          <th>{{book.reg_date}}</th>
          <th>
            <span>
              <v-icon @click="btnDelete(book.user_name, $event)">mdi-delete</v-icon>
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
    this.$http.get("/api/books").then(response => {
      this.books = response.data;
      console.log(response.data);
    }).catch(err => {
      console.log(err)
    });
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    btnDelete(name, event) {
      console.log(name)
      console.log(event)
    }
  }
};
</script>