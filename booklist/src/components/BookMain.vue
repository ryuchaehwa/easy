<template>
  <v-container>
    <!-- <v-btn @click="getBooks">get book list</v-btn> -->
    <h1>computed - {{getM}}</h1>
    <h1>data - {{month}}</h1>
    <h1>method - {{getMo()}}</h1>
    <input type="hidden" :value="getM" id="m">
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
                :class="setCss.textAlign"
                :value="book.bookTitle"
                @keyup="save(book, $event)"
              />
            </td>
            <td>{{book.bookThumbnail}}</td>
            <td>
              <a :href="book.bookUrl">link</a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
/* eslint-disable no-console */

// var aa = this.$store.getters.getBooks

export default {
  name: "BookMain",

  props: {},

  components: {},

  data() {
    //   console.log(this.$store.getters.getMonth)
    return {
      month: this.$store.getters.getMonth,
      setCss: {
        textAlign: "text-center"
      }
    };
  },

  computed: {
    books: function() {
      //   let books = this.$store.getters.getBooks;
      //   let month = this.month;
      //   let m = month.toString()
      //   console.log('BookMain computed: Month ' + m)
      //   let a = books.get(month);
    //   console.log('computed books')
    //   console.log(this.$store.getters.getBooks)
      return this.$store.getters.getBooks;
    },

    getM: function() {
      return this.$store.getters.getMonth;
    }
  },

  methods: {
    save: function(book, event) {
        // console.log('bookkkkkkkk')
        //  console.log(book);

      // var m = this.month
      // console.log(m)

      var objForKeys = this.$store.getters.getBooks
      var keys = Object.keys(objForKeys)

      console.log(keys)

      if (event.keyCode === 13) {
        var monthKey = document.getElementById("m").value;
        // console.log("method - save - monthKey" + monthKey);
        var editedUsername = book.userName;
        var editedBookTitle = event.target.value;
        var editeBookThumbnail = book.bookThumbnail;
        var editedBookUrl = book.bookUrl;

        var item = new Object();
        item.month = monthKey
        item.userName = editedUsername;
        item.bookTitle = editedBookTitle;
        item.bookThumbnail = editeBookThumbnail;
        item.bookUrl = editedBookUrl;

        // console.log('itemitemitemitemitemitemitemitemitemitem')
        // console.log(item)

        this.$store.commit("updateBook", item);
      }
    },

    getMo: function() {
      return this.$store.getters.getMonth;
    },

  }

  //   created: function() {
  //     var m = this.$store.getters.getMonth;
  //     //   console.log("BookMain created() " + m);
  //     this.month = m;
  //   },

  //   beforeMounted: function() {
  //     console.log("BookMain beforeMounted");
  //   },

  //   mounted: function() {
  //       console.log('BookMain mounted')
  //   },

  //   beforeUpdate: function() {
  //       console.log('BookMain beforeUpdate')
  //   },

  //   update: function() {
  //       console.log('BookMain update :')

  //   },
};
</script>