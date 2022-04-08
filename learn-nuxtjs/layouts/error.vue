<template>
  <div class="container">
    <div class="box-msg" v-if="error.statusCode === 404">
      <h1>{{ error.statusCode }}</h1>
      <h2>Page not found</h2>
      <br>
      <h3>{{ error.message }}</h3>
      <br>
      <NuxtLink to="/" tag="button">Home page</NuxtLink>
    </div>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ["error", "msg"],
  layout: 'errorlayout'
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
h1 {
  font-weight: bold;
  font-size: 70px;
}
.box-msg {
  margin: 50px 0;
  text-align: center;
}
button{
    cursor: pointer;
}
</style>