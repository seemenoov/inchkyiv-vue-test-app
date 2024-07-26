<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import Radio from "./Radio.vue";

const films = ref([]);

const types = [
  {
    value: "alphabet",
    label: "відсортувати блоки за заголовком відповідно до алфавітного порядку",
  },
  {
    value: "reverse",
    label: 'вивести всі блоки у форматі "зображення - зліва, текст - справа',
  },
  {
    value: "chess",
    label:
      'вивести всі блоки у форматі "зображення - зліва, текст - справа" і навпаки в шаховому порядку',
  },
];

const type = ref("reverse");

const getData = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=3685d3eb8695f087227e0ee980f3ae4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );

    const { results } = await response.json();

    films.value = results.slice(0, 5);
  } catch (e) {
    console.log(e);
  }
};

getData();

const filteredMovies = computed(() => {
  if (type.value === "alphabet") {
    return [...films.value].sort((a: any, b: any) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  if (type.value === "chess") {
    return films.value.map((el: object, index: number) => {
      return {
        ...el,
        chess: index % 2,
      };
    });
  }

  return films.value;
});
</script>

<template>
  <div class="films">
    <div class="films__filters">
      <div
        class="films__radio"
        v-for="({ value, label }, index) in types"
        :key="index"
      >
        <Radio
          :label="label"
          v-model="type"
          :value="value"
          name="radio-filter"
        />
      </div>
    </div>
    <div class="films__content">
      <ul class="films__list">
        <li
          class="films__item"
          :class="{ _reverse: chess }"
          v-for="(
            { title, poster_path, overview, chess }, index
          ) in filteredMovies"
          :key="index"
        >
          <div class="films__img" v-if="poster_path">
            <img
              :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`"
              :alt="title"
            />
          </div>
          <div class="films__info">
            <div class="films__title" v-if="title">{{ title }}</div>
            <div class="films__text" v-if="overview">
              {{ overview }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.films {
  max-width: 1100px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  &__filters {
    max-width: 900px;
    margin: 0 auto 40px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 24px 40px;

    min-height: 324px;
    background: #c4c4c4;

    & + & {
      margin-top: 32px;
    }

    &._reverse {
      flex-direction: row-reverse;
    }

    @media (max-width: 767px) {
      min-height: 250px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  &__info {
    width: 100%;
    max-width: 500px;
  }

  &__title {
    margin-bottom: 20px;
    font-size: 30px;
  }

  &__img {
    width: 40%;

    @media (max-width: 767px) {
      width: 100%;
    }

    img {
      width: 100%;
      max-width: 300px;

      @media (max-width: 767px) {
        max-width: 100%;
      }
    }
  }
}
</style>
