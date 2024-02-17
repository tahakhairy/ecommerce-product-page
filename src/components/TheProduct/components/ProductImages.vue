<template>
  <div class="images">
    <img
      @click="modalStore.openModal"
      class="original"
      :src="selectedImage.original"
      :alt="`image ${selectedImage.id}`"
    />

    <ProductThumbnail :images="productImages" @send-image="changeImage" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductThumbnail from "./ProductThumbnail.vue";
import { useModalStore } from "@/stores/modal";
import { useProductStore } from "@/stores/product";

const modalStore = useModalStore();
const response = await fetch("/src/data/product.json");

const { product } = await response.json();

const productImages = ref(product.images);

const selectedImage = ref(productImages.value[0]);

const changeImage = (emittedImage) => {
  selectedImage.value = productImages.value.find(
    (image) => image.id === emittedImage.id
  );
};
</script>

<style lang="scss" scoped>
.images {
  width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;

  .original {
    width: 100%;
    grid-column: 1 / span 4;
    border-radius: 1rem;
    cursor: pointer;
  }
}
</style>
