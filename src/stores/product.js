import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const product = ref(null);

  const getData = async () => {
    const response = await fetch("/src/data/product.json");
    const data = await response.json();
    product.value = data.product;
    console.log(product.value);
  };

  return { product, getData };
});
