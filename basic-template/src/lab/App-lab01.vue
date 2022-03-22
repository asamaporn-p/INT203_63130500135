<script setup>

const dataSet = [
    {
        name: 'salary',
        amount: 10000
    },
    {
        name: 'rent',
        amount: -2500},
    {
        name: 'parking fee',
        amount: 0
    },
    {
        name: 'car fuel',
        amount: -600
    },
    {
        name: 'commission',
        amount: 5500
    }
]

function totalAmount(){
    dataSet.reduce((total, data)=>total+data.amount),0;
}

</script>
 
<template>

<h1 style="text-align: center;">MY ACCOUNT</h1>

<ul>

    <li v-for="data in dataSet">

    <p v-if="data.amount>0" style="color: green">
    <p><b>Name:</b> {{data.name}}</p>
    <b>Amount:</b> {{data.amount}}</p>

    <p v-if="data.amount<0" style="color: red">
    <p><b>Name:</b> {{data.name}}</p>
    <b>Amount:</b> {{data.amount}}</p>

    </li>
    

</ul>

<p><b>Net Total</b> : {{ dataSet.reduce((total, data) => total + data.amount, 0)}}</p>

</template>

<style>

</style>