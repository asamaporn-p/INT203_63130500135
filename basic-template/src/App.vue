<script setup>
const headingStyle = "color: blue"
const paraStyle = "text-decoration: underline"
const imagePath = "../public/images/cheezelooker.jpg"
</script>
 
<template>
<h1 v-bind:style = "headingStyle">INT203 Web Client</h1>
<p :style="paraStyle">Asamaporn</p>
<img src="./assets/logo.png">
<img :src="imagePath" width="275" height="180">
</template>
 
<style>

</style>