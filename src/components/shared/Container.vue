<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ContainerPaper',
  }
</script>

<style scoped>
.container{
  max-width: 1110px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>