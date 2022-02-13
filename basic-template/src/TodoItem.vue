<script setup>
const props = defineProps({
  todo: Object
})
</script>

<template>
  <li>{{ item.name }}</li>
</template>