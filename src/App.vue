<template>
  <HeaderComponent />
  <!-- <h1>Final draw</h1> -->
  <router-view/>
  <FooterComponent />
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'
  export default {
    el:"#app",
    components:{
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
