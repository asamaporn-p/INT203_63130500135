<script setup>
import {ref, computed} from 'vue'
defineEmits(['createNote', 'updateNote'])
defineProps({
  currentNote: {
  type: Object,
  default: {}
  }
})

// const newNote = ref('')

const newNote = computed(()=> {
  return{
    id: props.currentNote.id,
    noteDetail: props.currentNote.noteDetail
  }
})


</script>
 
<template>
  <div>
    <h2>Create Note</h2>
    Note Detail: <input type="text" v-model="newNote" />
    <button v-if="newNote.id > 0" @click="$emit('updateNote', newNote)">Save</button>
    <button v-else @click="$emit('createNote', newNote.noteDetail)">Create</button>
  </div>
</template>
 
<style>

</style>