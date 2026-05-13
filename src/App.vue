<script setup>
import Nav from './components/Nav.vue'
import SubjectListView from './views/SubjectListView.vue'
</script>

<template>
  <div class="app">
    <header>
      <Nav />
    </header>
      <!-- <SubjectListView /> -->
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/flashcards">Flashcards</router-link> -->
    <router-view />
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  width: 100%;
}
header {
  background-color: blue;
  border: 0.2rem solid red;
  width: 100%;
  height: 20%;
}
</style>
