<script setup>
const testMe1 = () => console.log('test me 1')
const testMe2 = (e) => console.log('test me 2', e)
const testMe3 = (e) => console.log('test me 3', e)
const testMe4 = (a) => console.log('test me 4', a)
const testMe5 = (e, n) => console.log('test me 5', e, n)
const testMe6 = (e, n) => console.log('test me 6', e, n)
</script>

<template>  
<div>
      <BaseButton2 button-name="Like Me1" @likeMe="testMe1" />
      <BaseButton2 button-name="Like Me2" @likeMe="testMe2" />
      <BaseButton2 button-name="Like Me3" @likeMe="testMe3()" />
      <BaseButton2 button-name="Like Me4" @likeMe="testMe4($event)" />
      <BaseButton2 button-name="Like Me5" @likeMe="testMe5($event, true)" />
      <BaseButton2 button-name="Like Me6" @likeMe="testMe6(404, $event)" />
    </div>
</template>

<style>

</style>