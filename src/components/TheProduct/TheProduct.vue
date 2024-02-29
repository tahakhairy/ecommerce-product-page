<template>
  <main class="content">
    <Suspense>
      <ProductImages @imageId=""></ProductImages>
    </Suspense>
    <ProductDetails :product="product"></ProductDetails>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ProductImages from "./components/ProductImages.vue";
import ProductDetails from "./components/ProductDetails.vue";
import { useProductStore } from "@/stores/product";

// const response = await fetch("/src/data/product.json");
// const { product } = await response.json();

const store = useProductStore();

const product = await store.getData();
console.log(product);
const productImages = ref(product.images);
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5rem 0;
}
</style>
