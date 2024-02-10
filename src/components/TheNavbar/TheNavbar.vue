<template>
  <nav class="navbar">
    <div class="logo-menu">
      <AppLogo class="logo" />
      <NavigationMenu />
    </div>

    <UserControls class="controls" />
  </nav>
</template>

<script setup>
import AppLogo from "../icons/AppLogo.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import UserControls from "./components/UserControls.vue";
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 2px solid var(--color-border);

  .logo {
    margin-right: 2.5rem;
  }
  .logo-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    padding: 1rem;
    border: none;
  }
}
</style>
