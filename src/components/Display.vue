<template>
  <div class="container">
    <GoogleMap />
    <Grid />
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  components: {
    Grid,
    GoogleMap
  }
};
</script>

<style scoped>
.container {
  background-color: #f5f9fa;
  display: grid;
  grid-template-columns: 35% 65%;
  padding-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 25px;
}
</style>
