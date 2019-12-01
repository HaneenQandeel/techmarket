<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <about msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import About from './js/about-us/about.vue';
import Header from './components/header.vue';

export default {
  name: 'app',
  components: {
    about,
    header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
