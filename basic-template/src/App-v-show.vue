<script setup>
const count = 1
const username = '' //false
</script>
 
<template>
    <p v-show="count">Counter: {{count}}</p>
    <p v-show="username">{{ username }}</p>
    <p style="color: red;" v-show="!username">please enter your username!</p>
</template>
 
<style>

</style>