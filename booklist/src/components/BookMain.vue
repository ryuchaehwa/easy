<template>
  <v-container>
    <!-- <v-btn @click="getBooks">get book list</v-btn> -->
    <h1>v - simeple - table</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th :class="setCss.textAlign">신청인</th>
            <th :class="setCss.textAlign">도서명</th>
            <th :class="setCss.textAlign">썸네일이미지</th>
            <th :class="setCss.textAlign">링크</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.userName" :class="setCss.textAlign">
            <td>{{book.userName}}</td>
            <td>
              <input
                type="text"
                :value="book.bookTitle"
                @click="getUser(book, $event)"
                @keyup="save"
              />
            </td>
            <td>{{book.bookThumbnail}}</td>
            <td>{{book.bookUrl}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn @click="save">save</v-btn>
  </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: "BookMain",

  props: {},

  components: {},

  data() {
    return {
      month: "",
      setCss: {
        textAlign: "text-center"
      },
      editBookTItle: null
    };
  },

  computed: {
    books: function() {
      //   let books = this.$store.getters.getBooks;
      //   let month = this.month;
      //   let m = month.toString()
      //   console.log('BookMain computed: Month ' + m)
      //   let a = books.get(month);

      return this.$store.getters.getBooks;
    }

    // getMonth: function() {
    //     let month = this.$store.getters.getMonth;
    //     console.log('BookMain: computed ' + month)
    //     return month;
    // }
  },

  methods: {
    save: function(event) {
      event.preventDefault();

      if (event.keyCode === 13) {
        console.log("event");

        var a = this.getUser();
        console.log(a);
      }
    },

    getUser: function(book, event) {
      var editedUsername = book.userName;
      var editedBookTitle = event.target.value;
      var editeBookThumbnail = book.bookThumbnail;
      var editedBookUrl = book.bookUrl;

      var item = new Object();
      item.userName = editedUsername;
      item.bookTitle = editedBookTitle;
      item.bookThumbnail = editeBookThumbnail;
      item.bookUrl = editedBookUrl;
    }
  },

//   created: function() {
//     var m = this.$store.getters.getMonth;
//     console.log("BookMain created() " + m);
//     this.month = m;
//   }
};
</script>