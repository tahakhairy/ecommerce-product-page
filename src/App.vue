<template>
  <div class="container">
    <Cart v-if="cartStore.visible"></Cart>

    <TheNavbar />

    <Suspense>
      <TheProduct />
    </Suspense>
  </div>

  <Modal v-if="modalStore.isOpen"></Modal>
</template>

<script setup>
import TheNavbar from './components/TheNavbar/TheNavbar.vue'
import TheProduct from './components/TheProduct/TheProduct.vue'
import Modal from '@/components/Modal.vue'
import Cart from '@/components/Cart.vue'
import { useCartStore } from './stores/cart'
import { useModalStore } from './stores/modal'

const modalStore = useModalStore()
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
@media (max-width: 900px) {
  .container {
    max-width: 100%;
    margin: 0;
  }
}
</style>
