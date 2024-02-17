import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);

  const openModal = () => {
    if (!isOpen.value) {
      isOpen.value = true;
    }
  };

  const closeModal = () => {
    if (isOpen.value) {
      isOpen.value = false;
    }
  };

  return { isOpen, openModal, closeModal };
});
