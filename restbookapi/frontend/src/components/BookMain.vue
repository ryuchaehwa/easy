<template>
  <v-container>
      <v-date-picker type="month" v-model="date" locale="ko" @click:month="month"></v-date-picker>
      <v-simple-table>
          <thead>
              <tr>
                  <th>
                      name
                  </th>
                  <th>book title</th>
                  <th>book url</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="book in books" :key="book.book_no">
                  <td>{{book.user_name}}</td>
                  <td>{{book.book_title}}</td>
                  <td>{{book.book_url}}</td>
              </tr>
          </tbody>
      </v-simple-table>
  </v-container>
</template>

<script>
/* eslint-disable no-console */

const APILink = '/api/books';

export default {
  name: "BookMain",
  created() {
    this.$http
      .get(APILink, {
              params: {
                  month: this.date
          }
      })
      .then(response => {
          this.books = response.data,
          console.log(response.data)
      })
      .catch(err => console.log(err));
  },
  data() {
    return {
      books: [],
      date: new Date().toISOString().substr(0, 7)
    };
  },
  methods: {
      month: function() {
        //   console.log(1)

          let month = this.date
          console.log(month)
        //   this.$http.get('/api/books', {
        //       params: {
        //           month: month
        //       }
        //   })
        console.log(APILink)
      }
  }
};
</script>