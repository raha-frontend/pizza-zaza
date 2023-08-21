<template>
  <div class="home-page">
    <home-banners />

    <div class="container">
      <div class="range__container">
        <div>
          <h2 class="home-page__title ">Пицца</h2>
          <div class="catalog">
            <pizza-card
                v-for="(pizza, index) in pizzaList"
                :key="index"
                class="catalog__card"
                :pizza="pizza"
            />
          </div>
          <h2 class="home-page__title ">Закуски</h2>
          <div class="catalog">
            <snacks-card
              v-for="(snacks, index) in snacksList"
              :key="index"
              class="catalog__card"
              :snacks="snacks"
            />
          </div>
        </div>

        <aside class="cart__sidebar">
          <div class="cart__sidebar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="32" height="32" style="enable-background:new 0 0 32 32"><path d="M30 .001h-4c-.967 0-1.795.691-1.967 1.643l-.43 2.357H2A1.999 1.999 0 0 0 .211 6.895l6 12A1.999 1.999 0 0 0 8 20h12.694l-.363 2H10a2 2 0 0 0 0 4h12c.967 0 1.795-.691 1.967-1.643L27.67 3.999H30a2 2 0 0 0 0-4v.002zm-20.763 16-4-8h17.641l-1.455 8H9.237zM12 28.001a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 28.001zM20 28.001a2 2 0 1 0 .001 4.001A2 2 0 0 0 20 28.001z"/></svg>
          </div>
          <h3 class="cart__sidebar-title">Корзина</h3>
          <div class="cart__sidebar-content">
            <img class="cart__sidebar-img" src="../../../public/pizza-box.png" alt="pizza-box">
            <span class="cart__sidebar-descr">Корзина пуста. Выберите пиццу из меню или повторите предыдущий заказ</span>
          </div>
        </aside>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";

import AppButton from '../../components/UI/AppButton.vue';

import HomeBanners from "./HomeBanners/index.vue";

import PizzaCard from "./PizzaCard/index.vue";

import SnacksCard from "./SnacksCard/index.vue";

export default defineComponent({
  name: "Home",

  components: {
    AppButton,
    HomeBanners,
    PizzaCard,
    SnacksCard,
  },

  setup() {

    const pizzaList = [
      {
        id: 1,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Meat-traditional.webp",
        name: "Мясная",
        descr: "Супермясная пицца с пикантной пепперони, ветчиной, хрустящим беконом, ароматной свининой, говядиной, Моцареллой и фирменным томатным соусом",
        price: 40
      },
      {
        id: 2,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Chicken-ranch-traditional.webp",
        name: "Цыпленок Рэнч",
        descr: "Пикантная пицца с сочным куриным филе, хрустящим беконом, соусом 'Чесночный Рэнч', Моцареллой, чесноком и томатами",
        price: 43
      },
      {
        id: 3,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/ea0010b5eb1c84783a242d11bd014264.webp",
        name: "Супер Папа",
        descr: "Хит 'Папа Джонс' с пикантной пепперони, ветчиной, ароматной свининой, фирменным томатным соусом, Моцареллой, шампиньонами, луком, маслинами и сладким перцем. С пикантной остринкой",
        price: 45
      },
      {
        id: 4,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/717c70cd1e5ddce84459cd528dd845c9.webp",
        name: "Цыплёнок Грин",
        descr: "Сочное куриное филе,сыр моцарелла, сладкий перец, соус 'Чесночный рэнч', чеснок и томаты.",
        price: 42
      },
      {
        id: 5,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/34f3b1f22d355b83992b1bc9a6e8ba4d.webp",
        name: "Микс Грин",
        descr: "Соус «Тысяча островов», шампиньоны, лук, сладкий перец и пикантная пепперони, сыр 'Моцарелла'",
        price: 46
      },
      {
        id: 6,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/9708b9aac646d95d92be83a4e1c710ee.webp",
        name: "Сливочная с креветками",
        descr: "Сливочная с креветками: креветки в нежном сливочном сыре, с моцареллой и томатами, с ароматом итальянских трав и чеснока",
        price: 49
      },
      {
        id: 7,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni-traditional.webp",
        name: "Пепперони",
        descr: "Американская классика с пикантной пепперони, Моцареллой и фирменным томатным соусом",
        price: 50
      },
      {
        id: 8,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/92bc6bca0b58b92c4bad051716d7af4d.webp",
        name: "Баварская",
        descr: "Моцарелла, альпийские колбаски, запечённые дольки картофеля, хрустящий бекон, сладкий перец, смесь итальянских сыров и соус барбекю",
        price: 49
      },
      {
        id: 9,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/8036e41d989a3b6e9d04506bb7e8476a.webp",
        name: "Мексиканская",
        descr: "Острая пицца с куриным филе, фирменным томатным соусом, Моцареллой, шампиньонами, луком, томатами, сладким перцем и перцем 'Халапеньо'",
        price: 43
      }
    ];

    const snacksList = [
      {
        id: 1,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/b609ae8d9268bc43203a95ae023d0569.webp",
        name: "Картофель из печи",
        descr: "Картофельные брусочки из печи",
        price: 30
      },
      {
        id: 2,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/c7f80bde62e53d6a1951f97d327b5f81.webp",
        name: "Куриные наггетсы",
        descr: "Сочные кусочки куриного филе",
        price: 33
      },
      {
        id: 3,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Cheesesticks.webp",
        name: "Сырные палочки",
        descr: "Любимая закуска с Моцареллой и соусом 'Особый чесночный'",
        price: 31
      },
      {
        id: 4,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/dede7359569c8ad6d5ae1e60890652b5.webp",
        name: "Рогалики с сыром",
        descr: "Рогалики из нежного теста с чесночным соусом, сыром моцарелла. Сервируются с соусом на выбор",
        price: 32
      },
      {
        id: 5,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/a0a3aede8506c16c67764a08a51785cd.webp",
        name: "Куриные крылышки Барбекю",
        descr: "Куриные крылышки с соусом 'Барбекю'",
        price: 35
      },
      {
        id: 6,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni%20rolls.jpg",
        name: "Пепперони ролл",
        descr: "Мини-роллы с Моцареллой, пикантной пепперони и соусом 'Чесночный Рэнч'",
        price: 34
      },
    ];

    return {
      pizzaList,
      snacksList,
    };
  }
});
</script>

<style lang="scss" scoped>
.home-page {

}

.range__container {
  position: relative;
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
}

.home-page__title {
  font-size: 30px;
}

.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 50px 0;
  width: 896px;
}

.cart__sidebar {
  position: sticky;
  top: 80px;
  height: 420px;
  margin-top: 85px;
  padding: 10px;
  background-color: var(--color-white);
  border-radius: 4px;
  flex-grow: 1;

  &-icon {
    position: relative;
    display: block;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 4px;
      background-color: var(--color-btn);
      top: 50%;
      transform: translateY(-50%);
      border-radius: 2px;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }

  &-icon path {
    fill: var(--color-btn);
  }

  &-title {
    text-align: center;
    margin-bottom: 20px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-img {
    display: block;
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  &-descr {
    text-align: center;
    color: var(--color-text-grey);
  }
}
</style>
