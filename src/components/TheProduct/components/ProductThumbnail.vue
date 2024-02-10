<template>
  <img
    class="thumbnail"
    v-for="(image, index) in props.images"
    :src="image.thumbnail"
    :key="image"
    :alt="`image ${index}`"
  />
</template>

<script setup>
const props = defineProps(["images"]);
</script>

<style lang="scss" scoped>
.thumbnail {
  width: 100%;
  border-radius: 0.7rem;
}
</style>
