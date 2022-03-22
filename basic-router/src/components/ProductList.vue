<script setup>
import {ref} from 'vue'
const products = ref([
    {
        productId: 1001,
        productName: 'Iphone'
    },
    {
        productId: 5112,
        productName: 'Ipad'
    },
    {
        productId: 9070,
        productName: 'Airpod'
    }
])
</script>
 
<template>
<ul>
    <li v-for="product in products" :key="product.productId">
    <router-link
          :to="{
            name: 'ProductItem',
            params: { productId: product.productId }
          }">
    Product Name: {{ product.productName }}
    </router-link>
    </li>
</ul>
</template>
 
<style>

</style>