<template>
  <div class="home">
    <h1>
      Home
    </h1>
  </div>
</template>

<script>
import envPath from '@/scripts/main.js';

export default {
  name: 'HomeView',
  mounted() {
    console.log(envPath);
  }
}
</script>
