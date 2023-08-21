<template>
  <div
      class="snacks-card"
  >
    <img
        class="snacks-card__img"
        :src="snacks.image"
        alt="snacks__img"
    />
    <div class="snacks-card__content">
      <div class="snacks-card__content-column">
        <p class="snacks-card__name">{{ snacks.name }}</p>
        <p class="snacks-card__description">{{ snacks.descr }}</p>
      </div>
      <div class="snacks-card__content-column">
        <p class="snacks-card__price">Цена: {{ snacks.price }} $</p>
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
  name: 'SnacksCard',

  components: {
    AppButton,
  },

  props: {
    snacks: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, context) {
    const handleAddToCartClick = () => {
      console.log(props.snacks)
    }

    return {
      handleAddToCartClick,
    }
  }
})
</script>

<style lang="scss" scoped>
  .snacks-card {
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