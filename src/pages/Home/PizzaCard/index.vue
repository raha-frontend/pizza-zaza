<template>
  <div
    class="pizza-card"
  >
    <img
        class="pizza-card__img"
        :src="pizza.image"
        alt="pizza__img"
    />
    <div class="pizza-card__content">
      <div class="pizza-card__content-column">
        <p class="pizza-card__name">{{ pizza.name }}</p>
        <p class="pizza-card__description">{{ pizza.descr }}</p>
      </div>
      <div class="pizza-card__content-column">
        <p class="pizza-card__price">Цена: {{ pizza.price }} $</p>
        <app-button
          @click="handleAddToCartClick"
        >
          В корзину
        </app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

import AppButton from '../../../components/UI/AppButton.vue';
export default defineComponent({
  name: 'PizzaCard',

  components: {
    AppButton,
  },

  props: {
    pizza: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, context) {
    const handleAddToCartClick = () => {
      console.log(props.pizza)
    }

    return {
      handleAddToCartClick,
    }
  }
})
</script>

<style lang="scss" scoped>
  .pizza-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--color-white);
    border-radius: 4px;

    &__img {
      max-width: 100%;
      height: auto;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      flex-grow: 1;
    }

    &__description {
      margin-top: 0;
    }

    &__content-column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__name,
    &__price {
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 30px;
    }
  }
</style>