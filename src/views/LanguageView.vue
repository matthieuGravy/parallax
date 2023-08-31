<template>
  <div class="container-lang">
    <p>La langue actuelle est : {{ $store.getCurrentLanguage }}</p>
  </div>
</template>

<script>
import en from '../locales/en.json'
import fr from '../locales/fr.json'

export default {
  components: {},
  data() {
    return {
      data: { en, fr },
      currentLanguage: 'en'
    }
  },
  methods: {
    changeLanguage(language) {
      this.currentLanguage = language
    },
    getText(key) {
      return this.data[this.currentLanguage][key]
    }
  }
}
</script>

<style lang="scss">
.container-lang {
  margin: 20vh;
}
</style>
