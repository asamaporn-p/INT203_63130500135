<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';
onMounted(() => {
  // num.value = 5
  alert(`on mounted: ${num.value}`)
})
onBeforeMount(()=> alert(`on before mount: ${num.value}`))
onBeforeUpdate(() => {
  num.value = num.value > 10?0:num.value
  alert(`on before update: ${num.value}`)
})
onUpdated(() => alert(`on updated: ${num.value}`))
const num = ref(1);
alert(`on created: ${num.value}`)
</script>
 
<template>
<div>num: {{num}}</div>
<button @click="num=num+1">+</button>
</template>
 
<style>

</style>