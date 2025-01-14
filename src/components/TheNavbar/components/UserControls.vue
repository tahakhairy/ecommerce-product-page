<template>
  <div class="controls">
    <span
      v-if="store.quantity > 0"
      class="icon"
      @click="store.toggleCart"
      :data-before-content="store.quantity"
    >
      <IconCart />
    </span>
    <span v-else class="empty-cart-icon" @click="store.toggleCart">
      <IconCart />
    </span>

    <img src="images/image-avatar.png" alt="avatar-pic" />
  </div>
</template>

<script setup>
import IconCart from '@/components/icons/IconCart.vue'
import { useCartStore } from '@/stores/cart'

const store = useCartStore()
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  img {
    width: 50px;
    border-radius: 100%;
    outline-width: 2px;
    outline-style: solid;
    outline-color: transparent;
    transition: 0.2s ease;

    &:hover {
      cursor: pointer;
      outline-color: var(--color-primary);
    }
  }

  .empty-cart-icon {
    margin-right: 3rem;
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }
  .icon {
    margin-right: 3rem;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &::before {
      content: attr(data-before-content);
      position: absolute;
      width: 80%;
      color: white;
      background-color: var(--color-primary);
      height: 50%;
      border-radius: 6px;
      font-size: 9px;
      text-align: center;
      font-weight: bold;
      left: 40%;
      top: -20%;
    }
  }
}
</style>
