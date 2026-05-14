<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="app">
      <Header />
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/flashcards">Flashcards</router-link> -->
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
.app {
  height: 100%;
  width: 100%;
  border: 2px solid black;
}
</style>
