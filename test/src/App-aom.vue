<script setup>
import { computed, ref } from "vue";

// template

const randNumbers = ref([]);
// generates random number in range (1-99)
const generateNumber = () => {
  let duplicate = false;
  const rand = Math.floor(Math.random() * 99 + 1);
  duplicate = randNumbers.value.some((randNumber) => randNumber === rand);
  // change code (when push add object instead of only rand)
  duplicate
    ? generateNumber()
    : randNumbers.value.push({ value: rand, isUse: false });

  // add statement set error to false when isError is true
  if (isError.value) isError.value = false;
};

// my code
const stdName = "Siriwat Jaiyungyuen";
const stdId = "63130500120";
const sheets = ref(new Array(9));
const isError = ref(false);

const addToSheet = (index) => {
  if (randNumbers.value[randNumbers.value.length - 1].isUse) {
    isError.value = true;
    return;
  }
  sheets.value[index] = randNumbers.value[randNumbers.value.length - 1].value;
  randNumbers.value[randNumbers.value.length - 1].isUse = true;
};

const isFinished = computed(() => {
  return (
    randNumbers.value.length == 99 || sheets.value.filter((e) => e).length == 9
  );
});

const reset = () => {
  if (isError.value) {
    isError.value = false;
  } else {
    isError.value = false;
    randNumbers.value = [];
    sheets.value = new Array(9);
  }
};
</script>

<template>
  <p class="error-message">{{ stdId + " " + stdName }}</p>
  <div class="top-container">
    <div class="action-button">
      <button @click="generateNumber" :disabled="isFinished">
        Generate New Number
      </button>
      <button @click="reset">Reset</button>
    </div>
    <div class="error-message" v-show="isError">
      <p>
        Sorry, Your number is already exist in the bingo sheet, please generate
        new number again!
      </p>
    </div>
    <div class="grid-container">
      <div class="grid-item" v-for="(value, key) in sheets" :key="key">
        <p v-if="value">{{ value }}</p>
        <button
          v-else
          :disabled="randNumbers.length == 0"
          @click="addToSheet(key)"
        >
          Add Number
        </button>
      </div>
    </div>
    <div class="generate-number">
      <ul>
        <li
          v-for="(number, key) in randNumbers"
          :key="key"
          :class="{ used: number.isUse }"
        >
          Generate Number #{{ key + 1 }} : '{{ number.value }}'
        </li>
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
.used {
  text-decoration: line-through;
  color: red;
}
</style>
