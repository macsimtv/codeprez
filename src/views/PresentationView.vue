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
  mounted() {
    this.presentationData = this.getPresentationData();
    console.log(this.presentationData);

    new Flickity(document.querySelector(".main-carousel"));
  },
  methods: {
    async getPresentationData() {
      return await window.myApi.getPresentationData();
    }
  }
};
</script>
