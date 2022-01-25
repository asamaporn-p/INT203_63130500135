<script setup>
const dataSet = [
    {
        name: 'salary',
        amount: 10000
    },
    {
        name: 'rent',
        amount: -2500
    },{
        name: 'parking fee',
        amount: 0
    },{
        name: 'car fuel',
        amount: -600
    },{
        name: 'commission',
        amount: 5500
    }
]
</script>
 
<template>
<h1 style="text-align: center;">MY ACCOUNT</h1>
<ul>
    <li v-for="data in dataSet">
    <p><b>Name:</b> {{data.name}}</p>
    <p v-if="data.amount>0" style="color: green"><b>Amount:</b> {{data.amount}}</p>
    <p v-if="data.amount<0" style="color: red"><b>Amount:</b> {{data.amount}}</p>
    <hr>
    </li>
</ul>
<p><b>Net Total</b> : hihi</p>
</template>

<style>

</style>