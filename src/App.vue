<script setup>
</script>

<template>
  <div class="container mx-auto p-4">
    <nav class="bg-gray-800 p-4 text-white">
      <ul class="flex space-x-4">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
nav ul {
  display: flex;
}
nav ul li {
  list-style: none;
}
</style>
