<template>
  <div>
      <MenuSeries></MenuSeries>
      <router-view></router-view>
  </div>
</template>

<script>
import MenuSeries from './components/MenuSeries'
export default {
  name: 'App',
  components: {
    MenuSeries
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

}
</style>
