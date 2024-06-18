<script setup>
import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-black flex flex-col min-h-screen">
    <Header />
    <div class="container mx-auto p-4 ">
      <router-view v-slot="{ Component }">
        <transition name="slide"
        mode="out-in"
        enter-active-class="animate-slideInFromBottom"
        leave-active-class="animate-slideOutToTop">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
</style>
