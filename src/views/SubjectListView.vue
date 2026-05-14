<script setup>
import Card from '../components/Card.vue'
</script>

<template>
  <ul class="subject-list">
    <Card />
  </ul>
</template>

<style scoped>
.subject-list {
  /* height: 100%; */
  /* border: 0.2rem solid purple; */
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
