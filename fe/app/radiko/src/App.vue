<template>
  <div id="app">
    
   <router-view></router-view>

  </div>
</template>

<script>
//import Radiko from './components/Radiko.vue'  //ここを有効化すると13:5 error The "Radiko" component has been registered but not used  vue/no-unused-componentsエラーがでる

                                                                                                               

export default {
  name: 'app',
  components: {
    //Radiko  //ここを有効化するとエラーがでる
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
