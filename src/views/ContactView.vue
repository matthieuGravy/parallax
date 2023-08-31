<script>
import servicesData from '@/assets/data/servicesData.json'
import spa from '../components/spa.vue'
import contactor from '../components/form.vue'
export default {
  components: {
    spa,
    contactor
  },
  data() {
    return {
      data: servicesData,
      currentLanguage: 'français',
      languages: ['français', 'english'],
      creationVisible: false
    }
  },
  methods: {
    changeLanguage(language) {
      this.currentLanguage = language
    },
    getText(key) {
      return this.data[this.currentLanguage][key]
    },
    toggleCreation() {
      this.creationVisible = !this.creationVisible
    }
  },
  computed: {
    toggleMsg() {
      return this.creationVisible ? 'back' : 'En savoir plus'
    }
  }
}
</script>
<template>
  <contactor></contactor>
</template>

<style lang="scss">
.prici {
  margin-top: 10vh;
}

.language-buttons {
  margin-top: 20px;
}
</style>
