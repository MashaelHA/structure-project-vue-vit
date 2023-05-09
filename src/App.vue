<template>
  <router-view/>
  <router-link to="/">Home</router-link>
  <br>
  <router-link to="/example">Example</router-link>
  <br>
  <router-link to="/posts">Postes</router-link>
  <!-- <h1> hi app </h1> -->
  <!-- <example></example> -->
</template>

<script>
// import example from "./components/example.vue";
import { RouterView, RouterLink } from 'vue-router';
export default {
  name: "App",
  components: {
    // example
  },
  data() {
    return {

    };
  },
  created() {

  },
  methods: {

  },
  computed: {

  },
};
</script>
<style scoped>

</style>
