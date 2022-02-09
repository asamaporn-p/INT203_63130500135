<!-- <script setup>

import { computed, ref } from 'vue';
const notes = ref([]);
const newNoteText = ref("");
const filterText = ref("");

const addNote = () => {
    notes.value.push(newNoteText.value);
}

// const filterNote = (filterText) => 
//     notes.value.filter((note) => 
//     note.toLowerCase().includes(filterText.toLowerCase())
//     );

const filterNote = computed(()=> {
    notes.value.filter((note)=>
    (note.toLowerCase().includes(filterText.value.toLowerCase)))
    });

</script> -->

<script setup>

import { ref, computed } from 'vue'
const newNote = ref('')
const notes = ref([])
const keywords = ref('')

const filterNotes = computed(() =>
  notes.value.filter((note) =>
    note.toLowerCase().includes(keywords.value.toLowerCase())
  )
)

const addNote = () => {
  notes.value.push(newNote.value)
  console.log(notes.value)
}
const colorMe = (myNote) => {
  console.log(myNote)
}
</script>
 
<!-- <template>

 <form @submit.prevent="filterNote(filterText)">
    <label for="filter">Filter: </label>
    <input type="text" id="filter" v-model="filterText">
    <input type="submit" value="filter" class="btn btn-warning">
    <button @click="filterNote(filterText)" class="btn btn-warning">filter</button>
</form>

<ul>
    <li v-if="!filterNote(filterText).length">Not Found</li>
    <li v-else v-for="note in filterNote(filterText)">
    {{note}}
    </li>
</ul>

<form @submit.prevent="addNote">
    <label for="note">New Note: </label> &nbsp;
    <input type="text" id="newNote" placeholder="Enter new note" v-model="newNoteText"> &nbsp;
    <input type="submit" value="Add Note" class="btn btn-warning">
    <button @click="addNote" class="btn btn-warning">Add Note</button>
</form>

</template> -->

<template>

  <div>
    <div v-show="notes.length > 0">
      Filter Notes:
      <input type="text" v-model="keywords" />
      <ul>
        <li v-for="note in filterNotes">
          {{ note }}
          <button @click="colorMe(note)">Color Me</button>
        </li>
      </ul>
    </div>

    New note:
    <input type="text" v-model="newNote" />
    <button @click="addNote">Add Note</button>
  </div>

</template>
 
<style>

</style>