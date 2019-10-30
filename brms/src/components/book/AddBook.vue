<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{on}">
        <v-btn color="green darken-4" dark v-on="on">ADD NEW BOOK</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add New Book</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            {{date}}
            <v-row>
              <span class="headline">User Info</span>
            </v-row>
            <v-row>
              <v-text-field required label="User Name"></v-text-field>
            </v-row>
            <v-row>
              <span class="headline">Book Info</span>
            </v-row>
            <v-row>
              <v-text-field required label="Book Title"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field required label="Book Writer"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field required label="Book Publisher"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field required label="Book Price"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field required label="Book Link"></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer>
                <v-btn @click="dialog = false">Close</v-btn>
                <v-btn @click="dialog = false">Save</v-btn>
            </v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddBook",
  props: {},
  components: {},
  data() {
    return {
      dialog: false,
      date: new Date()
    };
  },
  methods: {
    add: function() {}
  }
};
</script>