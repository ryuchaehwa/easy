<template>
  <div class="detail">
    <h1>{{movie.name}}</h1>
    <img :src="movie.poster" alt class="poster" />
    <section>
      <h2>영화정보</h2>
      <dl class="info">
        <dt>감독</dt>
        <dd>{{movie.director}}</dd>
        <dt>출연</dt>
        <dd>{{movie.actors}}</dd>
        <dt>러닝타임</dt>
        <dd>{{movie.time}}</dd>
      </dl>
    </section>
    <section>
        <h2>줄거리</h2>
        <p class="synopsis" v-html="movie.synopsis"></p>
    </section>
    <router-link :to="{name: 'index', params: {id: movie.id }}" class="link">돌아가기</router-link>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    created: function() {
        var id = this.$route.params.id;
        this.$http.get(`http://localhost:3000/api/movies/${id}`).then((response) => { 
          console.log(response.data)
          this.movie = response.data[0]}).catch((err) => console.log(err))
    },
    data: function() {
        return {
            movie: {}
        }
    }
};
</script>