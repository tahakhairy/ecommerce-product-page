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
const productStore = useProductStore();
const product = await productStore.getData();
const productImages = ref(product.images);

const selectedImage = ref(productImages.value[0]);

const emits = defineEmits(["imageId"]);
emits("imageId", selectedImage.value.id);
const props = defineProps(["nextId"]);
const changeImage = (emittedImage) => {
  selectedImage.value = productImages.value.find(
    (image) => image.id === emittedImage.id
  );
  emits("imageId", selectedImage.value.id);
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
