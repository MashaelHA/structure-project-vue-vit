<template>
  <div>
    <h2>Recent posts:</h2>
    <router-link :to="`/posts/${post.id}`" v-for="post in posts" :key="post.id">
      {{ post.title }} <br> 
    </router-link>
    <br><br><br>
    <router-view />
  </div>
</template>

<!-- <template>
      <h2> Recent posts: </h2>
      <router-link :to="'/posts/${post.id}'" v-for="post in posts" :key="post.id">
         {{ post.title }} <br>
      </router-link>
      <br><br><br>
      <router-view/>
</template> -->

<script>
import { data } from '../assets/posts.js'
export default {
  computed: {
    posts(){
      return data;
    }
  },
  mounted() {
    console.log(this.posts)
  }
};
</script>


<style scoped>
a { 
  margin: 2px;
}
</style>
