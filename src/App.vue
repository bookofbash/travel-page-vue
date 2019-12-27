<template>
  <div id="app">
    <Nav />
    <Search />
    <Display />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search.vue";
import Display from "@/components/Display.vue";

export default {
  name: "home",
  components: {
    Nav,
    Search,
    Display
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080809;
}
</style>

//TODO: Add lazy-loading
