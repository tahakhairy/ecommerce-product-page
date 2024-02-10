<template>
  <div class="images">
    <img
      class="original"
      :src="images[0].original"
      :alt="`image ${images.indexOf(images[0])}`"
    />

    <ProductThumbnail :images="images" />
    <!-- <img
      class="thumbnail"
      src="/src/assets/images/image-product-2-thumbnail.jpg"
      alt=""
    />
    <img
      class="thumbnail"
      src="/src/assets/images/image-product-3-thumbnail.jpg"
      alt=""
    />
    <img
      class="thumbnail"
      src="/src/assets/images/image-product-4-thumbnail.jpg"
      alt=""
    /> -->
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import ProductThumbnail from "./ProductThumbnail.vue";
const props = defineProps(["images"]);

const images = props.images;
console.log(images);
</script>

<style lang="scss" scoped>
.images {
  width: 370px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  // grid-template-rows: 3fr 1fr;

  .original {
    width: 100%;
    grid-column: 1 / span 4;
    border-radius: 1rem;
  }
}
</style>
