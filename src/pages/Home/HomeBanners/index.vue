<template>
  <div class="home-banner">
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
          v-for="banner in banners"
          :key="banner.id"
      >
        <img
            :src="banner.image"
            alt=""
            class="slider_image"
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import {Swiper, SwiperSlide} from 'swiper/vue';

import {Autoplay, Pagination, Navigation} from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';

import 'swiper/css/navigation';
export default defineComponent({
  name: 'HomeBanner',
  components: {SwiperSlide, Swiper},

  setup() {
    const banners = [
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

    return {
      modules: [Pagination, Autoplay, Navigation],
      banners,
    }
  }
})
</script>

<style lang="scss" scoped>
  .home-banner {
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
</style>