<template>
  <v-app>
    <v-main>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-">
        <a href="#" class="navbar-brand">LeafletTest</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <!-- <router-link to="/" class="router-link">Main</router-link>
              <router-link to="/main-map" class="router-link">Main Map</router-link> -->
              <span @click="go('/')" class="router-link">Main</span>
              <span @click="go('/main-map')" class="router-link">Main Map</span>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  }),

  methods: {
    go(routerLink) {
      console.log('router link', routerLink)
      this.$router.push(routerLink)
    }
  }
};
</script>

<style>
  .router-link {
    margin-right: 20px;
    color: white;
    text-decoration-color: white;
  }
</style>
