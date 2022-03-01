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
  mounted() {
    new Flickity(document.querySelector(".main-carousel"));
  },
};
</script>
