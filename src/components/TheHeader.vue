<template>
  <header class="the-header">
    <h1 class="the-header__title">PIZZA ZAZA</h1>
    <nav class="the-header__nav">
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        class="the-header__link"
        :to="item.to"
      >
        {{ item.text }}
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",

  setup() {
    const menu = [
      {
        to: "/",
        text: "Главная",
      },
      {
        to: "/about",
        text: "О нас",
      },
      {
        to: "/services",
        text: "Сервис",
      },
      {
        to: "/contacts",
        text: "Контакты",
      },
    ];

    return {
      menu,
    };
  },
});
</script>

<style lang="scss" scoped>
.the-header {
  &__title {
    text-align: center;
    color: var(--color-red);
  }

  &__nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-border);
  }

  &__link {
    display: block;
    padding: 18px;
    font-size: 18px;
    color: var(--color-black);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      transition: all 0.3s linear;
    }

    &.router-link-exact-active {
      background-color: var(--color-white);

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
