<template>
  <div class="presentation view view--hidden">
    <main class="carousel">
      <section class="carousel-cell" :class="{ 'active': index == activeSlider }" v-for="data, index of slideData" :key="index">
        <div class="carousel-slide" v-html="markedParse(data)"></div>
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
import hljs from 'highlight.js';

export default {
  data() {
    return {
      presentationData: [],
      slideData: [],
      activeSlider: 0
    };
  },
  async mounted() {
    window.myApi.fullscreen();
    this.presentationData = await this.getPresentationData();
    this.slideData = this.presentationData.presentation;
    this.injectStyle(this.presentationData.style)
    this.injectScript(this.presentationData.env)

    hljs.highlightAll();
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
    },
    injectStyle(styles){
      const style = document.createElement("style");
      style.innerText = styles
      document.head.appendChild(style)
    },
    injectScript(scripts){
      const script = document.createElement("script");
      script.innerText = scripts
      document.head.appendChild(script)
    }
  },
};
</script>
