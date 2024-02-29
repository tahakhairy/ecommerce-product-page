<template>
  <div class="modal">
    <div class="content">
      <span class="pre"><IconPrevious /></span>
      <span class="next"><IconNext /></span>
      <IconClose class="close-icn" @click="modalStore.closeModal" />
      <Suspense>
        <ProductImages @current-image="imageId"></ProductImages>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductImages from "./TheProduct/components/ProductImages.vue";
import IconClose from "./icons/IconClose.vue";
import IconPrevious from "./icons/IconPrevious.vue";
import IconNext from "./icons/IconNext.vue";
import { useModalStore } from "@/stores/modal";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const productStore = useProductStore();

const { product } = storeToRefs(productStore);
const currentImage = ref(null);
const images = ref(product.value.images);

const imageId = (value) => {
  currentImage.value = value;
  console.log(currentImage.value);
};
// console.log(images.value);
// console.log(product);
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  .content {
    display: flex;
    flex-direction: column;
    position: relative;

    .close-icn {
      margin-bottom: 0.5rem;
      place-self: end;
      cursor: pointer;
    }

    .pre {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      background-color: white;
      border-radius: 100%;
      position: absolute;
      top: 205px;
      left: -21px;
      cursor: pointer;
    }

    .next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      background-color: white;
      border-radius: 100%;
      position: absolute;
      top: 205px;
      right: -21px;
      cursor: pointer;
    }
  }
}
</style>
