<template>
  <h1>Detail User Page</h1>
</template>
<script>
export default {
  validate(context){
    // console.log(Object.keys(context));
    if(!Number(context.params.id)){
      return false;
    }
    return true;
  }
}
</script>

<style>

</style>