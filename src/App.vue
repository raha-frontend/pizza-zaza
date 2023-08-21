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
  --color-body: #f8f8f8;
  --color-btn: #50a684;
  --color-text-grey: rgba(224, 224, 224, 0.99);
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
h5,
h6 {
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: var(--color-body);
}

main {
  min-height: calc(100vh - 134.5px - 69px);
}

.container {
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
}
</style>
