<script setup>

</script>

<template>

  <div>
    <div>
      <router-link :to="{ name: 'Profile' }">My Profile</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<style scoped>
a{
  color: aquamarine;
}
.router-link-active{
  color: blueviolet;
}
</style>