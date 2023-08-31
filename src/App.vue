<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { gsap } from 'gsap'

let previousScrollY = 0
let headerHidden = false

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > previousScrollY && !headerHidden) {
    // Faites défiler vers le bas, cachez le header
    headerHidden = true
    gsap.to('header', { top: '-100px', duration: 0.3 })
  } else if (currentScrollY < previousScrollY && headerHidden) {
    // Faites défiler vers le haut, affichez le header
    headerHidden = false
    gsap.to('header', { top: '0', duration: 0.3 })
  }

  previousScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<script>
import en from './locales/en.json'
import fr from './locales/fr.json'

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

<template>
  <header>
    <div class="logo">
      <img src="src/assets/images/itsgravytrans-2.png" alt="logo de itsgravy" />
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/contact">Contat</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <ul>
      <li>github</li>
      <li>linkedin</li>
    </ul>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header {
  //background-color: rgb(32, 32, 32);
  width: 100%;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10;

  .logo {
    img {
      display: block;
      height: 4vh;
    }
  }
  ul {
    color: white;
  }
  nav {
    font-size: 12px;
    text-align: center;

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);
      .router-link-exact-active:hover {
        background-color: transparent;
      }
      .router-link-exact-active {
        color: var(--color-text);
      }
      &::first-of-type {
        border: 0;
      }
    }
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }
  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
