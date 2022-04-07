<template>
  <div>
      <NavBar/>
      <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    name: 'Layout',
    components: {NavBar}
}
</script>

<style>

</style>