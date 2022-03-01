<template>
  <main class="upload view">
    <section class="choose-file">
      <div class="choose-file__container">
        <div class="choose-file__head">
          <h1 class="choose-file__title">
            CodePrez
          </h1>
        </div>
        <div class="choose-file__body">
          <label class="choose-file__label" for="file">
            <div class="choose-file__label__container">
              <div class="choose-file__label__body">
                <img src="@/assets/svg/file-icon.svg" alt="icon">
                <p>Déposez un fichier</p>
                <p class="choose-file__label__separator">
                  ou
                </p>
                <button @click="onClick">
                  Choisir un fichier
                </button>
                <p v-if="error || file" class="error info">
                  {{ error || file }}
                </p>
              </div>
            </div>
            <input @change="onUpload" class="choose-file__input" type="file" id="file"></label>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import envPath from '@/scripts/main.js';

export default {
  name: 'UploadView',
  data() {
    return {
      error: '',
      file: ''
    }
  },
  methods: {
    onClick() {
      document.querySelector('#file').click();
    },
    onUpload(e) {
      // Selector
      let file = e.target.files[0];
      let input = document.querySelector('#file');

      // Regex
      let er = /^.+\.(codeprez)$/i;

      // Wrong Format
      if(!er.test(file.name)) {
        this.error = 'Mauvais format';
        return input.value = "";
      }

      this.error = "";
      this.file = file.name;

      this.$router.push('/presentation');
    }
  }
}
</script>
