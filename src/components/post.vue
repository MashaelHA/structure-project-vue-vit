<template>
      <!-- <p> This is a single post </p> -->
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
</template>

<script>
import { data } from '../assets/posts.js';
let auth = false;
export default {
      beforeRouteEnter(to, from, next){
            if(auth){
                  next()
            }else{
                  next('/login')
            }
      },
      computed: {
            post(){
                  const postID = this.$route.params.id;
                  return data.find(
                        x => x.id === Number(postID)
                  )
            }
      },
      mounted() {
            console.log(this.$route)
      }
};
</script>


<style scoped>
</style>
