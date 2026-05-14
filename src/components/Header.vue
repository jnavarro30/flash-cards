<script setup></script>

<template>
  <header>
    <!-- <button id="back-btn">Back</button> -->
    <button id="sort-btn">Sort</button>
    <button id="add-btn">Add</button>
    <button id="edit-btn">Edit</button>
    <!-- <button id="cancel-btn"> Cancel</button>
    <button id="delete-btn">Delete</button> -->
  </header>
</template>

<style scoped>
header {
  /* border: 0.5rem solid blue; */
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
}
button {
  height: 3rem;
  width: 5rem;
  cursor: pointer;
}
</style>
