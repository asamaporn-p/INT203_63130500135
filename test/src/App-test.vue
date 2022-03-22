<script setup>
import { ref } from 'vue'
const myID = { id:63130500135,
firstName: 'Asamaporn',
surName: 'Pladsri'
}

const randNumbers = ref([]);

const grid = ref([
  [],[],[],
  [],[],[],
  [],[],[]
  ]);


// generates random number in range (1-99)
const generateNumber = () => {
  let duplicate = false
  const rand = Math.floor(Math.random() * 99 + 1)
  duplicate = randNumbers.value.some((randNumber) => randNumber === rand)
  duplicate ? generateNumber() : randNumbers.value.push(rand)
}

const resetArr = () => {
  randNumbers.value.splice(0, randNumbers.value.length)
}

const showNum = () => {
  document.getElementById('addNum').textContent = randNumbers.value.length;
}

</script>

<template>
<h1>{{myID}}</h1>
  <div class="top-container">
    <div class="action-button">
      <!-- edit -->
      <button @click="generateNumber">Generate New Number</button>
      <button @click="resetArr">Reset</button>
    </div>
    <div class="error-message">
      <!-- show error message when a user adding the same number in the bingo sheet -->
    </div>
    <div class="grid-container">
      <!-- edit -->
      <div class="grid-item" v-for="gridCol in grid">
        <!-- show bingo 3 rows x 3 cols here -->
        <button disabled v-if="!randNumbers.length">Add Number</button>
        <button v-else @click="showNum" id="addNum">Add Number</button>
      </div>
    </div>
    <div class="generate-number">
      <!-- show the list of generated number here -->
      <ul>
        <li v-for="num,index in randNumbers" :key="index">Generate Number #{{index}} : '{{num}}'</li>
      </ul>
    </div>
  </div>

  
</template>

<style scoped>
.top-container {
  width: 330px;
}
.action-button {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 80px 80px 80px;
  column-gap: 5px;
  row-gap: 5px;
  background-color: green;
  padding: 10px;
}
.grid-item {
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.generate-number {
  font-size: 20px;
}
.error-message {
  height: 40px;
  color: red;
}
</style>
