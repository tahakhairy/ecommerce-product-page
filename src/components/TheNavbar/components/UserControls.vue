<template>
  <div class="controls">
    <span class="icon">
      <IconCart />
    </span>

    <img src="/src/assets/images/image-avatar.png" alt="avatar-pic" />
  </div>
</template>

<script setup>
import IconCart from "@/components/icons/IconCart.vue";
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

  .icon {
    margin-right: 3rem;
    position: relative;
  }
  .icon::before {
    content: "2";
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
</style>
