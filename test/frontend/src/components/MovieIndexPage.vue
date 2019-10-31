<template>
  <div class="wrap">
    <h1>5월 마지막 주 영화 예매 순위</h1>
    <ul class="movies">
      <li class="item" v-for="movie in movies" :key="movie.id">
        <span class="rank">{{movie.id}}</span>
        <router-link :to="{name:'show', params: {id: movie.id}}">
          <img :src="movie.poster" alt="movie poster" class="poster" />
        </router-link>
        <div class="detail">
            <strong class="tit">{{movie.name}}</strong>
            <span class="rate">예매율<span class="num">{{movie.rate}}</span></span> 
            <router-link :to="{name: 'show', params: {id: movie.id}}" class="link">
                자세히보기
            </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    created() {
        this.$http.get('http://localhost:3000/api/movies').then((response) => {
          console.log(response.data)
            this.movies = response.data
        }).catch((err) => console.log(err))
    },
    data() {
        return {
            movies: []
        }
    }
};
</script>