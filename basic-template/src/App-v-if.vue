<script setup>
const dept = 1000
</script>
 
<template>
<p>Deposit Amount: {{dept}}</p>
<p v-if="dept<=100">Interest: {{dept*0.05}}</p>
<p v-else-if="dept<=500">Interest: {{dept*0.1}}</p>
<p v-else="dept>500">Interest: {{dept*0.15}}</p>
</template>
 
<style>

</style>