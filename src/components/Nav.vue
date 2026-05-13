<script setup></script>

<template>
  <nav>
    <button id="back-btn">Back</button>
    <button id="sort-btn">Sort</button>
    <button id="add-btn">Add</button>
    <button id="edit-btn">Edit</button>
    <!-- <button id="cancel-btn"> Cancel</button>
    <button id="delete-btn">Delete</button> -->
  </nav>
</template>

<style scoped>
nav {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
button {
  height: 3rem;
  width: 5rem;
  cursor: pointer;
}
</style>
