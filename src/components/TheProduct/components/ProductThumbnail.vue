<template>
  <div
    class="thumbnail"
    :class="{ active: image === activeImage }"
    v-for="(image, index) in props.images"
  >
    <img
      :class="{ active: image === activeImage }"
      :src="image.thumbnail"
      :key="image"
      :alt="`image ${index}`"
      @click="sendActiveImage(image)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["images"]);
const emit = defineEmits(["sendImage"]);

const activeImage = ref(props.images[0]);

const sendActiveImage = (image) => {
  activeImage.value = image;
  emit("sendImage", image);
};
</script>

<style lang="scss" scoped>
.thumbnail {
  border-radius: 0.7rem;
  height: fit-content;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  background-color: white;

  img {
    width: 100%;
    transition: all 0.2s ease-in-out;

    &.active {
      opacity: 0.3;
    }

    &:hover {
      opacity: 0.6;
    }
  }
}

.active {
  outline: 1px solid var(--color-primary);
}
</style>
