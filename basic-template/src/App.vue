<script setup>
import { ref } from 'vue';
const text = ref('TEXT')

const isChecked = ref(true)

const isRed = () =>{
  isChecked.value = !isChecked.value;
}
</script>

<template>
<div>
    <p :style="isChecked ? 'color: red': ''" >{{text}}</p>
    <p :class="isChecked ? 'text-danger': ''">{{text}}</p>
    <p :class="{'text-danger':isChecked}">{{text}}</p>
  </div>
  <button @click="isRed">Red It</button>
</template>

<style>
.active {
  text-decoration: underline;
}
.text-danger {
  color: red;
}
.text-center {
  text-align: center;
}
</style>