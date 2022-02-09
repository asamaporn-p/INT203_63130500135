<script setup>

import { ref } from 'vue'

console.clear()

const counter = ref(1)
const isEmpty = ref(false)
const items = ref(['pen', 'book', 'mouse'])
const item1 = {
    prodId: 0,
    prodName: 'comp'
}
const product = ref({
    prodId: 1,
    prodName: 'notebook'
})

console.log(items.value[0]);
console.log(product.value);
console.log(product.value.prodName);

// setTimeout(() => console.log(++counter), 3000)
// setInterval(() => console.log(++counter.value), 1000)

</script>

<template>

  <p>Counter: {{ counter }}</p>
  <p>Empty : {{ isEmpty }}</p>
  <p>items: {{items}}</p>
  <p>items[1]: {{items[1]}}</p>
  <p>product: {{product}}</p>
  <p>prodName: {{product.prodName}}</p>
<hr>
  <p>item1: {{item1}}</p>
  <p>item1Name: {{item1.prodName}}</p>

</template>

<style>

</style>