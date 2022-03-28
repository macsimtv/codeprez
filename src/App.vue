<template>
    <router-view/>
</template>

<script>
export default {
  methods: {
    onEsc() {
      window.myApi.noFullscreen();
    }
  },
  created() {
    this.$router.push('/')
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
