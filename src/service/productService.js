export async function fetchProductData() {
  try {
    const response = await fetch("/product.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.product;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
