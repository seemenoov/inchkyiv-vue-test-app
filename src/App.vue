<script setup lang="ts">
import AppBanner from "./components/AppBanner.vue";
import AppForm from "./components/AppForm.vue";
import AppFilms from "./components/AppFilms.vue";
</script>

<template>
  <div class="app">
    <section class="section-banner">
      <AppBanner />
    </section>
    <section class="section-content">
      <AppForm />
    </section>
    <section class="section-content">
      <AppFilms />
    </section>
  </div>
</template>

<style lang="scss">
.app {
  padding-bottom: 60px;
}

.section-banner {
  margin-bottom: 40px;
}

.section-content {
  & + & {
    margin-top: 80px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
  }
}
</style>
