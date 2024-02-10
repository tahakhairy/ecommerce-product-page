<template>
  <section class="product-details">
    <h6>{{ product.company }}</h6>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <div class="discount-price">
      <h2>${{ product.discounted_price }}.00</h2>
      <span
        >{{ (product.discounted_price / product.original_price) * 100 }}%</span
      >
    </div>
    <span class="original-price">${{ product.original_price }}.00</span>
    <div class="btns">
      <div class="quantity-btn btn">
        <span>-</span>
        <span>0</span>
        <span>+</span>
      </div>

      <div class="add-btn btn">
        <IconCart></IconCart>
        <span>Add to Cart</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconCart from "@/components/icons/IconCart.vue";
import { toRefs } from "vue";
const props = defineProps(["product"]);

const product = props.product;
console.log(product);
</script>

<style lang="scss" scoped>
.product-details {
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  h6 {
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--color-primary);
    font-size: 12px;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 1rem 0;
  }

  p {
    line-height: 1.5;
    margin: 1rem 0;
    background-color: var(--color-primary-pale);
  }

  .discount-price {
    display: flex;
    align-items: center;

    h2 {
      font-size: 1.7rem;
      margin: 0.5rem 0;
    }

    span {
      padding: 0.2rem 0.5rem;
      background-color: var(--color-primary-pale);
      color: var(--color-primary);
      border-radius: 0.5rem;
      font-weight: bold;
      margin-left: 0.7rem;
    }
  }

  .original-price {
    font-weight: bold;
    text-decoration: line-through;
    opacity: 0.5;
  }

  .btns {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;

    .btn {
      font-weight: bold;
      align-items: center;
      display: flex;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
    .quantity-btn {
      width: 35%;
      background-color: var(--color-border);

      justify-content: space-between;

      span:nth-child(2) {
        color: var(--color-black);
      }
      span:first-child,
      span:last-child {
        color: var(--color-primary);
        font-size: 1.7rem;
      }
    }

    .add-btn {
      width: 60%;
      background-color: var(--color-primary);
      color: var(--color-white);
      text-align: center;
      justify-content: center;

      span {
        margin-left: 1rem;
      }
    }
  }
}
</style>
