<template>
  <div id="app">
    <Nav />
    <Search />
    <Display />
    <SignIn name="hello-world">
      hello, world!
    </SignIn>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search.vue";
import Display from "@/components/Display.vue";
import SignIn from "@/components/SignIn.vue";

export default {
  name: "home",
  components: {
    Nav,
    Search,
    Display,
    SignIn
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

//TODO: create sign in modal
