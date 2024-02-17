<template>
  <div class="modal">
    <div class="content">
      <span class="pre"><IconPrevious></IconPrevious></span>
      <IconClose class="close-icn" @click="store.closeModal" />
      <Suspense>
        <ProductImages></ProductImages>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import ProductImages from "./TheProduct/components/ProductImages.vue";
import IconClose from "./icons/IconClose.vue";
import IconPrevious from "./icons/IconPrevious.vue";
import { useModalStore } from "@/stores/modal";

const store = useModalStore();
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
  }
}

.visible {
  visibility: visible;
}
</style>
