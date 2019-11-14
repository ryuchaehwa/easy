<template>
  <v-container>
    <v-date-picker type="month" locale="ko" v-model="month" @click:month="changeMonth"></v-date-picker>
    <br />
    <br />
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
            <input ref="bt" type="text" :value="book.book_title" @blur="titleEdit(book, $event)" />
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
    <v-btn @click="showRefs">showRefs</v-btn>

    <!-- //confirm -->

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <!-- <v-icon v-on="on" @click="btnDelete(book)">mdi-delete</v-icon> -->
        <v-icon v-on="on">mdi-delete</v-icon>
        <!-- <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn> -->
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>데이터 삭제</v-card-title>

        <v-card-text>선택하신 데이터를 삭제하시겠습니까?</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">취소</v-btn>
          <v-btn color="green darken-1" text @click="btnDelete(book)">삭제</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "MainBook",

  created() {
    let params = {
      params: {
        period: this.month
      }
    };

    this.$http
      .get("/api/books", params)

      .then(response => {
        this.books = response.data;
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(this.$refs["bt"]);
  },

  data() {
    return {
      books: [],
      month: new Date().toISOString().substring(0, 7),
      // ok: function() {},
      // no: function() {},
      // visible: false
      dialog: false
    };
  },

  methods: {
    async btnDelete(book) {
      // console.log(book_no);
      console.log(book);

      // this.$confirm('hahahahah vueify confirm test').then(res => {
      //   console.log(res + 'abcdefg')
      // })

      let book_no = book.book_no;

      const res = await this.$confirm(book_no + " 를 삭제하시겠습니까?")
      if(res) {
        this.$http.delete("/api/books", {
          data: {
            book_no: book.book_no
          }
        }).then(res => {
          console.log(res.data);
        }).catch(err => console.log(err))
      }
  
        // this.$confirm(book_no + " 를 삭제하시겠습니까?").then(res => {
        //   console.log(res);
        //   if (res) {
        //     this.$http
        //       .delete("/api/books", {
        //         data: {
        //           book_no: book.book_no
        //         }
        //       })
        //       .then(res => {
        //         console.log(res.data);
        //       })
        //       .catch(err => console.log(err));
        //   }n
        // })
      
        //   this.$http
        //     .delete("/api/books", {
        //       data: {
        //         book_no: book.book_no
        //       }
        //     })
        //     .then(res => {
        //       console.log(res.data);
        //     })
        //     .catch(err => console.log(err));
        // } else {
        //   return;
        // }
        // this.dialog = false;
        this.$router.go("/");
    },

    titleEdit(book, event) {
      // console.log(book);
      // console.log(event);

      let book_no = book.book_no;
      // console.log(book_no);

      // if (event.keyCode === 13) {
        var book_title = event.target.value;
        // console.log(book_title);

        this.$http
          .put("/api/books", {
            book_title,
            book_no
          })
          .then(res => {
            console.log(res.data);
          })
          .catch(function(err) {
            console.log(err);
          });

        //  this.$refs["book_title"].blur()
        // this.$refs.book_title
      // }
    },

    changeMonth: function() {
      let params = {
        params: {
          period: this.month
        }
      };
      // console.log(now);
      this.$http
        .get("/api/books", params)
        .then(response => {
          this.books = response.data;
          console.log(response.data);
        })
        .catch(err => console.log(err));
      console.log(this.$refs["bt"]);
    },

    showRefs: function() {
      console.log("function showRefs:: " + this.$refs.bt + " asdfasdfasdf ");
    }

    //confirm
    // del() {
    //   this.openConfirm()
    //     .then(() => {
    //       // 삭제 로직
    //       this.btnDelete
    //       console.log("삭제됨");
    //       this.visible = false;
    //     })
    //     .catch(() => {
    //       // 취소 했을 경우
    //       console.log("삭제취소");
    //       this.visible = false;
    //     });
    // },

    // openConfirm() {
    //   this.visible = true;

    //   return new Promise(function(resolve, reject) {
    //     console.log(123123123123123123123)
    //     console.log(resolve + reject)
    //   });
    // }
  }
};
</script>