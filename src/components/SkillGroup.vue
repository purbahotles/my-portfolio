<template>
  <div class="p-5">
    <h3 class="text-primary-dark text-xl font-semibold mb-2">{{ title }}</h3>
    <hr class="border-primary-dark mb-3" />

    <ul class="text-primary/75 space-y-1">
      <li v-for="item in items" :key="item.name">
        <span>{{ item.name }}</span>

        <ul
          v-if="item.children?.length"
          class="pl-4 mt-1 space-y-1 text-sm border-l border-primary/30"
        >
          <li v-for="child in item.children" :key="child">{{ child }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>