<script setup>
defineProps({
    items: {
        type: [Array, Object],
        require: true
    },
    itemTopic: {
        type: String,
        default: 'Items'
    }
})

defineEmits(['confirm'])
</script>
 
<template>
<div>
    <h1>{{itemTopic}}</h1>
    <ul>
        <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
</div>
<div>
    <button @click="$emit('confirm', 'USER_CONFIRM')">Confirm</button>
</div>
</template>
 
<style>

</style>