<script setup>
const foods = ['steak', 'hamburger', 'salad', 'tomyum', 'frenchfries']

const students = [
    {stdId: 1, stdName: 'Arm'},
    {stdId: 2, stdName: 'Bew'},
    {stdId: 3, stdName: 'C'}
]

const course = {
  title: 'INT203 Client II',
  credit: 3,
  class: 'lecture & lab'
}

</script>
 
<template>
<h1>Food</h1>
<ul>
    <li v-for="(food, index) in foods" :key="index" >#{{index}} : {{food}}</li>
</ul>

<h1>Student</h1>
<ul>
    <li v-for="student in students" :key="students.stdId">{{student.stdId}} : {{student.stdName}}</li>
</ul>

<ul>
    <li v-for="(propValue, propKey, index) in course" :key="index">
      #{{ index }} - {{ propKey }}:
      {{ propValue }}
    </li>
</ul>
</template>
 
<style>

</style>