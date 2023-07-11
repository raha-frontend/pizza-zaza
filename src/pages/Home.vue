<template>
  <div class="home-page">
    <swiper
        :slidesPerView="2"
        :centeredSlides="true"
        :spaceBetween="20"
        navigation
        :pagination="{
				clickable: true,
			}"
        loop
        :autoplay="{
				delay: 2500,
				disableOnInteraction: false,
			}"
        :modules="modules"
        class="slider"
    >
      <swiper-slide
          v-for="slideItem in reviewsList"
          :key="slideItem.id"
      >
        <img
            :src="slideItem.image"
            alt=""
            class="slider_image"
        >
      </swiper-slide>
    </swiper>
  </div>

  <div class="container">
    <h2 class="home-page__title ">Ассортимент</h2>
    <div class="catalog">
      <div
          v-for="(pizza, index) in pizzaList"
          :key="index"
          class="catalog__card"
      >
        <img
            class="catalog-card__img"
            :src="pizza.image"
            alt="pizza__img"
        />
        <div class="catalog-card__content">
          <div class="catalog-card__content-column">
            <p class="catalog-card__name">{{ pizza.name }}</p>
            <p class="catalog-card__description">{{ pizza.descr }}</p>
          </div>
          <div class="catalog-card__content-column">
            <p class="catalog-card__price">Цена: {{ pizza.price }} $</p>
            <app-button>В корзину</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import AppButton from '../components/UI/AppButton.vue';

import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';

import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation} from 'swiper/modules';

export default defineComponent({
  name: "Home",

  components: {
    Swiper,
    SwiperSlide,
    AppButton
  },

  setup() {
    const reviewsList = [
      {
        id: 1,
        image: '/images/slider/slide-1.jpg'
      },
      {
        id: 2,
        image: '/images/slider/slide-2.jpg'
      },
      {
        id: 3,
        image: '/images/slider/slide-3.jpg'
      },
      {
        id: 4,
        image: '/images/slider/slide-4.jpg'
      },
      {
        id: 5,
        image: '/images/slider/slide-5.jpg'
      },
      {
        id: 6,
        image: '/images/slider/slide-6.jpg'
      }
    ];

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
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/159a80338bf7e2745d8efb3e3a8e05ff.webp",
        name: "Пепперони Грин",
        descr: "Пикантная пепперони, сладкий перец, Моцарелла с фирменным томатным соусом",
        price: 47
      },
      {
        id: 6,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/34f3b1f22d355b83992b1bc9a6e8ba4d.webp",
        name: "Микс Грин",
        descr: "Соус «Тысяча островов», шампиньоны, лук, сладкий перец и пикантная пепперони, сыр 'Моцарелла'",
        price: 46
      },
      {
        id: 7,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/9708b9aac646d95d92be83a4e1c710ee.webp",
        name: "Сливочная с креветками",
        descr: "Сливочная с креветками: креветки в нежном сливочном сыре, с моцареллой и томатами, с ароматом итальянских трав и чеснока",
        price: 49
      },
      {
        id: 8,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni-traditional.webp",
        name: "Пепперони",
        descr: "Американская классика с пикантной пепперони, Моцареллой и фирменным томатным соусом",
        price: 50
      },
      {
        id: 9,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Chicken-BBQ-traditional.webp",
        name: "Цыпленок Барбекю",
        descr: "Сочное куриное филе и хрустящий бекон в сочетании с фирменным томатным соусом, Моцареллой и луком",
        price: 45
      },
      {
        id: 10,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/ca7e52823f6dfa5bfddae8391588e36f.webp",
        name: "Томатная с креветками",
        descr: "Томатная с креветками: яркий вкус креветок, фирменного томатного соуса, сыра моцарелла, свежих томатов и мягкого молодого сыра",
        price: 44
      },
      {
        id: 11,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/92bc6bca0b58b92c4bad051716d7af4d.webp",
        name: "Баварская",
        descr: "Моцарелла, альпийские колбаски, запечённые дольки картофеля, хрустящий бекон, сладкий перец, смесь итальянских сыров и соус барбекю",
        price: 49
      },
      {
        id: 12,
        image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/8036e41d989a3b6e9d04506bb7e8476a.webp",
        name: "Мексиканская",
        descr: "Острая пицца с куриным филе, фирменным томатным соусом, Моцареллой, шампиньонами, луком, томатами, сладким перцем и перцем 'Халапеньо'",
        price: 43
      }
    ]

    return {
      modules: [Pagination, Autoplay, Navigation],
      reviewsList,
      pizzaList
    };
  }
});
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  :deep(.swiper) {
    padding-bottom: 30px;
  }

  --swiper-navigation-top-offset: calc(50% - 5px);

  --swiper-pagination-top: calc(100% - 30px);
}

.slider_image {
  border-radius: 10px;
}

.home-page__title {
  font-size: 30px;
  text-align: center;
}

.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 50px 0;

  &__card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  &-card__img {
    max-width: 100%;
    height: auto;
  }

  &-card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    flex-grow: 1;
  }

  &-card__description {
    margin-top: 0;
  }

  &-card__content-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-card__name,
  &-card__price {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 30px;
  }
}
</style>
