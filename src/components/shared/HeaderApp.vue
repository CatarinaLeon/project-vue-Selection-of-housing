<template>
  <header class="header">
    <div class="header-container">
      <a href="/" class="header-link">
        <svg width="26" height="28" class="header-link-icon">
          <use href="../../assets/images/sprite.svg#logo"/>
        </svg>
        Go<span>Home</span>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderApp'
  }
</script>

<style scoped>
.header{
  padding: 16px 0;
  background-color: #0F1D2D;
}
.header-container{
  width: 1110px;
  padding: 0 15px;
  margin: 0 auto;
}
.header-link{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;

}
.header-link-icon{
  margin-right: 10px;
}
.header-link span{
  color: #FF662D;
  font-weight: 800;
}
</style>