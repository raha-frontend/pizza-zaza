<template>
  <div class="app">
    <the-header />

    <main>
      <router-view />
    </main>

    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default defineComponent({
  name: "App",

  components: {
    TheHeader,
    TheFooter,
  },
});
</script>

<style lang="scss">
:root {
  --color-white: #fff;
  --color-border: #e5e5e5;
  --color-red: #ed1c21;
  --color-black: #231f1e;
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

main {
  min-height: calc(100vh - 134.5px - 69px);
}

.app {
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
