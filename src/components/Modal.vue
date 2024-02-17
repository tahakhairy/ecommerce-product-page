<template>
  <div class="modal">
    <Suspense>
      <ProductImages></ProductImages>
    </Suspense>
  </div>
</template>

<script setup>
import ProductImages from "./TheProduct/components/ProductImages.vue";
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
