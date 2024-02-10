<template>
  <div class="container">
    <TheNavbar />

    <Suspense>
      <TheProduct></TheProduct>
    </Suspense>
  </div>
</template>

<script setup>
import TheNavbar from "./components/TheNavbar/TheNavbar.vue";
import TheProduct from "./components/TheProduct/TheProduct.vue";
</script>

<style lang="scss" scoped>
@media (max-width: 900px) {
  .container {
    max-width: 100%;
    margin: 0;
  }
}
</style>
