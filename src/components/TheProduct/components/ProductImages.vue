<template>
  <div class="images">
    <img
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

const response = await fetch("/src/data/product.json");

const { product } = await response.json();

const productImages = ref(product.images);

// const props = defineProps(["images"]);
// const images = props.images;

const selectedImage = ref(productImages.value[0]);

const changeImage = (emittedImage) => {
  selectedImage.value = productImages.value.find(
    (image) => image.id === emittedImage.id
  );
};
</script>

<style lang="scss" scoped>
.images {
  width: 370px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;

  .original {
    width: 100%;
    grid-column: 1 / span 4;
    border-radius: 1rem;
  }
}
</style>
