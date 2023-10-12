<template>
  <main class="section">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    name: 'AppSection'
  }
</script>

<style scoped>
.section{
  padding: 60px 0 100px 0;
  min-height: 88vh;
}
</style>