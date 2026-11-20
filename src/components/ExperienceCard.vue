<template>
  <article class="lg:p-5">
    <h3 class="text-primary-dark text-lg sm:text-xl md:text-2xl mb-4">
      {{ title }}
    </h3>
    <p class="text-primary/75 text-sm sm:text-base md:text-lg">
      {{ description }}
    </p>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>