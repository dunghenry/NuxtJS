<template>
  <div>
    <h1>Index Client Page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$notify({
        group: "foo",
        title: "Important message",
        text: "Hello user! This is a notification!",
      });
      console.log(this.$msg("Xin chao"))
    }, 2000);
  },
};
</script>

<style>
</style>