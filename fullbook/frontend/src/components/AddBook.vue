<template>
  <v-container>
    asdfasdfasdf 
    <v-form v-model="valid">
        <v-text-field v-model="user_name" label="User Id" required></v-text-field>
        <v-text-field v-model="bookTitle" label="Book Title" required></v-text-field>
        <v-text-field v-model="bookUrl" label="Book Url" ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "AddBook",
  data() {
    return {
      valid: false,
      userId: "",
      userName: "",
      bookTitle: "",
      bookThumbnail: "",
      bookUrl: ""
    };
  }
};
</script>