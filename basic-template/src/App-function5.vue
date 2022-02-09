<script setup>
import { computed, ref } from 'vue';
const base = ref(2)
const height = 2

// const area = computed(() => (1/2) * base.value * height)

const area = computed(() => { return (1/2) * base.value * height})

// const area = ref(0)
// function computeArea(){
//     console.log('working');
//     area.value = (1/2)*base.value*height
// }
</script>
 
<template>
<p>Base: {{base}}</p>

<button @click="base++">add 1 to base</button><br>
<button @click="base--">subtract 1 from base</button><br>

<p>Height: {{height}}</p>

<button @click="computeArea" type="button" class="btn btn-dark">Compute</button>
<p>Area: {{area}}</p>
</template>
 
<style>

</style>