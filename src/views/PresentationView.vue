<template>
  <div class="presentation view view--hidden">
    <!-- <carousel :arrows="true" class="slider main-carousel">
        <slide class="carousel-cell" v-for="data, index of slideData" :key="index">
            <div class="slider-cell" v-html="markedParse(data)"></div>
        </slide>
    </carousel> -->
    <main class="carousel">
      <section class="carousel-cell" v-for="data, index of slideData" :key="index">
        <div class="carousel-slide" :class="{ 'active': index == activeSlider }" v-html="markedParse(data)"></div>
      </section>
      <div class="carousel-arrows">
        <span class="carousel-arrow carousel-prev" @click="prevSlide">
        </span>
        <span class="carousel-arrow carousel-next" @click="nextSlide">
        </span>
      </div>
    </main>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  data() {
    return {
      presentationData: [],
      slideData: [],
      activeSlider: 0
    };
  },
  async mounted() {
    this.presentationData = await this.getPresentationData();
    this.slideData = this.presentationData.presentation;
  },
  methods: {
    async getPresentationData() {
      return await window.myApi.getPresentationData();
    },
    markedParse(data) {
      return marked.parse(data);
    },
    prevSlide() {
      if(this.activeSlider > 0) {
        this.activeSlider--;
      }
    },
    nextSlide() {
      if(this.activeSlider < (this.slideData.length - 1)) {
        this.activeSlider++;
      }
    }
  },
};
</script>
