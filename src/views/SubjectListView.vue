<script setup></script>

<template>
  <ul class="subject-list">
    <li class="subject-item">Subject 1</li>
    <li class="subject-item">Subject 2</li>
    <li class="subject-item">Subject 3</li>
  </ul>
</template>

<style scoped>
.subject-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.subject-item {
  height: 3rem;
  width: 5rem;
  cursor: pointer;
}
</style>
