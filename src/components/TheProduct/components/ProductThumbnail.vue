<template>
  <div class="thumbnail" v-for="(image, index) in props.images">
    <img
      :src="image.thumbnail"
      :key="image"
      :alt="`image ${index}`"
      @click="$emit('sendImage', image)"
    />
  </div>
</template>

<script setup>
const props = defineProps(["images"]);
const emit = defineEmits(["sendImage"]);
</script>

<style lang="scss" scoped>
.thumbnail {
  border-radius: 0.7rem;
  height: fit-content;
  overflow: hidden;
  display: flex;
  cursor: pointer;

  img {
    width: 100%;

    &.active {
      opacity: 0.3;
    }
  }
}

.active {
  outline: 1px solid var(--color-primary);
}
</style>
