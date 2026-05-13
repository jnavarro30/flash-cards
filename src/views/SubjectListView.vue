<script setup>
import Card from '../components/Card.vue'
</script>

<template>
  <ul class="subject-list">
    <li class="subject-item"><Card /></li>
    <li class="subject-item"><Card /></li>
    <li class="subject-item"><Card /></li>
  </ul>
</template>

<style scoped>
.subject-list {
  height: 100%;
  border: 0.2rem solid purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
}
.subject-item {
  height: 100%;
  width: 90%;
  border: 0.2rem solid red;
  cursor: pointer;
}
</style>
