<script setup>
import Nav from './components/Nav.vue'
import SubjectListView from './views/SubjectListView.vue'
</script>

<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <body>
      <!-- <SubjectListView /> -->
    <router-link to="/">Home</router-link>
    <router-link to="/flashcards">Flashcards</router-link>
    <router-view />
    </body>
  </div>
</template>

<style scoped>
header {
  background-color: blue;
  border: 0.2rem solid black;
  width: 100%;
  height: 5rem;
  
}
</style>
