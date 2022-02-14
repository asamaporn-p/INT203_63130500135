<script setup>
import { ref } from 'vue';
const students = [{
  id:1, name: 'a'
},{
  id:2, name: 'b'
}]
const keyword = ref('')

const filterName = () => {
  if(keyword.value){

  }
}
</script>
 
<template>
<ul>
  <li v-for="(v,i) in students"></li>
</ul>
</template>
 
<style>

</style>