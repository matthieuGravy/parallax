import { createPinia } from 'pinia'

export const pinia = createPinia()

export const useStore = pinia.createStore({
  state: () => ({
    currentLanguage: 'en'
  }),
  actions: {
    changeLanguage(language) {
      this.currentLanguage = language
    }
  },
  getters: {
    getCurrentLanguage: state => state.currentLanguage
  }
})
