<template>
  <header class="the-header">
    <h1 class="the-header__title">PIZZA ZAZA</h1>
    <div class="the-header__link-wrapper">
      <router-link class="the-header__link" to="/">Главная</router-link>
      <router-link class="the-header__link" to="/about">О нас</router-link>
      <router-link class="the-header__link" to="/services">Сервис</router-link>
      <router-link class="the-header__link" to="/contacts"
        >Контакты</router-link
      >
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",

  setup() {},
});
</script>

<style lang="scss" scoped>
.the-header {
  &__title {
    text-align: center;
    color: var(--color-red);
  }

  &__link-wrapper {
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
