<template>
  <header class="the-header container">
    <h1 class="the-header__title">PIZZA ZAZA</h1>
    <nav class="the-header__nav">
      <router-link
          v-for="(item, index) in menu"
          :key="index"
          class="the-header__link"
          :to="item.to"
      >
        <div class="the-header__icon-wrapper">
          <img class="the-header__icon" :src="item.image" alt=""/>
        </div>
        <span>{{ item.text }}</span>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "TheHeader",

  setup() {
    const menu = [
      {
        to: "/",
        image: "https://papajohns.ru/assets/pizza.db8a26b7.svg",
        text: "Пицца"
      },
      {
        to: "/snacks",
        image: "https://papajohns.ru/assets/snacks.239dc252.svg",
        text: "Закуски"
      },
      {
        to: "/beverages",
        image: "https://papajohns.ru/assets/drinks.c8ec31fc.svg",
        text: "Напитки"
      },
      {
        to: "/sauces",
        image: "https://papajohns.ru/assets/sauces.7b95408c.svg",
        text: "Соусы"
      },
      {
        to: "/desserts",
        image: "https://papajohns.ru/assets/dessert.d05914e9.svg",
        text: "Десерты"
      },
      {
        to: "/hotter",
        image: "https://papajohns.ru/assets/hot.d1fac6c0.svg",
        text: "Горячее"
      },
      {
        to: "/combo",
        image: "https://papajohns.ru/assets/combobox.7be70b23.svg",
        text: "Комбо"
      },
      {
        to: "/joy",
        image: "https://papajohns.ru/assets/other.d09818ef.svg",
        text: "Радости"
      }
    ];

    return {
      menu,
    };
  },
});
</script>

<style lang="scss" scoped>
.the-header {
  padding-top: 20px;
  margin-bottom: 50px;

  &__title {
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-red);
  }

  &__nav {
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
      transition: all 0.3s linear;
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
