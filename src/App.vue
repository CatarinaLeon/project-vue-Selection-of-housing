<template>
  <HeaderApp/>
  <MainApp>
    <Container>
      <Home/>
    </Container>
  </MainApp>
  <FooterApp/>
</template>

<script>
  import HeaderApp from './components/shared/HeaderApp.vue';
  import MainApp from './components/shared/MainApp.vue';
  import Container from './components/shared/Container.vue'
  import FooterApp from './components/shared/FooterApp.vue'
  import Home from './views/Home.vue'
  
  export default {
    name: 'App',
    components: {
      HeaderApp,
      MainApp,
      Container,
      Home,
      FooterApp,
    },
  }
</script>

