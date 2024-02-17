import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const visible = ref(false);
  const quantity = ref(0);

  const toggleCart = () => {
    visible.value = !visible.value;
  };
  return { visible, toggleCart, quantity };
});
