<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative, Pagination } from "swiper/modules";

// import swiperCore from "swiper";
import "swiper/css/effect-creative";
import "swiper/css";

const slides = ref(["#027d84", "#4a989a", "#afb3b4"]);

const modules = ref([EffectCreative, Pagination]);

const swiperRef = ref();

const next = () => {
  swiperRef.value.$el.swiper.slideNext();
};
</script>

<template>
  <div class="banner">
    <swiper
      ref="swiperRef"
      :modules="modules"
      :loop="true"
      :effect="'creative'"
      :slides-per-view="1.03"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :creativeEffect="{
        prev: {
          translate: ['0%', 0, 0],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <swiper-slide
        class="banner-item"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ backgroundColor: slide }"
      >
        <div class="banner-item__top">Lorem ipsum dolor sit amet</div>
        <div class="banner-item__content">
          <div class="banner-item__title">
            <span>lorem ipsum</span>
            <span>Lorem ipsum dolor — </span>
            <span>Lorem</span>
            <span>ipsum !</span>
          </div>
          <p class="banner-item__text">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit
          </p>
        </div>
        <div class="banner-item__img ellipse_1">
          <img src="../assets/img/dog.png" alt="" />
        </div>
        <div class="banner-item__img ellipse_2">
          <img src="../assets/img/ellipse_grey.svg" alt="" />
        </div>
        <div class="banner-item__img ellipse_3">
          <img src="../assets/img/ellipse_transparent.png" alt="" />
        </div>

        <div class="banner-item__img arrow" @click.capture="next">
          <img src="../assets/img/arrow.svg" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.swiper-slide {
  border-radius: 0 16px 16px 0;
}

.swiper-slide-next {
  border-radius: 16px 0 0 16px;
}

.swiper-pagination {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 120px;
  height: 60px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  z-index: 5;
  color: #fff;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 1024px) {
    display: flex;
    bottom: 32px;
    left: 32px;
  }
}

.banner-item {
  overflow: hidden;
  min-height: 90vh;
  padding: 120px 60px 60px 180px;
  position: relative;
  z-index: 10;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 1024px) {
    padding: 80px 60px;
    min-height: 100vh;
  }

  &__title {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    font-size: 60px;
    line-height: 1.2;
    color: #fff;
    text-transform: uppercase;

    span {
      &:nth-child(1) {
        font-size: 64px;
        font-weight: 700;

        @media (max-width: 1024px) {
          font-size: 40px;
        }
      }
      &:nth-child(2) {
        -webkit-text-stroke: 1px #000;
        text-indent: 34px;
      }
      &:nth-child(3) {
        text-indent: 15%;
      }
      &:nth-child(4) {
        text-indent: 8%;
      }
    }

    @media (max-width: 1024px) {
      font-size: 40px;
    }
  }

  &__text {
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    width: fit-content;
    margin: 0 auto;
    transform: translateX(-100%);

    @media (max-width: 1024px) {
      transform: translateX(50%);
    }
  }

  &__top {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    left: 120px;
    &::after {
      content: "";
      position: absolute;
      top: -100px;
      left: -35px;
      display: block;
      width: 300px;
      height: 250px;
      z-index: -1;
      background: url("../assets/img/ellipse_grey.svg") no-repeat top/100%;
      transform: rotate(20deg);
    }

    @media (max-width: 1024px) {
      left: auto;
      right: 120px;
    }
  }
}

.banner-item__img {
  position: absolute;
  max-width: 500px;
  width: 100%;
  height: auto;

  &.ellipse_1 {
    right: 0;
    bottom: 0;

    transform: translate(-70%, -15%);
    z-index: 1;

    @media (max-width: 1024px) {
      transform: translate(-50%, -20%);
    }
  }

  &.ellipse_2 {
    right: 0;
    bottom: 0;
    transform: translate(-50%, -65%) rotate(-10deg);
    z-index: 0;

    @media (max-width: 1024px) {
      transform: translate(-30%, -45%);
    }
  }

  &.ellipse_3 {
    right: 0;
    bottom: 0;
    transform: translate(-10%, -75%);

    @media (max-width: 1024px) {
      transform: translate(-10%, -60%);
    }
  }

  &.arrow {
    width: 100%;
    max-width: 120px;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: pointer;
  }
}
</style>
