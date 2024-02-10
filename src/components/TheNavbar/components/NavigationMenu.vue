<template>
  <div class="nav-menu">
    <ul>
      <li><a href="#">Collections</a></li>
      <li><a href="#">Men</a></li>
      <li><a href="#">Women</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;

  li {
    padding: 1rem 0;
    margin: 0 1.3rem;
    position: relative;
    transition: all 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      display: block;
      height: 3px;
      bottom: -33px;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        background-color: var(--color-primary);
      }
    }

    a:hover {
      color: var(--color-black);
      cursor: pointer;
    }
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>
