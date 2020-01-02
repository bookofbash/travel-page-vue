<template>
  <div id="app">
    <Nav />
    <Search />
    <Display />
    <SignIn name="hello-world">
      hello, world!
    </SignIn>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search.vue";
import Display from "@/components/Display.vue";
import SignIn from "@/components/SignIn.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Nav,
    Search,
    Display,
    SignIn,
    Footer
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
