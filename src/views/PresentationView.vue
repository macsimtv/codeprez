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

    setTimeout(() => {
      document.querySelectorAll('pre code').forEach(el => {
        hljs.highlightElement(el);
      })
      this.injectScript('var process = {};process.exit = () => {};')
      this.checkInjectButton()
    }, 500)
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
    checkInjectButton(){
        for (const script of this.presentationData.envs) {
          for (const elem of document.querySelectorAll('pre code.language-bash')) {
            if (elem.innerText.includes(script.accessPath)) {
              let button = document.createElement("button");
              button.innerHTML = "executer";
              elem.appendChild(button);
              button.addEventListener("click", function () {
                  this.injectScript(script.code)
              }.bind(this));
            }
          }
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
    },
    randomCharacter(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  },
};
</script>
