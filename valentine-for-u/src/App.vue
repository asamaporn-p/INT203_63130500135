<script setup>
import {ref} from 'vue'

const nickName = ref('')
const selected = ref('')

function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
</script>
 
<template>
<div class="flex items-center justify-center h-screen  bg-gradient-to-r from-pink-100 to-blue-100" id="background">
    <div
      class="bg-white rounded-2xl border shadow-xl m-20 p-14 max-w-lg min-w-[30rem] min-h-[40rem]"
    >

<h1 class="text-red-300 text-4xl text-center">Hello :D</h1>
<br>
<p>Please enter your nickname:</p> 
<input type="text" v-model="nickName" placeholder="your nickname"/><br>
<br>
<br>
<br>

<p>Select one pls ;-;</p>

<select v-model="selected">
<option disabled value="">Please select one</option>
<option>so much</option>
<option>very much</option>
<option>to the moon and never back</option>
</select>
<p>I love {{nickName.toUpperCase()}} {{selected}}</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div class="popup" @click="popup">click me!
<span class="popuptext" id="myPopup">You are the reason why every night I have beautiful dreams and wake up with a big smile. Your love makes me feel more alive than ever. Valentines Day or not, I will always love you.</span>
</div>
</div>
</div>
</template>
 
<style>
/* Popup container */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* The actual popup (appears on top) */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>