import { ref } from "vue";
import { defineStore } from "pinia";
import { fetchProductData } from "@/service/productService";

export const useProductStore = defineStore("product", () => {
  const product = ref(null);

  const getData = async () => {
    const data = await fetchProductData();
    product.value = data;
  };

  return { product, getData };
});
