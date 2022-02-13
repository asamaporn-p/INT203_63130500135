<script setup>
import { ref } from 'vue';
import TodoItem from './ToDoItem.vue'

const msg = ref('i wuv u <3');
const isRed = ref(true);
const color = ref('green');
const show = ref(true);
const list = ref([1,2,3])
const text = ref('Edit me')
const checked = ref(true)
const checkName = ref(['Jajah'])
const choose = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])
const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' }
])


const reverseMsg = () => {
    msg.value = msg.value.split('').reverse().join('');
}
const notify = () => {
    alert('dont watch youtube');
}

const toggleRed = () => {
    isRed.value = !isRed.value;
}

const toggleColor = () => {
    color.value = (color.value === 'green') ? 'blue' : 'green'
}
</script>
 

<template>
<!-- <h1>{{msg}}</h1>
<button @click="reverseMsg">reverse</button>
<button @click="msg+= '!'">add !</button><br>
<a href="https://www.youtube.com/" @click.prevent="notify">go to youtube</a> -->

<!-- <p :title="msg">hold on on me u'll see my msg to u ;-;</p>
<p :class="{red: isRed}" v-on:click="toggleRed">red or black</p>
<p :style="{color}" v-on:click="toggleColor">green or blue</p> -->

<!-- <button v-on:click="show=!show">show list</button>
<button v-on:click="list.push(list.length+1)">add number</button>
<button v-on:click="list.pop()">remove num</button>
<button v-on:click="list.reverse()">reverse list</button>
<ul v-if="show && list.length">
    <li v-for="num in list">{{num}}</li>
</ul>
<p v-else-if="list.length">list is not empty but hidden</p>
<p v-else>list is empty</p> -->

<!-- <input type="text" v-model="text"/> {{text}} <br>

<input type="checkbox" id="checkboxid" v-model="checked" />
<label for="checkboxid">Checked: {{checked}}</label><br>

<input type="checkbox" id="jajah" value="Jajah" v-model="checkName" />
<label for="jajah">Jajah</label>
<input type="checkbox" id="arm" value="Arm" v-model="checkName" />
<label for="arm">Arm</label>
<input type="checkbox" id="gvs" value="Gvs" v-model="checkName" />
<label for="gvs">Gvs</label>
<p>name: <pre>{{checkName}}</pre></p>

<input type="radio" id="one" value="One" v-model="choose" />
<label for="one">One</label>
<input type="radio" id="two" value="Two" v-model="choose" />
<label for="two">Two</label>
<p>choose: {{choose}}</p>

<select v-model="selected">
<option disabled value="">Please select one</option>
<option>A</option>
<option>B</option>
<option>C</option>
</select>
<p>selected: {{selected}}</p>

<select v-model="multiSelected" multiple style="width: 100%;">
<option>A</option>
<option>B</option>
<option>C</option>
</select>
<p>selected: {{multiSelected}}</p> -->
<ol>
<TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
</ol>

</template>
 

<style>
.red{
    color: red;
}
</style>