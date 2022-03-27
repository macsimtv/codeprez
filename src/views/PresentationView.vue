<template>
  <main class="presentation view view--hidden">
    <section class="slider main-carousel">
        <div class="carousel-cell" v-for="index of 20" :key="index">
            <h1>
                Slide {{ index }}
            </h1>
        </div>
    </section>
  </main>
</template>

<script>
import Flickity from "flickity";

export default {
  data() {
    return {
      presentationData: []
    }
  },
  async mounted() {
    this.presentationData = await this.getPresentationData();
    this.injectStyle(this.presentationData.style)
    this.injectScript(this.presentationData.env)
    new Flickity(document.querySelector(".main-carousel"));
  },
  methods: {
    async getPresentationData() {
      return await window.myApi.getPresentationData();
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
  }
};
</script>
