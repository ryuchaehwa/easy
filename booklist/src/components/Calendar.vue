<template>
  <v-container>
    <v-date-picker
      :type="type"
      v-model="month"
      :locale="lang.ko"
      :landscape="landscape"
      @click:month="queryMonth(month)"
    ></v-date-picker>
  </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: "Calendar",
  props: [],
  components: {},
  data() {
    return {
      type: "month",
      month: new Date().toISOString().substring(0, 7),
      lang: {
        ko: "ko"
      },
      landscape: false
    };
  },
  computed: {
    // getMonth: function() {
    //   var m = this.$store.getters.getMonth;
    //   console.log(m)
    //   return this.$store.getters.getMonth;
    //   }
  },

  methods: {
    queryMonth: function(month) {
      //   let queryMonth = currentMonth.split("-").join("");
      this.$store.commit("setMonthQuery", month);
    }
  },

//   beforeCreate() {
//     //   console.log('before created')
//   },

//   created: function() {
//     //   console.log('created')
//     var month = this.$store.getters.getMonth;
//     console.log("calendar: created() - " + month);
//   }
};
</script>