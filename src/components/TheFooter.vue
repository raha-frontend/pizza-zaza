<template>
  <div class="the-footer container">
    <div class="the-footer__copy">&copy; {{ year }} Pizza-Zaza</div>
    <div class="the-footer__info">
      <span
        >Разработка сайта -
        <a
          href="https://github.com/raha-frontend"
          class="the-footer__link"
          target="_blank"
        >
          Рахман Гаджимурадов
        </a>
      </span>
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
  margin-bottom: 20px;
  background-color: var(--color-border);
  border-radius: 14px;

  &__info {
    display: flex;
    align-items: center;
  }

  &__link {
    padding: 5px 0;
    text-decoration: none;
    color: var(--color-red);

    &:hover {
      text-decoration: underline;
      transition: all 0.3s linear;
    }
  }
}
</style>
