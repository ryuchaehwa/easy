<template>
  <v-container>
    <v-date-picker
      :type="type"
      v-model="currentMonth"
      :locale="lang.ko"
      :landscape="landscape"
      @click:month="queryMonth(currentMonth)"
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
      currentMonth: new Date().toISOString().substring(0, 7),
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
    queryMonth: function(currentMonth) {
      //   let queryMonth = currentMonth.split("-").join("");
      this.$store.commit("setMonthQuery", currentMonth);
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