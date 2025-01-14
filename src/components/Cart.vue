<template>
  <div class="cart">
    <div class="header">
      <h3>Cart</h3>
    </div>
    <span></span>
    <div class="content">
      <h4 v-if="store.quantity === 0">Your cart is empty.</h4>
      <div v-else class="full">
        <div class="item">
          <img src="/images/image-product-1-thumbnail.jpg" alt="" />
          <div class="details">
            <p>Fall Limited Edition Sneakers</p>
            <div>
              <span>$125.00 x {{ store.quantity }} </span>
              <span> ${{ store.quantity * 125 }}.00</span>
            </div>
          </div>
          <IconDelete
            @click="store.quantity = 0"
            style="cursor: pointer"
          ></IconDelete>
        </div>
        <button class="chekout-btn" type="button">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconDelete from "./icons/IconDelete.vue";
import { useCartStore } from "@/stores/cart";

const store = useCartStore();
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  width: 370px;
  height: 260px;
  left: 90%;
  display: flex;
  flex-direction: column;
  top: 160px;
  transform: translate(-80%, -27%);
  border-radius: 0.5rem;
  background-color: var(--color-white);
  z-index: 99;
  // --------horizontal/vertical/blur/spread/color
  box-shadow: 0px 12px 40px -20px rgba(120, 120, 120, 1);

  .header {
    padding: 1.5rem;
  }
  span {
    width: 100%;
    height: 2px;
    background-color: var(--color-border);
  }

  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem;

    h4 {
      color: var(--color-text);
    }

    .full {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 15%;
        border-radius: 0.3rem;
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-content: space-between;

        span {
          background-color: white;

          &:nth-child(2) {
            font-weight: bold;
            color: black;
          }
        }
      }
    }

    .chekout-btn {
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.2rem;
      cursor: pointer;
      margin-top: 1.5rem;
      background-color: var(--color-primary);
      color: white;
      font-weight: bold;
      border-radius: 0.5rem;
    }
  }
}
</style>
