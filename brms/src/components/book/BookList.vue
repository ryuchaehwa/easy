<template>
  <v-container>
    <v-row>
      <AddBook />
    </v-row>
    <v-row>
      <v-simple-table>
        <thead>
          <tr>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data1</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
import AddBook from "./AddBook";

export default {
  name: "BookList",
  components: { AddBook },
  data() {
    return {};
  }
};
</script>