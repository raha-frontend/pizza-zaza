<template>
  <header class="the-header container">
    <div class="the-header__top">
      <h1 class="the-header__title">PIZZA ZAZA</h1>
      <router-link
        to="/cart"
        class="the-header__cart"
      >
        <icon-cart />
      </router-link>
    </div>
    <nav class="the-header__nav">
      <router-link
          v-for="(item, index) in nav"
          :key="index"
          :to="item.to"
          class="the-header__page"
      >
        {{ item.text }}
      </router-link>
    </nav>
    <div class="the-header__menu">
      <div
          v-for="(item, index) in menu"
          :key="index"
          class="the-header__link"
      >
        <div class="the-header__icon-wrapper">
          <img class="the-header__icon" :src="item.image" alt=""/>
        </div>
        <span>{{ item.text }}</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import IconCart from "./UI/IconCart.vue";

export default defineComponent({
  name: "TheHeader",

  components: {
    IconCart
  },

  setup() {
    const nav = [
      {
        to: "/",
        text: 'Главная'
      },
      {
        to: "/about",
        text: 'О компании'
      },
      {
        to: "/contacts",
        text: 'Контакты'
      },
      {
        to: "/cart",
        text: 'Корзина'
      }
    ];

    const menu = [
      {
        image: "https://papajohns.ru/assets/pizza.db8a26b7.svg",
        text: "Пицца"
      },
      {
        image: "https://papajohns.ru/assets/snacks.239dc252.svg",
        text: "Закуски"
      },
      {
        image: "https://papajohns.ru/assets/drinks.c8ec31fc.svg",
        text: "Напитки"
      },
      {
        image: "https://papajohns.ru/assets/sauces.7b95408c.svg",
        text: "Соусы"
      },
      {
        image: "https://papajohns.ru/assets/dessert.d05914e9.svg",
        text: "Десерты"
      },
      {
        image: "https://papajohns.ru/assets/hot.d1fac6c0.svg",
        text: "Горячее"
      },
      {
        image: "https://papajohns.ru/assets/combobox.7be70b23.svg",
        text: "Комбо"
      },
      {
        image: "https://papajohns.ru/assets/other.d09818ef.svg",
        text: "Радости"
      }
    ];

    return {
      nav,
      menu
    };
  },
});
</script>

<style lang="scss" scoped>
.the-header {
  padding-top: 20px;
  margin-bottom: 50px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  &__title {
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-red);
  }

  &__cart {
    position: relative;
    margin-left: 40px;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid var(--color-border);
      border-radius: 4px;
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    background-color: var(--color-border);
    border-radius: 14px;
  }

  &__page {
    display: block;
    padding: 30px;
    text-decoration: none;
    cursor: pointer;
    color: var(--color-black);

    &:hover {
      transition: all 0.2s linear;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      background-color: #FFFEFE6E;
      color: var(--color-red);
    }
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 124px;
    box-shadow: 0 0 10px rgba(69, 69, 69, .1);
    border-radius: 24px;
  }

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 12.5%;
    font-weight: 500;
    font-size: 18px;
    color: var(--color-black);
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--color-btn);
      transition: all 0.2s linear;
    }

    &.router-link-exact-active {
      color: var(--color-btn);
    }
  }

  &__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    margin-bottom: 8px;
  }
}
</style>
