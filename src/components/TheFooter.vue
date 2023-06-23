<template>
  <div class="the-footer">
    <div class="the-footer__copy">&copy; {{ year }} Pizza-Zaza</div>
    <div class="the-footer__info">
      <span class="the-footer__author">Разработка сайта - Рахман</span>
      <a
        href="https://github.com/raha-frontend"
        class="the-footer__link"
        target="_blank"
      >
        Ссылка на гитхаб
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheFooter",

  setup() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();

    return {
      year,
    };
  },
});
</script>

<style lang="scss" scoped>
.the-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: var(--color-border);

  &__info {
    display: flex;
    align-items: center;
  }

  &__author {
    display: block;
    margin-right: 10px;
  }

  &__link {
    padding: 5px 10px;
    text-decoration: none;
    color: var(--color-red);
    &:hover {
      text-decoration: underline;
      transition: all 0.3s linear;
    }
  }
}
</style>
