<script setup>
import IconGame from '../components/IconGame.vue'
import ListItems from '../components/ListItems.vue'
import { ref } from 'vue';

const products = [
  {id: '001', name: 'books'},
  {id: '002', name: 'pen'},
  {id: '003', name: 'mouse'},
  {id: '004', name: 'keyboard'}
]
const fruits = ['apple', 'papaya', 'banana', 'orange']
const currState = ref('none')
const updateState = (status) => {
  currState.value = status;
}
</script>
 
<template>
<div><IconGame />FavGame</div>
<ListItems :items="products" itemTopic="PRODUCTS" @confirm="updateState" />
current status: {{currState}}
<ListItems :items="fruits" />
</template>
 
<style>

</style>